export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-chalk">
      <GitothuaStreetscape />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 pt-[60px] pb-[240px] text-center md:px-10 md:pb-[300px]">
        <span className="mb-[20px] rounded-full border border-graphite/30 px-3 py-[3px] text-[12px] font-medium text-carbon">
          Unofficial Fan-Lore Field Guide
        </span>

        <h1 className="max-w-3xl text-[40px] font-light leading-[1.1] tracking-[-1.17px] text-carbon md:text-display-lg">
          THE RUIRU VAMPIRE
        </h1>

        <p className="mt-[20px] max-w-[560px] text-subheading text-carbon/70">
          A grainy CCTV clip. A chase into the dark. And an internet legend
          Gitothua never asked for. Satire and speculation ahead — read the
          disclaimer before you believe a word of it.
        </p>

        <div className="mt-[32px] flex flex-col gap-[12px] sm:flex-row">
          <a
            href="#survival-guide"
            className="rounded-[18px] bg-carbon px-3 py-[9px] text-[14px] font-medium text-paper-white"
          >
            Report a Sighting
          </a>
          <a
            href="#lore"
            className="rounded-[18px] px-3 py-[9px] text-[14px] font-medium text-carbon"
          >
            Read the Lore
          </a>
        </div>

        <p className="mt-[36px] text-caption text-carbon/50">
          Real injuries. Real fear. Everything after that: internet folklore.
        </p>
        <p className="mt-[8px] text-caption text-carbon/40">
          Scroll — watch him crawl through the storm drains of Gitothua.
        </p>
      </div>
    </section>
  );
}

function GitothuaStreetscape() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] w-full md:h-[260px]">
      <svg
        viewBox="0 0 1200 260"
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full"
        aria-hidden="true"
      >
        {/* moon */}
        <circle
          cx="1080"
          cy="34"
          r="22"
          fill="none"
          stroke="#89898d"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* hand-drawn hill ridgelines */}
        <path
          d="M0,55 Q150,25 300,50 T600,38 T900,55 T1200,42"
          fill="none"
          stroke="#89898d"
          strokeWidth="1.5"
          opacity="0.45"
        />
        <path
          d="M0,95 Q200,62 400,90 T800,78 T1200,95"
          fill="none"
          stroke="#89898d"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <path
          d="M0,190 Q250,158 500,185 T1000,168 T1200,188"
          fill="none"
          stroke="#232323"
          strokeWidth="1.5"
          opacity="0.4"
        />

        {/* a lone bare, gnarled tree */}
        <g fill="none" stroke="#232323" strokeWidth="1.5" opacity="0.6">
          <path d="M300,220 L296,150" />
          <path d="M296,178 L276,158 M296,178 L280,190" />
          <path d="M296,158 L308,138 M296,158 L316,166" />
          <path d="M296,150 L286,128 M296,150 L302,124" />
        </g>

        {/* the haunted mansion on the hill — Hotel Transylvania silhouette */}
        <g>
          {/* main hall + crenellated wing */}
          <path
            d="M540,190 L540,110 L595,70 L650,110 L650,190 Z"
            fill="#08090b"
          />
          <path
            d="M650,190 L650,140 L662,140 L662,128 L674,128 L674,140 L686,140 L686,128 L698,128 L698,140 L710,140 L710,190 Z"
            fill="#08090b"
          />

          {/* turret with conical roof */}
          <rect x="500" y="86" width="28" height="104" fill="#08090b" />
          <path d="M496,86 L514,44 L532,86 Z" fill="#08090b" />
          <line
            x1="514"
            y1="44"
            x2="514"
            y2="32"
            stroke="#232323"
            strokeWidth="1.5"
          />
          <circle cx="514" cy="30" r="2" fill="#232323" />

          {/* arched windows */}
          <g fill="none" stroke="#89898d" strokeWidth="1.5" opacity="0.7">
            <path d="M563,140 a7,7 0 0 1 14,0 v20 h-14 Z" />
            <path d="M613,150 a6,6 0 0 1 12,0 v16 h-12 Z" />
            <path d="M509,120 a5,5 0 0 1 10,0 v14 h-10 Z" />
          </g>

          {/* crooked entrance door */}
          <path
            d="M582,190 L582,168 a8,8 0 0 1 16,0 L598,190 Z"
            fill="none"
            stroke="#89898d"
            strokeWidth="1.5"
            opacity="0.7"
          />
        </g>

        {/* bats circling the mansion */}
        <g fill="none" stroke="#c1c5c8" strokeWidth="1.6" opacity="0.7">
          <path d="M470,64 q6,-8 12,0 q6,-8 12,0" />
          <path d="M700,50 q5,-7 10,0 q5,-7 10,0" />
          <path d="M420,100 q4,-6 8,0 q4,-6 8,0" />
        </g>

        {/* tombstones scattered on the ground */}
        <g fill="#232323" opacity="0.55">
          <path d="M368,230 L368,210 a8,8 0 0 1 16,0 L384,230 Z" />
          <path d="M760,235 L760,218 a7,7 0 0 1 14,0 L774,235 Z" />
          <path d="M1080,225 L1080,206 a8,8 0 0 1 16,0 L1096,225 Z" />
        </g>
        <g stroke="#08090b" strokeWidth="1.5" opacity="0.7">
          <path d="M372,220 L380,220 M376,215 L376,225" />
          <path d="M764,225 L772,225" />
        </g>

        {/* the storm drain the vampire uses to vanish */}
        <path
          d="M20,150 C140,120 230,170 360,144 S560,110 660,150 S900,172 1000,134 S1140,110 1180,140"
          fill="none"
          stroke="#89898d"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <path
          d="M20,150 C140,120 230,170 360,144 S560,110 660,150 S900,172 1000,134 S1140,110 1180,140"
          fill="none"
          stroke="#dddddd"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="#c1c5c8" stroke="#89898d" strokeWidth="1.5">
          <circle cx="360" cy="144" r="13" />
          <circle cx="660" cy="150" r="13" />
          <circle cx="1000" cy="134" r="13" />
        </g>

        <linearGradient id="fog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0" />
          <stop offset="100%" stopColor="#c1c5c8" stopOpacity="0.9" />
        </linearGradient>
        <rect x="0" y="190" width="1200" height="70" fill="url(#fog)" />
      </svg>
    </div>
  );
}
