import { Link } from "@tanstack/react-router";
import { Menu, X, Globe, Home } from "lucide-react";
import { useState } from "react";

import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

/* 
 * Developed by Ultra Cube Team
 * www.ucubetech.com
 * https://github.com/ultra-cube
 */

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
    { to: "/venue-rental", label: t("navVenueRental") },
    { to: "/sponsors", label: t("navSponsors") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
        <a
          href="https://www.bse.bh"
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center justify-center rounded-lg p-2 text-foreground/70 transition-colors hover:bg-secondary hover:text-primary"
          aria-label="Visit BSE main website"
        >
          <Home className="size-5" />
        </a>
        
        <div className="h-6 w-px bg-border/50" />
        
        <Link to="/" className="flex shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src="/favicon.png"
            alt={t("society")}
            width={40}
            height={40}
            className="size-10 rounded-full ring-2 ring-accent/40"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-extrabold tracking-tight text-primary">
              {t("brand")}
            </span>
            <span className="text-[12px] font-semibold text-foreground/70">{t("brandSub")}</span>
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="font-display rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-all hover:bg-secondary hover:text-primary data-[status=active]:bg-secondary data-[status=active]:text-primary data-[status=active]:font-semibold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2 lg:ms-0">
          <Button variant="ghost" size="sm" onClick={toggle} className="gap-1.5 font-medium text-foreground/80 hover:text-primary">
            <Globe className="size-4" />
            <span className="hidden sm:inline">{t("langSwitch")}</span>
          </Button>
          <Button asChild size="sm" className="hidden font-semibold sm:inline-flex rounded-lg">
            <a href="#contact">{t("becomeSponsor")}</a>
          </Button>
          <button
            type="button"
            aria-label="menu"
            className="rounded-lg p-2 text-foreground/70 hover:bg-secondary hover:text-primary lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/50 bg-background/95 backdrop-blur-lg px-4 pb-4 lg:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
