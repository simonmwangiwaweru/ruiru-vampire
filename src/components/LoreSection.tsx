import { DoodleField } from "@/components/doodles/DoodleField";
import { BatIcon, SnakeIcon, CobwebIcon } from "@/components/doodles/icons";

const stats: { label: string; detail: string }[] = [
  {
    label: "Species",
    detail: "Homo ruiruensis nocturnus (made up, obviously)",
  },
  {
    label: "Habitat",
    detail: "Gitothua, Ruiru — allegedly prefers areas with poor streetlighting",
  },
  { label: "Active hours", detail: "~9:30 PM till the last matatu leaves" },
  { label: "Diet", detail: "Unconfirmed. Residents. Rumors. Attention." },
  {
    label: "Weaknesses",
    detail:
      "Boda boda headlights, nosy neighbors with flashlights, group WhatsApp voice notes",
  },
  {
    label: "Special ability",
    detail: "Disappearing from CCTV frame like Wi-Fi during load shedding",
  },
  {
    label: "Known catchphrase",
    detail: "“Niko na form.” (unofficial, invented)",
  },
];

const timeline: { title: string; detail: string }[] = [
  {
    title: "The Sighting",
    detail:
      "CCTV footage captures the attack; a chase ensues; the figure escapes frame.",
  },
  {
    title: "The Virality",
    detail:
      "Clip spreads across TikTok, IG Reels, X, and YouTube within 24–48 hours.",
  },
  {
    title: "The Panic",
    detail:
      "Gitothua residents report being scared to walk home at night; community calls for police action.",
  },
  {
    title: "The Nickname Sticks",
    detail:
      "“Ruiru Vampire” becomes the unofficial internet title, complete with memes and dark humor.",
  },
  {
    title: "The (Reported) Capture",
    detail:
      "Social media posts claim a man matching the description was arrested in Murang’a County after a mob confrontation. Unverified by official sources.",
  },
  {
    title: "The Legend",
    detail: "Whatever happens next, the internet has already decided he’s folklore now.",
  },
];

export function LoreSection() {
  return (
    <section id="lore" className="relative w-full px-6 py-[80px] md:px-10">
      <DoodleField
        items={[
          { Icon: CobwebIcon, top: "-1%", right: "-1%", size: 90, opacity: 0.4 },
          { Icon: BatIcon, top: "6%", left: "3%", size: 40, rotate: -12 },
          { Icon: SnakeIcon, top: "88%", left: "4%", size: 60, rotate: -15 },
          { Icon: BatIcon, top: "55%", right: "5%", size: 30, rotate: 18, flip: true },
        ]}
      />
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-[60px]">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-heading-sm font-light text-paper-white md:text-heading">
            Origin Story
          </h2>
          <p className="mt-[20px] text-body text-fog">
            It started the way all good Kenyan urban legends start: a grainy
            CCTV clip and Twitter (X) doing the rest. Somewhere around 9:30 PM
            in Gitothua, Ruiru, a figure in dark clothing was filmed rushing at
            a group of residents walking home. One brave soul gave chase. The
            figure vanished into the night like a matatu conductor who just
            heard &ldquo;traffic ahead.&rdquo; Nobody confirmed who he was, or
            why. All anyone had was a nickname that stuck immediately: the
            Ruiru Vampire.
          </p>
        </div>

        <div className="grid gap-[60px] md:grid-cols-2">
          <div className="rounded-[24px] border border-chalk p-[24px]">
            <h3 className="text-heading-sm font-light text-paper-white">
              Creature Profile
            </h3>
            <p className="mt-[8px] text-caption text-slate-mist">
              Fan-lore stat block. Entirely invented for flavor.
            </p>
            <dl className="mt-[24px] flex flex-col">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-[4px] py-[12px] sm:flex-row sm:items-baseline sm:gap-[24px] ${
                    i !== 0 ? "border-t border-graphite" : ""
                  }`}
                >
                  <dt className="w-[140px] shrink-0 text-[13px] font-medium text-bone">
                    {stat.label}
                  </dt>
                  <dd className="text-body text-fog">{stat.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-heading-sm font-light text-paper-white">
              Timeline of Events
            </h3>
            <ol className="mt-[24px] flex flex-col gap-[24px]">
              {timeline.map((step, i) => (
                <li key={step.title} className="flex gap-[12px]">
                  <span className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full border border-graphite text-[11px] font-medium text-ash">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[15px] font-medium text-paper-white">
                      {step.title}
                    </p>
                    <p className="mt-[4px] text-body text-fog">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
