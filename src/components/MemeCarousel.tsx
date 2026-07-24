"use client";

import { useRef } from "react";

const memes: { quote: string; handle: string; context: string }[] = [
  {
    quote:
      "Ruiru at 9:29pm: normal estate. Ruiru at 9:31pm: everyone remembers they have legs.",
    handle: "@fictional_user_1",
    context: "reply, 2.1k likes (invented)",
  },
  {
    quote:
      "Not me setting my WhatsApp status to a boda boda headlight for protection.",
    handle: "@fictional_user_2",
    context: "quote tweet (invented)",
  },
  {
    quote:
      "The vampire really said 'Niko na form' and disappeared like load shedding.",
    handle: "@fictional_user_3",
    context: "meme caption (invented)",
  },
  {
    quote:
      "Kenyans on Twitter turned a scary CCTV clip into a full stat block within the hour. Iconic behavior.",
    handle: "@fictional_user_4",
    context: "thread starter (invented)",
  },
];

export function MemeCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({
      left: direction * 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full px-6 py-[80px] md:px-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center">
        <h2 className="text-center text-heading-sm font-light text-paper-white md:text-heading">
          Best Reactions From Kenyans on Twitter
        </h2>
        <p className="mt-[12px] max-w-[560px] text-center text-body text-fog">
          Fictional, generic joke posts written for this project — not real
          quotes from real people.
        </p>

        <div
          ref={trackRef}
          className="mt-[48px] flex w-full gap-[24px] overflow-x-auto scroll-smooth pb-[8px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {memes.map((meme) => (
            <div
              key={meme.handle + meme.quote.slice(0, 8)}
              className="w-[280px] shrink-0 rounded-[24px] border border-chalk p-[24px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <p className="text-[15px] text-paper-white">
                &ldquo;{meme.quote}&rdquo;
              </p>
              <p className="mt-[16px] text-[13px] font-medium text-paper-white">
                {meme.handle}
              </p>
              <p className="text-[12px] text-fog">{meme.context}</p>
            </div>
          ))}
        </div>

        <div className="mt-[24px] flex gap-[12px]">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-chalk text-paper-white"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-chalk text-paper-white"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
