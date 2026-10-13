import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpLeft, CalendarDays, Handshake, Presentation, Store, Users, MapPin, Phone, Mail } from "lucide-react";

import seminar from "@/assets/seminar.jpg";
import teamWork from "@/assets/team-work.jpg";
import heroConference from "@/assets/hero-conference.jpg";
import heroExhibition from "@/assets/hero-exhibition.jpg";
import heroEvents from "@/assets/hero-events.jpg";
import heroSponsors from "@/assets/hero-sponsors.jpg";
import { ClosingCta } from "@/components/bse/ClosingCta";
import { EditorialSectionHeading } from "@/components/bse/EditorialSectionHeading";
import { SharedSplitHero } from "@/components/bse/SharedSplitHero";
import { StatStrip } from "@/components/bse/StatStrip";
import { TypographyH2, TypographyH3, TypographyP } from "@/components/bse/Typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { conferences, events, exhibitions, services, stats } from "@/data/content";
import { partners } from "@/data/sponsors";
import { useI18n } from "@/lib/i18n";

/* 
 * Developed by Ultra Cube Team
 * www.ucubetech.com
 * https://github.com/ultra-cube
 */

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BSE Event | فعاليات ومؤتمرات ومعارض جمعية المهندسين البحرينية" },
      {
        name: "description",
        content:
          "قسم إدارة الفعاليات والمؤتمرات والمعارض في جمعية المهندسين البحرينية: معارض متخصصة، مؤتمرات دولية، وبرامج رعاية للشركات والحضور.",
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
      count: `${conferences.length.toString().padStart(2, "0")} ${t("conferencesCount")}`,
      description: t("conferencesDescription"),
      link: t("exploreConferences"),
    },
    {
      ...pillars[1]!,
      title: t("navExhibitions"),
      count: `02 ${t("exhibitionsCount")}`,
      description: t("exhibitionsDescription"),
      link: t("planVisit"),
    },
    {
      ...pillars[2]!,
      title: t("navEvents"),
      count: `120+ ${t("eventsCount")}`,
      description: t("eventsDescription"),
      link: t("planAttendance"),
    },
    {
      ...pillars[3]!,
      title: t("navSponsors"),
      count: t("partnershipsCount"),
      description: t("sponsorsDescription"),
      link: t("requestSponsorship"),
    },
    {
      ...pillars[4]!,
      title: t("navTeam"),
      count: t("teamCount"),
      description: t("teamDescription"),
      link: t("learnWorkflow"),
    },
  ];
  const featureConference = conferences[0]!;

  return (
    <>
      <SharedSplitHero
        variant="home"
        eyebrows={[t("heroSlide1Eyebrow"), t("heroSlide2Eyebrow"), t("heroSlide3Eyebrow")]}
        titles={[t("heroSlide1Title"), t("heroSlide2Title"), t("heroSlide3Title")]}
        descriptions={[t("heroSlide1Description"), t("heroSlide2Description"), t("heroSlide3Description")]}
        images={[heroConference, heroExhibition, heroEvents]}
        imageAlts={[
          lang === "ar" ? "قاعة مؤتمر هندسي وحضور على المسرح" : "Engineering conference hall with attendees on stage",
          lang === "ar" ? "معرض هندسي متخصص" : "Specialized engineering exhibition",
          lang === "ar" ? "فعالية هندسية" : "Engineering event",
        ]}
        enableSlideshow={true}
        primaryAction={<Button asChild size="lg" className="gap-2 rounded-bse-md bg-bse-gold text-bse-indigo-deep hover:bg-bse-gold-soft"><Link to="/conferences">{t("exploreConferences")}<ArrowUpLeft className="size-4" aria-hidden="true" /></Link></Button>}
        secondaryAction={<Button asChild size="lg" variant="outline" className="gap-2 rounded-bse-md border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"><Link to="/about">{t("learnAboutServices")}<ArrowUpLeft className="size-4" aria-hidden="true" /></Link></Button>}
      />

      {/* Stats Section with New Design */}
      <section className="bg-bse-indigo-deep px-6 py-16 text-white">
        <div className="mx-auto max-w-bse-content">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label.en} className="text-center">
                <p className="bse-display text-4xl text-bse-gold md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-white/70">{p(stat.label)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="explore" className="bg-bse-canvas-soft px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-bse-content">
          <EditorialSectionHeading
            eyebrow={t("exploreSectionEyebrow")}
            title={t("exploreSectionTitle")}
            description={t("exploreSectionDescription")}
          />
          <div className="mt-12 grid auto-rows-[156px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {cards.map((card, index) => {
              const Icon = card.icon;
              const span = index === 0 || index === 4 ? "lg:col-span-7" : "lg:col-span-5";
              const tall = index === 0 ? "row-span-2 min-h-[326px]" : "min-h-[156px]";
              return (
                <Link key={card.to} to={card.to} className={`group relative overflow-hidden rounded-bse-xl bg-bse-indigo ${span} ${tall}`}>
                  <img src={card.image} alt={card.title} width={1600} height={1000} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-b from-bse-indigo/10 via-bse-indigo/25 to-bse-indigo/95" />
                  <div className="absolute inset-x-6 top-6 flex items-center justify-between gap-3 text-xs font-bold text-bse-gold-soft">
                    <span className="inline-flex items-center gap-2"><Icon className="size-4" aria-hidden="true" />{card.count}</span>
                    {index === 0 && <Badge className="rounded-bse-md border-white/20 bg-white/10 text-white">{t("featured")}</Badge>}
                  </div>
                  <div className="absolute inset-x-6 bottom-6">
                    <TypographyH3 className="text-white">{card.title}</TypographyH3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/75">{card.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-bse-gold-soft">{card.link}<ArrowUpLeft className="size-4" aria-hidden="true" /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="conferences" className="bg-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-bse-content items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <div className="relative min-h-[310px] overflow-hidden rounded-bse-xl bg-bse-indigo">
            <img src={seminar} alt="جلسة نقاشية في ندوة هندسية" width={1600} height={1008} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-bse-indigo-deep/90 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 text-white"><p className="text-xs font-bold text-bse-gold-soft">{t("nextEdition")}</p><p className="bse-display mt-1 text-xl">{p(featureConference.title)}</p></div>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-bse-gold">{t("knowledgePlatform")}</p>
            <TypographyH2 className="mt-3">{t("conferencesSectionTitle")}</TypographyH2>
            <TypographyP className="mt-5 max-w-2xl">{t("conferencesSectionDescription")}</TypographyP>
            <div className="mt-7 grid grid-cols-3 border-y border-bse-hairline py-5">
              {[{ value: "26", label: t("gulfForumEdition") }, { value: "40+", label: t("speakersCount") }, { value: "3", label: t("programDays") }].map((item) => <div key={item.value} className="border-s border-bse-hairline px-4 first:border-s-0"><p className="bse-display text-2xl text-bse-blue">{item.value}</p><p className="mt-1 text-xs text-bse-ink-muted">{item.label}</p></div>)}
            </div>
            <Button asChild variant="link" className="mt-6 h-auto gap-2 px-0 text-bse-blue underline decoration-bse-gold decoration-2 underline-offset-8"><Link to="/conferences">{t("discoverConferences")}<ArrowUpLeft className="size-4" aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-bse-hairline bg-bse-canvas-soft px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-bse-content items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div><p className="text-xs font-bold tracking-[0.16em] text-bse-gold">{t("workflowSectionTitle")}</p><TypographyH2 className="mt-3">{t("workflowSectionTitle")}</TypographyH2><TypographyP className="mt-4 max-w-xl">{t("workflowSectionDescription")}</TypographyP><div className="mt-9 grid grid-cols-2 gap-5">{[{ code: "01 / IDEA", title: t("ideaStep"), text: t("ideaStepDesc") }, { code: "02 / PROGRAMME", title: t("programStep"), text: t("programStepDesc") }, { code: "03 / DELIVERY", title: t("deliveryStep"), text: t("deliveryStepDesc") }, { code: "04 / REPORT", title: t("reportStep"), text: t("reportStepDesc") }].map((step) => <div key={step.code} className="border-t-2 border-bse-gold pt-4"><p className="text-xs font-bold tracking-[0.12em] text-bse-gold">{step.code}</p><h3 className="bse-display mt-2 text-base text-bse-indigo">{step.title}</h3><p className="mt-2 text-xs leading-relaxed text-bse-ink-muted">{step.text}</p></div>)}</div></div>
          <div className="relative overflow-hidden rounded-bse-xl bg-bse-indigo p-3"><img src={teamWork} alt={lang === "ar" ? "فريق تنظيم يراجع مخطط فعالية" : "Event organization team reviewing event plan"} width={1600} height={1000} loading="lazy" decoding="async" className="h-[390px] w-full rounded-bse-lg object-cover" /><div className="absolute inset-x-7 bottom-7 rounded-bse-lg border border-white/20 bg-bse-indigo-deep/85 p-5 text-white"><p className="text-xs font-bold tracking-[0.14em] text-bse-gold-soft">ONE DELIVERY TEAM</p><p className="bse-display mt-2 text-xl">{t("fromIdeaToReport")}</p></div></div>
        </div>
      </section>

      <ClosingCta eyebrow={t("closingEyebrow")} title={t("closingTitle")} description={t("closingDescription")} action={<Button asChild size="lg" className="gap-2 rounded-bse-md bg-white text-bse-teal hover:bg-bse-gold-soft"><a href="mailto:events@bse.bh">{t("startConversation")}<ArrowUpLeft className="size-4" aria-hidden="true" /></a></Button>} />
    </>
  );
}
