"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const ballRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const path = pathRef.current;
    const ball = ballRef.current;
    if (!path || !ball) return;

    const pathLength = path.getTotalLength();

    if (reduceMotion) {
      const mid = path.getPointAtLength(pathLength * 0.5);
      ball.setAttribute("cx", String(mid.x));
      ball.setAttribute("cy", String(mid.y));
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const progress = clamp(-rect.top / (rect.height - window.innerHeight * 0.4), 0, 1);

      const point = path.getPointAtLength(pathLength * progress);
      ball.setAttribute("cx", String(point.x));
      ball.setAttribute("cy", String(point.y));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-chalk"
    >
      <GitothuaStreetscape pathRef={pathRef} ballRef={ballRef} />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 pt-[60px] pb-[240px] text-center md:px-10 md:pb-[300px]">
        <span className="mb-[20px] rounded-full border border-graphite/30 px-3 py-[3px] text-[12px] font-medium text-carbon">
          Unofficial Fan-Lore Field Guide
        </span>

        <h1 className="max-w-3xl text-[40px] font-light leading-[1.1] tracking-[-1.17px] text-carbon md:text-display-lg">
          THE RUIRU VAMPIRE
        </h1>

        <p className="mt-[20px] max-w-[560px] text-subheading text-carbon/70">
          A grainy CCTV clip. A chase into the dark. And an internet legend
          Gitothua never asked for. Satire and speculation ahead — read the
          disclaimer before you believe a word of it.
        </p>

        <div className="mt-[32px] flex flex-col gap-[12px] sm:flex-row">
          <a
            href="#survival-guide"
            className="rounded-[18px] bg-carbon px-3 py-[9px] text-[14px] font-medium text-paper-white"
          >
            Report a Sighting
          </a>
          <a
            href="#lore"
            className="rounded-[18px] px-3 py-[9px] text-[14px] font-medium text-carbon"
          >
            Read the Lore
          </a>
        </div>

        <p className="mt-[36px] text-caption text-carbon/50">
          Real injuries. Real fear. Everything after that: internet folklore.
        </p>
        <p className="mt-[8px] text-caption text-carbon/40">
          Scroll — follow the sighting through Gitothua.
        </p>
      </div>
    </section>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function GitothuaStreetscape({
  pathRef,
  ballRef,
}: {
  pathRef: React.RefObject<SVGPathElement | null>;
  ballRef: React.RefObject<SVGCircleElement | null>;
}) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] w-full md:h-[260px]">
      <svg
        viewBox="0 0 1200 260"
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fog" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0" />
            <stop offset="100%" stopColor="#c1c5c8" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="1040" cy="40" r="30" fill="#89898d" opacity="0.35" />

        <g fill="#232323" opacity="0.55">
          <rect x="40" y="120" width="120" height="140" />
          <rect x="170" y="90" width="90" height="170" />
          <rect x="270" y="140" width="140" height="120" />
          <rect x="860" y="110" width="110" height="150" />
          <rect x="980" y="80" width="95" height="180" />
          <rect x="1085" y="130" width="115" height="130" />
        </g>

        <g fill="#08090b">
          <rect x="380" y="60" width="150" height="200" />
          <rect x="540" y="40" width="130" height="220" />
          <rect x="680" y="70" width="160" height="190" />
        </g>

        <g fill="#c1c5c8" opacity="0.5">
          <rect x="400" y="90" width="14" height="18" />
          <rect x="430" y="90" width="14" height="18" />
          <rect x="400" y="130" width="14" height="18" />
          <rect x="560" y="70" width="14" height="18" />
          <rect x="590" y="70" width="14" height="18" />
          <rect x="560" y="110" width="14" height="18" />
          <rect x="590" y="150" width="14" height="18" />
          <rect x="700" y="100" width="14" height="18" />
          <rect x="730" y="100" width="14" height="18" />
        </g>

        {/* The vampire's path through Gitothua — the single moving accent */}
        <path
          ref={pathRef}
          d="M 20,232 C 140,200 230,250 360,224 S 560,190 660,230 S 900,252 1000,214 S 1140,190 1180,220"
          fill="none"
          stroke="#89898d"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />

        <circle ref={ballRef} r="9" fill="#22c550" filter="url(#glow)" />

        <rect x="0" y="190" width="1200" height="70" fill="url(#fog)" />
      </svg>
    </div>
  );
}
