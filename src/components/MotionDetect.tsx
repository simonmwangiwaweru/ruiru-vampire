"use client";

import { useEffect, useRef, useState } from "react";

export function MotionDetect({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      {triggered && (
        <span className="motion-badge pointer-events-none absolute -top-2 left-6 z-10 flex items-center gap-[6px] rounded-full border border-[#e5484d]/40 bg-carbon px-2 py-[3px] font-cctv text-[10px] text-[#e5484d] md:left-10">
          <span className="h-[6px] w-[6px] rounded-full bg-[#e5484d]" />
          MOTION DETECTED
        </span>
      )}
      <div className={triggered ? "motion-in" : "motion-pre"}>{children}</div>
    </div>
  );
}
