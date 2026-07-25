"use client";

import { useEffect, useState } from "react";

const cameras = [
  {
    id: 1,
    label: "Gitothua Rd Junction",
    log: "21:32 — Figure in dark hoodie sprints past frame. Lost within 4 seconds.",
  },
  {
    id: 2,
    label: "Mama Njeri's Kiosk",
    log: "21:34 — Customer drops chapati mid-purchase. Does not look back.",
  },
  {
    id: 3,
    label: "Estate Gate B",
    log: "21:29 — Guard's flashlight flickers twice. Guard denies noticing.",
  },
  {
    id: 4,
    label: "Water Tank Corner",
    log: "21:41 — Dog barks at nothing for 90 seconds straight.",
  },
  {
    id: 5,
    label: "Boda Stage",
    log: "21:37 — Three riders leave without waiting for fares.",
  },
  {
    id: 6,
    label: "Behind St. John's",
    log: "21:45 — Feed cuts to static for 6 seconds. Resumes normally.",
  },
];

export function CameraBank() {
  const [time, setTime] = useState("");
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [burstId, setBurstId] = useState<number | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const activate = (id: number) => {
    if (revealed.has(id)) return;
    setRevealed((prev) => new Set(prev).add(id));
    setBurstId(id);
    window.setTimeout(() => setBurstId((cur) => (cur === id ? null : cur)), 350);
  };

  return (
    <div className="grid w-full grid-cols-2 gap-[12px] md:grid-cols-3">
      {cameras.map((cam) => {
        const isRevealed = revealed.has(cam.id);
        return (
          <button
            key={cam.id}
            type="button"
            onClick={() => activate(cam.id)}
            className="group relative aspect-[4/3] overflow-hidden rounded-[12px] border border-graphite bg-obsidian text-left"
          >
            <div className="noise-overlay" />
            <div className="scanlines" />

            <div className="absolute left-2 top-2 flex items-center gap-[6px] font-cctv text-[10px] text-bone">
              <span className="h-[6px] w-[6px] rounded-full bg-[#e5484d] rec-dot" />
              CAM 0{cam.id}
            </div>
            <div className="absolute right-2 top-2 font-cctv text-[10px] text-ash">
              {time || "--:--:--"}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-2">
              <p className="font-cctv text-[10px] text-ash">{cam.label}</p>
              {isRevealed ? (
                <p className="mt-[4px] text-[11px] leading-snug text-paper-white">
                  {cam.log}
                </p>
              ) : (
                <p className="mt-[4px] text-[10px] uppercase tracking-wide text-slate-mist">
                  Tap to view log
                </p>
              )}
            </div>

            {burstId === cam.id && (
              <div className="noise-overlay static-burst" style={{ opacity: 0.9 }} />
            )}
          </button>
        );
      })}
    </div>
  );
}
