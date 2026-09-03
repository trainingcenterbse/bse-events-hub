import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Eye, Handshake, Megaphone, Presentation, ShieldCheck, Store, Target, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import heroConference from "@/assets/hero-conference.jpg";
import seminar from "@/assets/seminar.jpg";
import teamWork from "@/assets/team-work.jpg";
import { ClosingCta } from "@/components/bse/ClosingCta";
import { SharedSplitHero } from "@/components/bse/SharedSplitHero";
import { StatStrip } from "@/components/bse/StatStrip";
import { TypographyH2, TypographyH3, TypographyP } from "@/components/bse/Typography";
import { Card } from "@/components/ui/card";
import { goals, services, stats } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن وأهدافنا | BSE Event" },
      {
        name: "description",
        content: "تعرّف على قسم إدارة الفعاليات والمؤتمرات والمعارض في جمعية المهندسين البحرينية: الرسالة، الأهداف، والخدمات.",
      },
    ],
  }),
  component: About,
});

const serviceIcons: Record<string, LucideIcon> = {
  Calendar: CalendarDays,
  Presentation,
  Store,
  Handshake,
  Users,
  Megaphone,
};

function About() {
  const { p, t } = useI18n();
  const values = [
    {
      icon: Eye,
      title: p({ ar: "رؤيتنا", en: "Our vision" }),
      text: p({
        ar: "أن تكون البحرين مركزًا خليجيًا معتمدًا للمؤتمرات والمعارض الهندسية المتخصصة.",
        en: "For Bahrain to be a recognised Gulf hub for specialised engineering conferences and exhibitions.",
      }),
    },
    {
      icon: Target,
      title: p({ ar: "رسالتنا", en: "Our mission" }),
      text: p({
        ar: "تنظيم فعاليات هندسية ذات أثر قابل للقياس تخدم المهنة والاقتصاد الوطني وتربط المهندس بسوق العمل.",
        en: "Organising engineering events with measurable impact that serve the profession and connect engineers with the market.",
      }),
    },
    {
      icon: ShieldCheck,
      title: p({ ar: "قيمنا", en: "Our values" }),
      text: p({
        ar: "المهنية، الشفافية مع الرعاة والشركاء، الجودة في التنفيذ، والاستدامة في اختيار الموضوعات والموردين.",
        en: "Professionalism, transparency, delivery quality and sustainability in topics and suppliers.",
      }),
    },
  ];

  return (
    <>
      <SharedSplitHero
        variant="about"
        eyebrow="جمعية المهندسين البحرينية"
        title="نحو منصات هندسية تصنع أثرًا"
        description="نحوّل الخبرة الهندسية إلى لقاءات ومنصات وبرامج منظمة تخدم المهنة، وتربط المهندس بسوق العمل والشركاء وصنّاع القرار."
        image={teamWork}
        imageAlt="فريق هندسي يناقش المخططات"
        primaryAction={<a href="#about" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-bse-violet px-6 py-3 text-sm font-bold text-bse-indigo">تعرّف على القسم</a>}
        facts={<div className="mt-12 flex items-center gap-3 border-t border-white/15 pt-5 text-xs text-white/65"><span className="bse-display text-2xl text-bse-gold">40+</span><span>عامًا من العمل الهندسي</span></div>}
      />

      <section id="about" className="bse-orbital-light relative bg-white px-6 py-20 sm:py-24">
        <div className="relative z-10 mx-auto max-w-bse-content">
          <div className="mb-12 flex flex-col gap-5 border-b border-bse-hairline pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.16em] text-bse-gold">جمعية المهندسين البحرينية</p>
              <TypographyH2 className="mt-3">جهة مهنية، وقسم ينفّذ الفكرة حتى أثرها</TypographyH2>
            </div>
            <span className="bse-display text-4xl text-bse-hairline sm:text-5xl">01 / 04</span>
          </div>

          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="max-w-bse-reading">
              <TypographyP className="text-lg leading-[1.95] text-bse-ink">جمعية المهندسين البحرينية مؤسسة مهنية تأسست لخدمة المهندسين في مملكة البحرين، وتضم آلاف الأعضاء من مختلف التخصصات الهندسية، ويقع مقرها في الجفير. تعمل الجمعية عبر لجان فنية وأقسام متخصصة لتطوير المهنة ورفع كفاءة الكادر الهندسي الوطني.</TypographyP>
              <TypographyP className="mt-6">قسم إدارة الفعاليات والمؤتمرات والمعارض هو الجهة المسؤولة عن تخطيط وتنظيم وتنفيذ جميع المؤتمرات والمعارض والندوات والأنشطة التي تحمل اسم الجمعية. نتعامل مع كل فعالية كمشروع كامل: تحليل الجدوى، بناء البرنامج، استقطاب الرعاة والعارضين، التشغيل الميداني، ثم التقرير الختامي ومؤشرات الأثر.</TypographyP>
              <div className="mt-9 flex items-center gap-3 border-e-2 border-bse-gold pe-4 text-sm font-semibold text-bse-indigo"><span className="text-bse-gold" aria-hidden="true">←</span>أربع فئات، ومسارات تعامل واضحة لكل شريك وحاضر</div>
            </div>

            <div className="relative min-h-[410px]">
              <div className="absolute -inset-4 rounded-bse-xl bg-bse-canvas-soft" aria-hidden="true" />
              <div className="relative grid h-full gap-4 sm:grid-cols-[1.15fr_.85fr]">
                <div className="relative min-h-[300px] overflow-hidden rounded-bse-xl bg-bse-indigo sm:min-h-[410px]">
                  <img src={heroConference} alt="قاعة مؤتمر هندسي في البحرين" width={1920} height={1088} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
                  <div className="absolute inset-0 bg-bse-indigo/45" />
                  <div className="absolute inset-x-5 bottom-5 text-white"><p className="text-xs tracking-[0.14em] text-bse-violet">DELIVERY ARM</p><p className="bse-display mt-1 text-xl">من الفكرة إلى التقرير الختامي</p></div>
                </div>
                <div className="flex flex-col justify-between rounded-bse-xl bg-bse-canvas-soft p-5">
                  <div><p className="text-xs font-bold tracking-[0.15em] text-bse-gold">منذ 1983</p><p className="bse-display mt-2 text-4xl text-bse-indigo">43</p><p className="mt-2 text-sm leading-7 text-bse-ink-muted">عامًا من بناء المنصات المهنية في المملكة.</p></div>
                  <p className="border-t border-bse-hairline pt-4 text-xs leading-7 text-bse-ink-muted">نخدم الرعاة والحضور والعارضين وشركاء التنظيم عبر باقات ومسارات مخصصة.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bse-orbital-light relative bg-bse-canvas-soft px-6 py-20 sm:py-24">
        <div className="relative z-10 mx-auto max-w-bse-content">
          <p className="text-xs font-bold tracking-[0.16em] text-bse-gold">مرجعنا في كل قرار</p>
          <TypographyH2 className="mt-3">رؤيتنا، رسالتنا، قيمنا</TypographyH2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              const surface = index === 0 ? "bg-white" : index === 1 ? "bg-bse-canvas-soft" : "border-bse-violet/60 bg-bse-violet/35";
              return (
                <Card key={value.title} className={`min-h-[240px] rounded-bse-lg p-7 shadow-none ${surface}`}>
                  <span className="mb-10 grid size-11 place-items-center rounded-bse-md bg-bse-indigo/10 text-bse-indigo"><Icon className="size-5" aria-hidden="true" /></span>
                  <TypographyH3>{value.title}</TypographyH3>
                  <TypographyP className="mt-3">{value.text}</TypographyP>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="goals" className="bse-indigo-band px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-bse-content">
          <div className="flex flex-col gap-4 border-b border-white/15 pb-10 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold tracking-[0.16em] text-bse-violet">الأهداف الاستراتيجية</p><TypographyH2 className="mt-3 text-white">أربعة أهداف تحكم ما نبنيه</TypographyH2></div><p className="max-w-xs text-sm leading-7 text-white/65">نختار الموضوعات، ونصمم البرامج، ونقيس النتائج وفق هذه الأولويات.</p></div>
          <div>{goals.map((goal, index) => <div key={goal.title.en} className="grid gap-5 border-b border-bse-gold/70 py-8 last:border-0 sm:grid-cols-[110px_minmax(0,.9fr)_minmax(0,1.1fr)] sm:items-center sm:gap-8"><span className="bse-display text-5xl text-bse-gold">{String(index + 1).padStart(2, "0")}</span><TypographyH3 className="text-white">{p(goal.title)}</TypographyH3><TypographyP className="text-white/65">{p(goal.description)}</TypographyP></div>)}</div>
        </div>
      </section>

      <section id="services" className="bse-orbital-light relative bg-white px-6 py-20 sm:py-24">
        <div className="relative z-10 mx-auto max-w-bse-content">
          <p className="text-xs font-bold tracking-[0.16em] text-bse-gold">الخدمات التنفيذية</p>
          <TypographyH2 className="mt-3">ما نقدمه بالتفصيل</TypographyH2>
          <TypographyP className="mt-4 max-w-2xl">فريق واحد ومسار واضح لكل مرحلة من مراحل الفعالية، من التخطيط إلى التغطية والتقرير.</TypographyP>
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,.72fr)] lg:gap-16">
            <div className="border-t-2 border-bse-indigo">{services.map((service) => { const Icon = serviceIcons[service.icon] ?? CalendarDays; return <div key={service.icon} className="grid grid-cols-[42px_minmax(0,.75fr)_minmax(0,1.25fr)_auto] items-start gap-4 border-b border-bse-hairline py-5 sm:grid-cols-[48px_minmax(0,.75fr)_minmax(0,1.25fr)_auto] sm:gap-5"><span className="grid size-9 place-items-center rounded-bse-md bg-bse-indigo text-white"><Icon className="size-4" aria-hidden="true" /></span><h3 className="bse-display text-base text-bse-indigo">{p(service.title)}</h3><p className="text-sm leading-6 text-bse-ink-muted">{p(service.description)}</p><span className="hidden rounded-full bg-bse-violet/50 px-2.5 py-1 text-[10px] font-bold text-bse-indigo sm:inline-flex">{t("details")}</span></div>; })}</div>
            <div className="relative overflow-hidden rounded-bse-xl bg-bse-indigo lg:sticky lg:top-28"><img src={seminar} alt="ندوة فنية ينظمها قسم الفعاليات" width={1600} height={1008} loading="lazy" decoding="async" className="h-[340px] w-full object-cover opacity-90" /><div className="absolute inset-0 bg-gradient-to-t from-bse-indigo-deep via-bse-indigo-deep/30 to-transparent" /><div className="absolute inset-x-6 bottom-6 text-white"><p className="text-xs font-bold tracking-[0.16em] text-bse-violet">ONE TEAM / SIX CAPABILITIES</p><TypographyH3 className="mt-2 text-white">تشغيل واضح. تجربة أفضل.</TypographyH3><p className="mt-3 text-sm leading-6 text-white/65">كل خدمة مصممة لتزيل التعقيد عن الشريك، وتمنح الحاضر تجربة منظمة.</p></div></div>
          </div>
        </div>
      </section>

      <StatStrip items={stats} />
      <ClosingCta eyebrow="لنبدأ من احتياجك" title="نحوّل الخبرة الهندسية إلى تجربة منظمة" description="شاركنا فكرة الفعالية أو هدف الشراكة، وسيصلك المسار الأنسب من فريق القسم." action={<a href="mailto:events@bse.bh" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-bse-md bg-white px-6 text-sm font-bold text-bse-indigo">تواصل مع فريقنا<span aria-hidden="true">←</span></a>} />
    </>
  );
}
