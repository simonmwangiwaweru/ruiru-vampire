"use client";

import { useEffect, useRef } from "react";

const THREAD_D =
  "M50,0 C20,70 80,140 50,210 S20,350 50,420 S80,560 50,630 S20,770 50,840 S80,930 50,1000";

export function ScrollSpider() {
  const pathRef = useRef<SVGPathElement>(null);
  const spiderRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const spider = spiderRef.current;
    if (!path || !spider) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const pathLength = path.getTotalLength();

    const place = (progress: number) => {
      const p = clamp(progress, 0, 1);
      const point = path.getPointAtLength(pathLength * p);
      const ahead = path.getPointAtLength(
        Math.min(pathLength, pathLength * p + 1)
      );
      const angle =
        (Math.atan2(ahead.y - point.y, ahead.x - point.x) * 180) / Math.PI;
      spider.setAttribute(
        "transform",
        `translate(${point.x} ${point.y}) rotate(${angle + 90})`
      );
    };

    if (reduceMotion) {
      place(0.15);
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
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
    <div className="pointer-events-none fixed top-14 bottom-0 right-1 z-20 w-[60px] md:right-4 md:w-[80px]">
      <svg
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="spider-glow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          ref={pathRef}
          d={THREAD_D}
          fill="none"
          stroke="#89898d"
          strokeWidth="1"
          strokeDasharray="1 5"
          opacity="0.45"
          vectorEffect="non-scaling-stroke"
        />

        <g ref={spiderRef} filter="url(#spider-glow)">
          <Spider />
        </g>
      </svg>
    </div>
  );
}

function Spider() {
  const legs = [
    "M0,-2 L-9,-9 L-15,-8",
    "M0,-1 L-11,-3 L-18,-1",
    "M0,1 L-11,3 L-18,1",
    "M0,2 L-9,9 L-15,8",
    "M0,-2 L9,-9 L15,-8",
    "M0,-1 L11,-3 L18,-1",
    "M0,1 L11,3 L18,1",
    "M0,2 L9,9 L15,8",
  ];

  return (
    <g>
      {legs.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="#22c550"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="spider-leg"
          style={{ animationDelay: `${(i % 4) * 0.12}s` }}
        />
      ))}
      <ellipse cx="0" cy="4" rx="4.5" ry="5.5" fill="#22c550" />
      <circle cx="0" cy="-4" r="3" fill="#22c550" />
    </g>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
