"use client";

import { useEffect, useRef } from "react";

const PIPE_D =
  "M50,0 C15,110 85,170 50,280 S15,440 50,550 S85,700 50,810 S15,930 50,1000";

export function ScrollPipe() {
  const pathRef = useRef<SVGPathElement>(null);
  const ballRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const ball = ballRef.current;
    if (!path || !ball) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const pathLength = path.getTotalLength();

    const place = (progress: number) => {
      const p = clamp(progress, 0, 1);
      const point = path.getPointAtLength(pathLength * p);
      ball.setAttribute("cx", String(point.x));
      ball.setAttribute("cy", String(point.y));
    };

    if (reduceMotion) {
      place(0.15);
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      place(progress);
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
    <div className="pointer-events-none fixed top-14 bottom-0 right-1 z-20 w-[60px] md:right-6 md:w-[90px]">
      <svg
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="pipe-glow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* invisible geometry path used purely for measuring position */}
        <path ref={pathRef} d={PIPE_D} fill="none" stroke="none" />

        {/* the pipe body */}
        <path
          d={PIPE_D}
          fill="none"
          stroke="#89898d"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={PIPE_D}
          fill="none"
          stroke="#dddddd"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* elbow joints where the pipe bends */}
        <g fill="#c1c5c8" stroke="#89898d" strokeWidth="1.5">
          <circle cx="50" cy="280" r="9" />
          <circle cx="50" cy="550" r="9" />
          <circle cx="50" cy="810" r="9" />
        </g>

        <circle ref={ballRef} r="7" fill="#22c550" filter="url(#pipe-glow)" />
      </svg>
    </div>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
