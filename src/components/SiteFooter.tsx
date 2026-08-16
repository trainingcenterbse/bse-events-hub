import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { useI18n } from "@/lib/i18n";

/* 
 * Developed by Ultra Cube Team
 * www.ucubetech.com
 * https://github.com/ultra-cube
 */

export function SiteFooter() {
  const { t, lang } = useI18n();

  const links = [
    { to: "/about", label: t("navAbout") },
    { to: "/team", label: t("navTeam") },
    { to: "/conferences", label: t("navConferences") },
    { to: "/exhibitions", label: t("navExhibitions") },
    { to: "/events", label: t("navEvents") },
    { to: "/sponsors", label: t("navSponsors") },
  ] as const;

  return (
    <footer id="contact" className="brand-gradient mt-24 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid size-14 place-items-center rounded-full bg-primary-foreground/95 ring-1 ring-accent/40">
              <img
                src="/favicon.png"
                alt={t("society")}
                width={48}
                height={48}
                className="size-12 rounded-full"
              />
            </span>
            <div>
              <p className="font-display text-xl font-bold">{t("brand")}</p>
              <p className="text-sm text-primary-foreground/70">{t("society")}</p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            {lang === "ar"
              ? "قسم إدارة الفعاليات والمؤتمرات والمعارض في جمعية المهندسين البحرينية — ننظم منصات هندسية متخصصة تجمع الرعاة والعارضين والحضور في مكان واحد."
              : "The Events, Conferences & Exhibitions Department of the Bahrain Society of Engineers — building specialised engineering platforms that bring sponsors, exhibitors and attendees together."}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-accent">{t("quickLinks")}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/75 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-accent">{t("contactUs")}</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              {t("address")}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-accent" />
              <a href="tel:+97317727100" dir="ltr" className="hover:text-accent">
                +973 1772 7100
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-accent" />
              <a href="mailto:events@bse.bh" className="hover:text-accent">
                events@bse.bh
              </a>
            </li>
            <li>
              <a
                href="https://bse.bh/ar"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-accent/60 underline-offset-4 hover:text-accent"
              >
                bse.bh
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} BSE Event — {t("rights")}
      </div>
    </footer>
  );
}
