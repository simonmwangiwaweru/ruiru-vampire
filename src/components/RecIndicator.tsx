"use client";

import { useEffect, useState } from "react";

export function RecIndicator() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour12: false,
        })
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none absolute left-4 top-[70px] z-20 flex items-center gap-[6px] font-cctv text-[11px] text-bone/80 md:left-8">
      <span className="h-2 w-2 rounded-full bg-[#e5484d] rec-dot" />
      REC {time || "--:--:--"}
    </div>
  );
}
