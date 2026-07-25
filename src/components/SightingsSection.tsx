import { CameraBank } from "@/components/CameraBank";

export function SightingsSection() {
  return (
    <section id="sightings" className="w-full px-6 py-[80px] md:px-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <h2 className="text-center text-heading-sm font-light text-paper-white md:text-heading">
          Where He&rsquo;s Been Seen
        </h2>
        <p className="mt-[12px] max-w-[560px] text-center text-body text-fog">
          Six fictional CCTV feeds around Gitothua, for the bit. No real
          footage, no real timestamps — click a feed to pull its (invented)
          log.
        </p>

        <div className="mt-[48px] w-full rounded-[24px] border border-chalk bg-carbon p-[24px]">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-medium text-bone">
              Gitothua / Ruiru — Camera Bank
            </span>
            <span className="flex items-center gap-[8px] rounded-full border border-graphite px-3 py-[3px] text-[12px] font-medium text-paper-white">
              <span
                className="h-[8px] w-[8px] rounded-full bg-signal-green"
                style={{ boxShadow: "0 0 8px 2px rgba(34,197,80,0.6)" }}
              />
              Still At Large
            </span>
          </div>

          <div className="mt-[20px]">
            <CameraBank />
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
