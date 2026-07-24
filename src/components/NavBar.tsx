const links = [
  { label: "The Lore", href: "#lore" },
  { label: "Sightings", href: "#sightings" },
  { label: "Survival Guide", href: "#survival-guide" },
  { label: "FAQ", href: "#faq" },
];

export function NavBar() {
  return (
    <header className="w-full h-14 flex items-center px-6 md:px-10">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <a
          href="#"
          className="text-[14px] font-medium tracking-tight text-paper-white"
        >
          THE RUIRU VAMPIRE
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-fog hover:text-paper-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#faq"
            className="hidden sm:inline text-[14px] font-medium text-paper-white"
          >
            Read the Lore
          </a>
          <a
            href="#survival-guide"
            className="rounded-[18px] border border-graphite bg-carbon px-3 py-[9px] text-[14px] font-medium text-paper-white"
          >
            Report a Sighting
          </a>
        </div>
      </div>
    </header>
  );
}
