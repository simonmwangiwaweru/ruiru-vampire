import { DoodleField } from "@/components/doodles/DoodleField";
import { BatIcon } from "@/components/doodles/icons";

export function Footer() {
  return (
    <footer className="relative w-full px-6 md:px-10 py-[48px] border-t border-graphite">
      <DoodleField
        items={[
          { Icon: BatIcon, top: "10%", left: "6%", size: 26, rotate: -6 },
          { Icon: BatIcon, top: "20%", right: "6%", size: 22, rotate: 10, flip: true },
        ]}
      />
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-[12px] text-center">
        <p className="text-[12px] font-medium text-ash">
          This is satire / parody, not news.
        </p>
        <p className="text-[12px] text-slate-mist">
          Fan-lore built around a real viral local news story from Ruiru, Kenya.
          Nothing on this page beyond the confirmed basics — the nickname, the
          CCTV clip, the panic — is verified fact. No real name, photo, or
          identifying detail is implied. &copy; {new Date().getFullYear()} The
          Ruiru Vampire Field Guide (unofficial).
        </p>
      </div>
    </footer>
  );
}
