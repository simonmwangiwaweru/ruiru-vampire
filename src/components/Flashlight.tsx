"use client";

import { useEffect, useRef, useState } from "react";

export function Flashlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = wrapRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [enabled]);

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      {children}

      {enabled && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "rgba(0,0,0,0.93)",
            WebkitMaskImage:
              "radial-gradient(circle 150px at var(--mx, 50%) var(--my, 30%), transparent 0%, transparent 55%, white 100%)",
            maskImage:
              "radial-gradient(circle 150px at var(--mx, 50%) var(--my, 30%), transparent 0%, transparent 55%, white 100%)",
          }}
        >
          <div className="noise-overlay" />
        </div>
      )}
    </div>
  );
}
