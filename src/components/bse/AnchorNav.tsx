export type AnchorItem = {
  href: string;
  label: string;
};

export function AnchorNav({ items }: { items: AnchorItem[] }) {
  return (
    <nav aria-label="روابط الصفحة" className="sticky top-[76px] z-40 border-b border-bse-hairline bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-bse-content items-center gap-1 overflow-x-auto px-6" dir="rtl">
        {items.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className={`whitespace-nowrap border-b-2 px-4 py-4 text-sm font-semibold transition-colors hover:text-bse-indigo ${
              index === 0 ? "border-bse-gold text-bse-indigo" : "border-transparent text-bse-ink-muted"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
