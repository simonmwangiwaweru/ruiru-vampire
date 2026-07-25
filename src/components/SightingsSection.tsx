import { DoodleField } from "@/components/doodles/DoodleField";
import { BatIcon, SnakeIcon } from "@/components/doodles/icons";

const pins = [
  { x: "28%", y: "40%" },
  { x: "52%", y: "62%" },
  { x: "68%", y: "30%" },
  { x: "41%", y: "78%" },
];

export function SightingsSection() {
  return (
    <section id="sightings" className="relative w-full px-6 py-[80px] md:px-10">
      <DoodleField
        items={[
          { Icon: BatIcon, top: "3%", right: "4%", size: 34, rotate: -6 },
          { Icon: SnakeIcon, top: "35%", left: "1%", size: 55, rotate: -25 },
          { Icon: BatIcon, top: "90%", right: "10%", size: 26, rotate: 20, flip: true },
        ]}
      />
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <h2 className="text-center text-heading-sm font-light text-paper-white md:text-heading">
          Where He&rsquo;s Been Seen
        </h2>
        <p className="mt-[12px] max-w-[560px] text-center text-body text-fog">
          An entirely fictional &ldquo;sightings map&rdquo; of Gitothua, for
          the bit. No real coordinates, no real reports — just a widget for
          the widget&rsquo;s sake.
        </p>

        <div className="mt-[48px] w-full rounded-[24px] border border-chalk bg-carbon p-[24px]">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-medium text-bone">
              Gitothua / Ruiru — Sighting Density
            </span>
            <span className="flex items-center gap-[8px] rounded-full border border-graphite px-3 py-[3px] text-[12px] font-medium text-paper-white">
              <span
                className="h-[8px] w-[8px] rounded-full bg-signal-green"
                style={{ boxShadow: "0 0 8px 2px rgba(34,197,80,0.6)" }}
              />
              Still At Large
            </span>
          </div>

          <div className="relative mt-[20px] aspect-video w-full overflow-hidden rounded-[12px] border border-graphite">
            <svg
              viewBox="0 0 800 450"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <rect width="800" height="450" fill="#08090b" />
              <g stroke="#232323" strokeWidth="1">
                {Array.from({ length: 15 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 57} y1={0} x2={i * 57} y2={450} />
                ))}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`h${i}`} x1={0} y1={i * 57} x2={800} y2={i * 57} />
                ))}
              </g>
              <g stroke="#89898d" strokeWidth="2" fill="none" opacity="0.6">
                <path d="M40 320 Q 260 260 420 300 T 760 220" />
                <path d="M100 60 Q 220 180 380 200 T 700 340" />
              </g>
            </svg>

            {pins.map((pin, i) => (
              <span
                key={i}
                className="absolute h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-graphite bg-fog"
                style={{ left: pin.x, top: pin.y }}
              />
            ))}
          </div>

          <div className="mt-[20px] flex flex-wrap gap-[8px]">
            <Pill>Unverified</Pill>
            <Pill>Meme</Pill>
            <Pill>Reported</Pill>
            <Pill>Satire</Pill>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-chalk px-3 py-[3px] text-[12px] font-medium text-paper-white">
      {children}
    </span>
  );
}
