import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Handshake, Store, Presentation, Users } from "lucide-react";

import seminar from "@/assets/seminar.jpg";
import teamWork from "@/assets/team-work.jpg";
import heroConference from "@/assets/hero-conference.jpg";
import heroExhibition from "@/assets/hero-exhibition.jpg";
import heroEvents from "@/assets/hero-events.jpg";
import heroSponsors from "@/assets/hero-sponsors.jpg";
import { HeroSlider } from "@/components/HeroSlider";
import { CountUp, Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { audiences, conferences, events, exhibitions, services, stats } from "@/data/content";
import { partners } from "@/data/sponsors";
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
  { icon: Presentation, to: "/conferences" as const, image: heroConference },
  { icon: Store, to: "/exhibitions" as const, image: heroExhibition },
  { icon: CalendarDays, to: "/events" as const, image: heroEvents },
  { icon: Handshake, to: "/sponsors" as const, image: heroSponsors },
  { icon: Users, to: "/team" as const, image: teamWork },
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
      title: t("navSponsors"),
      text: p({
        ar: "مستويات رعاية متدرجة وشبكة شركاء من الجهات الحكومية والشركات الوطنية والجامعات.",
        en: "Tiered sponsorship levels and a partner network of government entities, national companies and universities.",
      }),
      count: partners.length,
    },
    {
      ...pillars[4]!,
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
      <section className="brand-gradient relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08} className="text-center">
              <CountUp value={s.value} className="numeral block text-5xl font-bold text-accent" />
              <p className="mt-3 text-sm text-primary-foreground/75">{p(s.label)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About brief */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{t("navAbout")}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
              {p({
                ar: "الجهة المنظمة للمنصات الهندسية في مملكة البحرين",
                en: "The organiser behind Bahrain's engineering platforms",
              })}
            </h2>
            <span className="gold-rule mt-6 block h-1 w-20 rounded-full" aria-hidden />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {p({
                ar: "قسم إدارة الفعاليات والمؤتمرات والمعارض هو الذراع التنفيذي لجمعية المهندسين البحرينية في تنظيم المؤتمرات والمعارض والندوات. نعمل مع الجهات الحكومية والشركات والجامعات لتقديم فعاليات تعكس مكانة المهنة الهندسية، بمعايير تشغيلية وفنية واضحة في كل مرحلة.",
                en: "The Events, Conferences & Exhibitions Department is the delivery arm of the Bahrain Society of Engineers for conferences, exhibitions and seminars. We work with government entities, companies and universities to deliver events that reflect the standing of the engineering profession, with clear operational and technical standards at every stage.",
              })}
            </p>
            <ul className="mt-7 space-y-4">
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
            <Button asChild className="mt-9" size="lg">
              <Link to="/about">{t("readMore")}</Link>
            </Button>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <div className="kufic-grid absolute -inset-6 rounded-3xl" aria-hidden />
            <div className="relative grid gap-4">
              <img
                src={teamWork}
                alt={p({ ar: "فريق تنظيم الفعاليات", en: "Events organising team" })}
                width={1600}
                height={1000}
                loading="lazy"
                className="rounded-2xl border border-border object-cover shadow-[var(--shadow-lift)]"
              />
              <div className="flex gap-4">
                <img
                  src={seminar}
                  alt={p({ ar: "ندوة فنية", en: "Technical seminar" })}
                  width={1600}
                  height={1008}
                  loading="lazy"
                  className="h-40 w-2/3 rounded-2xl border border-border object-cover shadow-[var(--shadow-card)]"
                />
                <div className="brand-gradient flex w-1/3 flex-col justify-center rounded-2xl p-5 text-primary-foreground">
                  <CountUp value="40" className="numeral text-4xl font-bold text-accent" />
                  <p className="mt-2 text-xs leading-snug text-primary-foreground/75">
                    {p({ ar: "عاماً من العمل الهندسي", en: "Years of engineering work" })}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillar cards — image led */}
      <section className="band-blue relative overflow-hidden py-24">
        <div className="dot-grid-light absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-primary-foreground">
            <SectionHeading
              eyebrow={t("explore")}
              title={p({ ar: "أقسام الموقع", en: "What you'll find here" })}
              description={p({
                ar: "خمس منصات رئيسية وما تقدمه لك كراعٍ أو عارض أو حاضر.",
                en: "Five main areas and what each offers you as a sponsor, exhibitor or attendee.",
              })}
            />
          </div>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c, i) => (
              <Reveal key={c.to} delay={(i % 3) * 0.08} className="h-full">
                <Link to={c.to} className="showcase-card group flex h-full flex-col bg-card">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      width={1600}
                      height={1000}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="veil absolute inset-0" />
                    <span className="absolute bottom-4 start-5 grid size-12 place-items-center rounded-xl bg-white/20 text-white backdrop-blur-md">
                      <c.icon className="size-6" />
                    </span>
                    <Badge className="absolute bottom-4 end-5 border-white/30 bg-white/10 text-white backdrop-blur-sm" variant="default">
                      {c.count}+
                    </Badge>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-bold text-primary">{c.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                    <Button asChild variant="outline" size="sm" className="mt-5 w-full gap-2">
                      <span>
                        {t("details")}
                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5" />
                      </span>
                    </Button>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured exhibitions */}
      <section className="band-light relative overflow-hidden py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
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
          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {exhibitions
              .filter((e) => e.owned)
              .map((e, i) => (
                <Reveal key={e.slug} delay={i * 0.1} className="h-full">
                  <Link
                    to="/exhibitions/$slug"
                    params={{ slug: e.slug }}
                    className="showcase-card group flex h-full flex-col bg-card"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={i === 0 ? seminar : heroExhibition}
                        alt={p(e.name)}
                        width={1600}
                        height={1000}
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="veil absolute inset-0" />
                      <div className="absolute inset-x-6 bottom-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge className="border-white/20 bg-white/10 text-white backdrop-blur-sm">{t("annual")}</Badge>
                          <span className="rounded-full bg-background/15 px-2.5 py-1 text-[11px] font-medium text-primary-foreground backdrop-blur-sm">
                            {p(e.sector)}
                          </span>
                          <span className="text-[11px] text-primary-foreground/70" dir="ltr">
                            {lang === "ar" ? `منذ ${e.started}` : `since ${e.started}`}
                          </span>
                        </div>
                        <h3 className="mt-3 font-display text-xl font-bold text-primary-foreground">
                          {p(e.name)}
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{p(e.short)}</p>
                      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                        {e.stats.map((s) => (
                          <div key={s.value}>
                            <CountUp value={s.value} className="numeral block text-3xl font-bold text-primary" />
                            <p className="mt-2 text-xs text-muted-foreground">{p(s.label)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* Partners marquee */}
      <section className="border-y border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">{t("ourPartners")}</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">
                {p({ ar: "شركاء نثق بهم ويثقون بنا", en: "Partners we build with" })}
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/sponsors">{t("sponsorTiers")}</Link>
            </Button>
          </div>
        </div>
        <div className="relative mt-10 overflow-hidden">
          <div className="marquee-track gap-4">
            {[...partners, ...partners].map((prt, i) => (
              <span
                key={`${prt.name.en}-${i}`}
                className="flex shrink-0 items-center gap-3 rounded-full border border-border bg-background px-5 py-3"
              >
                <span className="grid size-8 place-items-center rounded-full bg-primary/8 font-display text-[11px] font-bold text-primary">
                  {prt.name.en.slice(0, 2).toUpperCase()}
                </span>
                <span className="whitespace-nowrap text-sm font-semibold text-primary">{p(prt.name)}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="bg-primary-deep py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{t("audienceTitle")}</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              {p({ ar: "أربع فئات نخدمها بعناية", en: "Four audiences we serve" })}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => (
              <Reveal key={a.title.en} delay={i * 0.08} className="h-full">
                <div className="glass-panel flex h-full flex-col p-6">
                  <span className="numeral text-4xl font-bold text-accent/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{p(a.title)}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-foreground/70">
                    {p(a.description)}
                  </p>
                  <Link
                    to="/sponsors"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-primary-foreground"
                  >
                    {p(a.cta)}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

