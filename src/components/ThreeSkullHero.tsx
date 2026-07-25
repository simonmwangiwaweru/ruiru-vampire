"use client";

import { useEffect, useRef, useState } from "react";

type ThreeInstance = {
  run: () => Promise<void>;
  dispose: () => void;
  scene: { ready: Promise<void> };
};

const BAD_RENDERER_SIGNATURES = [
  "swiftshader",
  "llvmpipe",
  "software",
  "basic render",
  "microsoft basic",
  "google, vulkan",
  "vmware",
];

/**
 * The ported scene runs a heavy per-frame render pipeline (dual scenes,
 * ping-pong fluid sim, bloom, custom TSL shaders) synchronously on the main
 * thread. Under a software rasterizer (no real GPU) this doesn't just run
 * slow — it can starve the event loop badly enough to freeze the whole page,
 * not just the hero. Probe for a software renderer up front and skip
 * mounting the scene entirely rather than risk that.
 */
function hasHardwareAcceleration() {
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl2") ||
      canvas.getContext("webgl")) as WebGLRenderingContext | null;
    if (!gl) return false;

    const info = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = info
      ? gl.getParameter(info.UNMASKED_RENDERER_WEBGL)
      : gl.getParameter(gl.RENDERER);
    const str = String(renderer).toLowerCase();

    return !BAD_RENDERER_SIGNATURES.some((sig) => str.includes(sig));
  } catch {
    return false;
  }
}

export function ThreeSkullHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [unsupported, setUnsupported] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let instance: ThreeInstance | null = null;

    if (!hasHardwareAcceleration()) {
      setUnsupported(true);
      return;
    }

    (async () => {
      try {
        const { default: Three } = await import("@/three/core/Three");
        if (!containerRef.current || cancelled) return;

        instance = new Three(containerRef.current) as unknown as ThreeInstance;
        await instance.run();
        if (cancelled) return;

        // The scene renders (fog/bloom/grain) before the GLTF models finish
        // decoding. Don't leave the loading label stuck forever on a slow
        // network — stop showing it after a timeout even if the models are
        // still mid-load; they'll pop in whenever they resolve.
        await Promise.race([
          instance.scene.ready,
          new Promise((resolve) => setTimeout(resolve, 8000)),
        ]);
        if (!cancelled) setReady(true);
      } catch (err) {
        console.error("ThreeSkullHero failed to initialize:", err);
        if (!cancelled) setUnsupported(true);
      }
    })();

    return () => {
      cancelled = true;
      instance?.dispose();
    };
  }, []);

  return (
    <div className="relative h-full w-full bg-obsidian">
      {!unsupported && <div ref={containerRef} className="absolute inset-0" />}

      {!ready && !unsupported && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="font-cctv text-[11px] tracking-widest text-ash animate-pulse">
            LOADING FEED…
          </span>
        </div>
      )}
    </div>
  );
}
