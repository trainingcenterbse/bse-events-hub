import { Link } from "@tanstack/react-router";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/bse-logo.png.asset.json";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const { t, toggle } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("navHome") },
    { to: "/about", label: t("navAbout") },
    { to: "/team", label: t("navTeam") },
    { to: "/conferences", label: t("navConferences") },
    { to: "/exhibitions", label: t("navExhibitions") },
    { to: "/events", label: t("navEvents") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt={t("society")} width={44} height={44} className="h-11 w-11" />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-primary">{t("brand")}</span>
            <span className="text-[11px] text-muted-foreground">{t("brandSub")}</span>
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary data-[status=active]:bg-secondary data-[status=active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2 lg:ms-0">
          <Button variant="ghost" size="sm" onClick={toggle} className="gap-1.5 text-primary">
            <Globe className="size-4" />
            {t("langSwitch")}
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#contact">{t("becomeSponsor")}</a>
          </Button>
          <button
            type="button"
            aria-label="menu"
            className="rounded-md p-2 text-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-0"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
