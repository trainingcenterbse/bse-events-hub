import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin, Users } from "lucide-react";

import heroEvents from "@/assets/hero-events.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/events/annual-ramadan-ghabga")({
  head: () => ({
    meta: [
      { title: "الغبقة الرمضانية السنوية | BSE Event" },
      {
        name: "description",
        content: "لقاء اجتماعي سنوي يجمع أعضاء الجمعية وشركاءها من القطاعين العام والخاص في أجواء رمضانية.",
      },
      { property: "og:title", content: "الغبقة الرمضانية السنوية | BSE Event" },
      {
        property: "og:description",
        content: "لقاء اجتماعي سنوي يجمع أعضاء الجمعية وشركاءها من القطاعين العام والخاص في أجواء رمضانية.",
      },
    ],
  }),
  component: AnnualRamadanGhabga,
});

function AnnualRamadanGhabga() {
  const { p, t } = useI18n();

  const highlights = [
    { ar: "لقاء غير رسمي بين الأعضاء وقيادات القطاع", en: "Informal networking between members and sector leaders" },
    { ar: "برنامج مصاحب وفعاليات للعائلات", en: "Side programme and family activities" },
    { ar: "ظهور الرعاة في الديكور والمطبوعات والدعوات", en: "Sponsor visibility across décor, print and invitations" },
  ];

  const stats = [
    { value: "400+", label: { ar: "حاضر", en: "Attendees" } },
    { value: "15+", label: { ar: "جهة مشاركة", en: "Participating entities" } },
    { value: "1", label: { ar: "ليلة سنوياً", en: "Night per year" } },
  ];

  const program = [
    { time: "21:00", title: { ar: "استقبال الحضور", en: "Guest reception" } },
    { time: "21:30", title: { ar: "كلمة ترحيبية من مجلس الإدارة", en: "Welcome remarks from the board" } },
    { time: "22:00", title: { ar: "الغبقة والبرنامج المصاحب", en: "Ghabga & side programme" } },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("navEvents")}
        title={p({ ar: "الغبقة الرمضانية السنوية", en: "Annual Ramadan Ghabga" })}
        description={p({
          ar: "لقاء اجتماعي سنوي يجمع أعضاء الجمعية وشركاءها من القطاعين العام والخاص في أجواء رمضانية.",
          en: "An annual social gathering bringing together BSE members and partners from the public and private sectors.",
        })}
        image={heroEvents}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Link
          to="/events"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent-foreground"
        >
          ← {t("backToEvents")}
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{t("past")}</Badge>
              <Badge variant="outline">{p({ ar: "لقاء اجتماعي", en: "Networking gathering" })}</Badge>
            </div>
            
            <h2 className="mt-6 text-2xl font-bold text-primary">
              {p({ ar: "عن الفعالية", en: "About the event" })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {p({
                ar: "الغبقة الرمضانية السنوية من أقدم تقاليد الجمعية الاجتماعية، وتُقام في ليالي رمضان لتجمع الأعضاء وعائلاتهم مع ممثلي الجهات الحكومية والشركات الشريكة في جو غير رسمي يعزز العلاقات المهنية. ينظم القسم الفعالية بالكامل من الدعوات والتسجيل إلى الضيافة والبرنامج المصاحب والتغطية الإعلامية.",
                en: "The annual Ramadan Ghabga is among BSE's longest-standing social traditions, held during Ramadan nights to bring members and their families together with government representatives and partner companies in an informal setting that strengthens professional relationships. The department delivers the event end to end — invitations, registration, hospitality, side programme and media coverage.",
              })}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              {stats.map((s) => (
                <div key={s.value}>
                  <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p(s.label)}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-bold text-primary">
              {p({ ar: "أبرز ما يميز الفعالية", en: "Event highlights" })}
            </h3>
            <div className="mt-4 space-y-3">
              {highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                  <p className="text-sm text-muted-foreground">{p(highlight)}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 text-xl font-bold text-primary">
              {p({ ar: "الجمهور المستهدف", en: "Target audience" })}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {p({
                ar: "أعضاء الجمعية وعائلاتهم، الشركات الشريكة، ممثلو الجهات الحكومية.",
                en: "BSE members and their families, partner companies and government representatives.",
              })}
            </p>
          </div>

          <aside className="space-y-6">
            <div className="surface-card p-6">
              <h3 className="text-lg font-bold text-primary">{p({ ar: "تفاصيل الفعالية", en: "Event details" })}</h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-muted-foreground">{p({ ar: "التاريخ", en: "Date" })}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{p({ ar: "رمضان — سنوياً", en: "Ramadan — annually" })}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <dt className="text-muted-foreground">{p({ ar: "المكان", en: "Venue" })}</dt>
                    <dd className="mt-1 font-semibold text-foreground">{p({ ar: "مقر الجمعية، الجفير", en: "BSE Headquarters, Juffair" })}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="surface-card p-6">
              <h3 className="text-lg font-bold text-primary">{t("becomeSponsor")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {p({ ar: "تواصل معنا للاستفسار عن فرص الرعاية", en: "Contact us for sponsorship opportunities" })}
              </p>
              <Button asChild className="mt-4 w-full">
                <a href="#contact">{t("contactUs")}</a>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Program */}
      <section className="band-blue relative overflow-hidden py-24">
        <div className="dot-grid-light absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={p({ ar: "البرنامج", en: "Programme" })}
            title={p({ ar: "جدول الفعالية", en: "Event schedule" })}
            description={p({
              ar: "الجدول الزمني للفعالية مع الجلسات والأنشطة",
              en: "Event timeline with sessions and activities",
            })}
          />

          <div className="mt-12 space-y-4">
            {program.map((item, i) => (
              <div key={i} className="glass-panel flex gap-4 p-6">
                <span className="shrink-0 font-mono text-lg font-bold text-accent" dir="ltr">
                  {item.time}
                </span>
                <p className="text-base text-primary-foreground">{p(item.title)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
