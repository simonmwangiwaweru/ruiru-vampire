import { ThreeSkullHero } from "@/components/ThreeSkullHero";
import { RecIndicator } from "@/components/RecIndicator";

export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-obsidian">
      <link
        rel="preload"
        as="fetch"
        href="/models/man_comp-transformed.glb"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="fetch"
        href="/models/skeleton_comp-transformed.glb"
        crossOrigin="anonymous"
      />

      <div className="absolute inset-0">
        <ThreeSkullHero />
      </div>

      <RecIndicator />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1200px] flex-col items-center justify-center px-6 pb-[40px] text-center md:px-10">
        <span className="mb-[20px] rounded-full border border-chalk/30 px-3 py-[3px] text-[12px] font-medium text-bone">
          Unofficial Fan-Lore Field Guide
        </span>

        <h1 className="max-w-3xl text-[40px] font-light leading-[1.1] tracking-[-1.17px] text-paper-white md:text-display-lg">
          THE RUIRU VAMPIRE
        </h1>

        <p className="mt-[20px] max-w-[560px] text-subheading text-fog">
          A grainy CCTV clip. A chase into the dark. And an internet legend
          Gitothua never asked for. Satire and speculation ahead — read the
          disclaimer before you believe a word of it.
        </p>

        <div className="mt-[32px] flex flex-col gap-[12px] sm:flex-row">
          <a
            href="#survival-guide"
            className="rounded-[18px] bg-paper-white px-3 py-[9px] text-[14px] font-medium text-carbon"
          >
            Report a Sighting
          </a>
          <a
            href="#lore"
            className="rounded-[18px] border border-chalk/30 px-3 py-[9px] text-[14px] font-medium text-paper-white"
          >
            Read the Lore
          </a>
        </div>

        <p className="mt-[36px] text-caption text-slate-mist">
          Real injuries. Real fear. Everything after that: internet folklore.
        </p>
        <p className="mt-[8px] text-caption text-slate-mist/70">
          Move your cursor over the frame. Watch what&rsquo;s underneath.
        </p>
      </div>
    </section>
  );
}
