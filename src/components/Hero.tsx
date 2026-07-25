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
          Scroll — follow him through the storm drains of Gitothua.
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

        {/* moon */}
        <circle
          cx="1080"
          cy="34"
          r="22"
          fill="none"
          stroke="#89898d"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* hand-drawn hill ridgelines */}
        <path
          d="M0,55 Q150,25 300,50 T600,38 T900,55 T1200,42"
          fill="none"
          stroke="#89898d"
          strokeWidth="1.5"
          opacity="0.45"
        />
        <path
          d="M0,95 Q200,62 400,90 T800,78 T1200,95"
          fill="none"
          stroke="#89898d"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <path
          d="M0,190 Q250,158 500,185 T1000,168 T1200,188"
          fill="none"
          stroke="#232323"
          strokeWidth="1.5"
          opacity="0.4"
        />

        {/* simple line-art rooftops among the hills */}
        <g fill="none" stroke="#232323" strokeWidth="1.5" opacity="0.55">
          <path d="M150,178 L172,150 L194,178" />
          <path d="M172,150 L172,178" />
          <path d="M860,182 L886,152 L912,182" />
          <path d="M886,152 L886,182" />
        </g>

        {/* scattered rock/crystal accents */}
        <g fill="none" stroke="#89898d" strokeWidth="1.5" opacity="0.5">
          <path d="M60,208 L72,190 L86,208 Z" />
          <path d="M500,220 L512,204 L526,220 Z" />
          <path d="M1080,205 L1094,186 L1110,205 Z" />
          <path d="M310,230 L320,218 L332,230 Z" />
        </g>
        <g fill="none" stroke="#c1c5c8" strokeWidth="1.5" opacity="0.6">
          <circle cx="230" cy="215" r="4" />
          <circle cx="760" cy="225" r="3" />
          <circle cx="960" cy="235" r="4" />
        </g>

        {/* the storm drain the vampire uses to vanish — the single moving accent */}
        <path
          ref={pathRef}
          d="M20,150 C140,120 230,170 360,144 S560,110 660,150 S900,172 1000,134 S1140,110 1180,140"
          fill="none"
          stroke="none"
        />
        <path
          d="M20,150 C140,120 230,170 360,144 S560,110 660,150 S900,172 1000,134 S1140,110 1180,140"
          fill="none"
          stroke="#89898d"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <path
          d="M20,150 C140,120 230,170 360,144 S560,110 660,150 S900,172 1000,134 S1140,110 1180,140"
          fill="none"
          stroke="#dddddd"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="#c1c5c8" stroke="#89898d" strokeWidth="1.5">
          <circle cx="360" cy="144" r="13" />
          <circle cx="660" cy="150" r="13" />
          <circle cx="1000" cy="134" r="13" />
        </g>

        <circle
          ref={ballRef}
          r="10"
          fill="#22c550"
          filter="url(#glow)"
          data-ball
        />

        <rect x="0" y="190" width="1200" height="70" fill="url(#fog)" />
      </svg>
    </div>
  );
}
