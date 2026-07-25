"use client";

import { useState } from "react";

export function Redacted({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={() => setRevealed(true)}
      onMouseEnter={() => setRevealed(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setRevealed(true);
        }
      }}
      className="relative block w-full cursor-pointer"
      aria-label={revealed ? undefined : "Redacted — click to declassify"}
    >
      {children}
      <span className="redacted-bar" data-revealed={revealed} aria-hidden />
      {!revealed && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-cctv text-[10px] tracking-widest text-fog">
          CLASSIFIED — CLICK TO DECLASSIFY
        </span>
      )}
    </span>
  );
}
