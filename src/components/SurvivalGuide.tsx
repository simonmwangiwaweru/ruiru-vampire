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
      className="w-full px-6 py-[80px] md:px-10"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
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
