import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, MapPin, Users } from "lucide-react";

import heroEvents from "@/assets/hero-events.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/events/annual-general-assembly")({
  head: () => ({
    meta: [
      { title: "الجمعية العمومية السنوية | BSE Event" },
      {
        name: "description",
        content: "اجتماع أعضاء الجمعية في المقر بالجفير لمناقشة التقارير السنوية وانتخاب مجلس الإدارة، وينظمه القسم لوجستياً بالكامل.",
      },
      { property: "og:title", content: "الجمعية العمومية السنوية | BSE Event" },
      {
        property: "og:description",
        content: "اجتماع أعضاء الجمعية في المقر بالجفير لمناقشة التقارير السنوية وانتخاب مجلس الإدارة.",
      },
    ],
  }),
  component: AnnualGeneralAssembly,
});

function AnnualGeneralAssembly() {
  const { p, t } = useI18n();

  const highlights = [
    { ar: "مناقشة التقرير الإداري والحسابات الختامية", en: "Review of the administrative report and final accounts" },
    { ar: "أنظمة تسجيل والتحقق من العضوية", en: "Registration and membership verification systems" },
    { ar: "إدارة عملية التصويت والانتخابات", en: "Management of voting and elections" },
  ];

  const stats = [
    { value: "500+", label: { ar: "عضو مشارك", en: "Participating members" } },
    { value: "1", label: { ar: "اجتماع سنوي", en: "Annual meeting" } },
    { value: "100%", label: { ar: "تنظيم داخلي", en: "In-house organisation" } },
  ];

  const program = [
    { time: "17:00", title: { ar: "تسجيل الحضور والتحقق من العضوية", en: "Attendance registration & membership verification" } },
    { time: "18:00", title: { ar: "افتتاح الاجتماع وعرض التقارير", en: "Opening & presentation of reports" } },
    { time: "19:30", title: { ar: "المناقشة والتصويت", en: "Discussion & voting" } },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("navEvents")}
        title={p({ ar: "الجمعية العمومية السنوية", en: "Annual General Assembly" })}
        description={p({
          ar: "اجتماع أعضاء الجمعية في المقر بالجفير لمناقشة التقارير السنوية وانتخاب مجلس الإدارة، وينظمه القسم لوجستياً بالكامل.",
          en: "Members convene at the Juffair headquarters to review annual reports and elect the board — organised end-to-end by the department.",
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
              <Badge variant="outline">{p({ ar: "اجتماع مؤسسي", en: "Corporate meeting" })}</Badge>
            </div>
            
            <h2 className="mt-6 text-2xl font-bold text-primary">
              {p({ ar: "عن الفعالية", en: "About the event" })}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {p({
                ar: "الجمعية العمومية السنوية هي أعلى سلطة في جمعية المهندسين البحرينية، ويجتمع فيها الأعضاء لمناقشة التقرير الإداري والحسابات الختامية واعتماد الخطة السنوية وانتخاب مجلس الإدارة عند استحقاق الدورة. يتولى القسم تنظيم الاجتماع لوجستياً: الدعوات، وتسجيل الحضور والتحقق من العضوية، وقاعة الاجتماع، وأنظمة التصويت، وتوثيق المحاضر.",
                en: "The Annual General Assembly is BSE's highest authority, where members review the administrative report and final accounts, approve the annual plan and elect the board when the term falls due. The department handles the logistics: invitations, attendance registration and membership verification, the assembly hall, voting systems and minute-taking.",
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
                ar: "أعضاء الجمعية العاملون، مجلس الإدارة، مراقب الحسابات.",
                en: "Full BSE members, the board and the auditor.",
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
                    <dd className="mt-1 font-semibold text-foreground">{p({ ar: "أبريل — سنوياً", en: "April — annually" })}</dd>
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
