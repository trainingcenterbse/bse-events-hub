import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Store, Presentation, Users } from "lucide-react";

import teamWork from "@/assets/team-work.jpg";
import { HeroSlider } from "@/components/HeroSlider";
import { SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { audiences, conferences, events, exhibitions, services, stats } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BSE Event | فعاليات ومؤتمرات ومعارض جمعية المهندسين البحرينية" },
      {
        name: "description",
        content:
          "قسم إدارة الفعاليات والمؤتمرات والمعارض في جمعية المهندسين البحرينية: معارض متخصصة، مؤتمرات دولية، وبرامج رعاية للشركات والحضور.",
      },
      { property: "og:title", content: "BSE Event | فعاليات ومؤتمرات جمعية المهندسين البحرينية" },
      {
        property: "og:description",
        content:
          "منصات هندسية متخصصة تجمع الرعاة والعارضين والحضور — معارض ومؤتمرات وفعاليات جمعية المهندسين البحرينية.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Presentation, to: "/conferences" as const },
  { icon: Store, to: "/exhibitions" as const },
  { icon: CalendarDays, to: "/events" as const },
  { icon: Users, to: "/team" as const },
];

function Home() {
  const { p, t, lang } = useI18n();

  const cards = [
    {
      ...pillars[0]!,
      title: t("navConferences"),
      text: p({
        ar: "برامج علمية محكّمة ومؤتمرات إقليمية ودولية تستضيفها الجمعية بالشراكة مع الاتحادات المهنية.",
        en: "Peer-reviewed technical programmes and regional conferences hosted with professional federations.",
      }),
      count: conferences.length,
    },
    {
      ...pillars[1]!,
      title: t("navExhibitions"),
      text: p({
        ar: "معارض تملكها الجمعية بنسخ سنوية متتابعة، إضافة إلى معارض مصاحبة للمؤتمرات المتخصصة.",
        en: "BSE-owned exhibitions with successive annual editions, plus exhibitions accompanying specialised conferences.",
      }),
      count: exhibitions.length,
    },
    {
      ...pillars[2]!,
      title: t("navEvents"),
      text: p({
        ar: "فعاليات وأنشطة وندوات على مدار العام تخدم أعضاء الجمعية والمجتمع الهندسي في المملكة.",
        en: "Year-round events, activities and seminars serving members and the wider engineering community.",
      }),
      count: events.length,
    },
    {
      ...pillars[3]!,
      title: t("navTeam"),
      text: p({
        ar: "فريق متعدد التخصصات في التشغيل والبرامج العلمية والتسويق وخدمة الحضور.",
        en: "A multidisciplinary team across operations, technical programmes, marketing and attendee care.",
      }),
      count: 24,
    },
  ];

  return (
    <>
      <HeroSlider />

      {/* Stats band */}
      <section className="brand-gradient">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <p className="font-display text-4xl font-bold text-accent">{s.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/75">{p(s.label)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About brief */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{t("navAbout")}</p>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">
              {p({
                ar: "الجهة المنظمة للمنصات الهندسية في مملكة البحرين",
                en: "The organiser behind Bahrain's engineering platforms",
              })}
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {p({
                ar: "قسم إدارة الفعاليات والمؤتمرات والمعارض هو الذراع التنفيذي لجمعية المهندسين البحرينية في تنظيم المؤتمرات والمعارض والندوات. نعمل مع الجهات الحكومية والشركات والجامعات لتقديم فعاليات تعكس مكانة المهنة الهندسية، بمعايير تشغيلية وفنية واضحة في كل مرحلة.",
                en: "The Events, Conferences & Exhibitions Department is the delivery arm of the Bahrain Society of Engineers for conferences, exhibitions and seminars. We work with government entities, companies and universities to deliver events that reflect the standing of the engineering profession, with clear operational and technical standards at every stage.",
              })}
            </p>
            <ul className="mt-6 space-y-3">
              {services.slice(0, 3).map((s) => (
                <li key={s.icon} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm leading-relaxed">
                    <strong className="text-primary">{p(s.title)}</strong>
                    <span className="text-muted-foreground"> — {p(s.description)}</span>
                  </span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link to="/about">{t("readMore")}</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="kufic-grid absolute -inset-6 rounded-3xl" aria-hidden />
            <img
              src={teamWork}
              alt={p({ ar: "فريق تنظيم الفعاليات", en: "Events organising team" })}
              width={1600}
              height={1000}
              loading="lazy"
              className="relative rounded-2xl border border-border object-cover shadow-[var(--shadow-lift)]"
            />
          </div>
        </div>
      </section>

      {/* Pillar cards */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={t("explore")}
            title={p({ ar: "أقسام الموقع", en: "What you'll find here" })}
            description={p({
              ar: "تعرّف على منصاتنا الأربع الرئيسية وما تقدمه لك كراعٍ أو عارض أو حاضر.",
              en: "Our four main areas and what each offers you as a sponsor, exhibitor or attendee.",
            })}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <Link key={c.to} to={c.to} className="surface-card group flex flex-col p-6">
                <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-accent-foreground">
                  <Badge variant="secondary">{c.count}+</Badge>
                  <span className="ms-auto inline-flex items-center gap-1 text-primary">
                    {t("details")}
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured exhibitions */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow={t("ourExhibitions")}
          title={p({ ar: "معارض تملكها الجمعية", en: "Exhibitions owned by BSE" })}
          description={p({
            ar: "منصتان رئيسيتان لهما نسخ سنوية موثقة وصفحات خاصة لكل نسخة.",
            en: "Two flagship platforms with documented annual editions and a page for every edition.",
          })}
          action={
            <Button asChild variant="outline">
              <Link to="/exhibitions">{t("viewAll")}</Link>
            </Button>
          }
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {exhibitions
            .filter((e) => e.owned)
            .map((e) => (
              <Link
                key={e.slug}
                to="/exhibitions/$slug"
                params={{ slug: e.slug }}
                className="surface-card flex flex-col p-7"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{t("annual")}</Badge>
                  <Badge variant="outline">{p(e.sector)}</Badge>
                  <span className="text-xs text-muted-foreground" dir="ltr">
                    {lang === "ar" ? `منذ ${e.started}` : `since ${e.started}`}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-primary">{p(e.name)}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p(e.short)}</p>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                  {e.stats.map((s) => (
                    <div key={s.value}>
                      <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
                      <p className="text-xs text-muted-foreground">{p(s.label)}</p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* Audiences */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            align="center"
            eyebrow={t("audienceTitle")}
            title={p({ ar: "أربع فئات نخدمها بعناية", en: "Four audiences we serve" })}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <div key={a.title.en} className="surface-card flex flex-col p-6">
                <h3 className="text-lg font-bold text-primary">{p(a.title)}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p(a.description)}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent-foreground"
                >
                  {p(a.cta)}
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
