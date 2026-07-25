import { DoodleField } from "@/components/doodles/DoodleField";
import { BatIcon, SnakeIcon } from "@/components/doodles/icons";

const faqs: { q: string; a: string }[] = [
  {
    q: "Is the Ruiru Vampire a real vampire?",
    a: "No. He’s a person. Almost certainly not immortal, sparkly, or afraid of garlic. Probably just someone having a very bad time who made other people have a very bad time too.",
  },
  {
    q: "Was he ever identified?",
    a: "Not officially confirmed in available reporting. The internet ran ahead of the facts, as it does.",
  },
  {
    q: "Why “vampire” and not something else?",
    a: "Because “the Ruiru Guy Who Bites People” doesn’t fit on a meme template.",
  },
  {
    q: "Is this website making fun of real victims?",
    a: "No — it’s making fun of the internet’s reaction to a scary, weird local news story, which is a very Kenyan tradition. The actual biting incidents were real and not funny for the people involved.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative w-full px-6 py-[80px] md:px-10">
      <DoodleField
        items={[
          { Icon: BatIcon, top: "2%", right: "8%", size: 30, rotate: 8 },
          { Icon: SnakeIcon, top: "88%", left: "3%", size: 55, rotate: -10 },
        ]}
      />
      <div className="relative mx-auto flex w-full max-w-[720px] flex-col items-center">
        <h2 className="text-center text-heading-sm font-light text-paper-white md:text-heading">
          FAQ
        </h2>

        <div className="mt-[48px] flex w-full flex-col">
          {faqs.map((item, i) => (
            <div
              key={item.q}
              className={`py-[24px] ${i !== 0 ? "border-t border-graphite" : ""}`}
            >
              <p className="text-[16px] font-medium text-paper-white">
                {item.q}
              </p>
              <p className="mt-[8px] text-body text-fog">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
