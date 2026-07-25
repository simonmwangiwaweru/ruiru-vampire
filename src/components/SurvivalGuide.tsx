import { DoodleField } from "@/components/doodles/DoodleField";
import { BatIcon, SnakeIcon, CobwebIcon, TombstoneIcon } from "@/components/doodles/icons";

const tips: { title: string; detail: string }[] = [
  {
    title: "Travel in groups.",
    detail:
      "Not because of vampires — because Nairobi-area roads at night are genuinely safer in numbers.",
  },
  {
    title: "Keep your phone charged.",
    detail:
      "For flashlight duty, not for filming content (though, let’s be honest, you’re filming content).",
  },
  {
    title: "Avoid dark alleys in Gitothua after 9:30 PM.",
    detail: "General safety advice that predates and outlives any vampire meme.",
  },
  {
    title: "If bitten: see a real doctor immediately.",
    detail: "This is the one non-joke line in this whole page.",
  },
  {
    title: "Do not form a vigilante mob.",
    detail:
      "The “legend” is funny. Mob violence against real people is not — and it’s actually part of why this story escalated in the first place.",
  },
];

export function SurvivalGuide() {
  return (
    <section
      id="survival-guide"
      className="relative w-full px-6 py-[80px] md:px-10"
    >
      <DoodleField
        items={[
          { Icon: CobwebIcon, top: "0%", left: "-1%", size: 80, opacity: 0.4, rotate: 90 },
          { Icon: SnakeIcon, top: "40%", right: "2%", size: 50, rotate: 200, flip: true },
          { Icon: BatIcon, top: "80%", left: "6%", size: 28, rotate: -8 },
          { Icon: TombstoneIcon, top: "92%", right: "8%", size: 26 },
        ]}
      />
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <span className="rounded-full border border-graphite px-3 py-[3px] text-[12px] font-medium text-fog">
          100% Satire
        </span>
        <h2 className="mt-[20px] text-center text-heading-sm font-light text-paper-white md:text-heading">
          Community Survival Guide
        </h2>

        <div className="mt-[48px] grid w-full gap-[24px] md:grid-cols-2">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-[24px] border border-chalk p-[24px]"
            >
              <p className="text-[15px] font-medium text-paper-white">
                {tip.title}
              </p>
              <p className="mt-[8px] text-body text-fog">{tip.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
