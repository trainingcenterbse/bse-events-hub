import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, Check, Crown, Handshake, Quote, Sparkles } from "lucide-react";

import heroSponsors from "@/assets/hero-sponsors.jpg";
import { CountUp, Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/content";
import { partners, sponsorSteps, sponsorTiers, testimonials } from "@/data/sponsors";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "الرعاة والشراكات | مستويات الرعاية — BSE Event" },
      {
        name: "description",
        content:
          "مستويات الرعاية في فعاليات ومؤتمرات ومعارض جمعية المهندسين البحرينية، شركاء الجمعية وروابطهم، وشهادات الرعاة السابقين، وخطوات الانضمام كراعٍ.",
      },
      { property: "og:title", content: "الرعاة والشراكات | BSE Event" },
      {
        property: "og:description",
        content:
          "باقات رعاية متدرجة تمنح ظهوراً أمام صنّاع القرار في القطاع الهندسي بالبحرين والخليج — تعرّف على المستويات والشركاء.",
      },
    ],
  }),
  component: Sponsors,
});

function Sponsors() {
  const { p, t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("navSponsors")}
        title={p({ ar: "الرعاة والشراكات", en: "Sponsors & partnerships" })}
        description={p({
          ar: "رعايتك ليست شعاراً على لوحة — بل حضور مدروس أمام المهندسين والاستشاريين وصنّاع القرار في مشاريع المملكة. تعرّف على مستويات الرعاية وشركائنا وأثر الشراكة معنا.",
          en: "Sponsorship here is not a logo on a wall — it is a designed presence in front of the engineers, consultants and decision-makers behind the Kingdom's projects.",
        })}
        image={heroSponsors}
      />

      {/* Value band */}
      <section className="brand-gradient">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08} className="text-center">
              <CountUp value={s.value} className="numeral block text-5xl font-bold text-accent" />
              <p className="mt-3 text-sm text-primary-foreground/75">{p(s.label)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tiers */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow={t("sponsorTiers")}
          title={p({ ar: "أربعة مستويات للرعاية", en: "Four levels of sponsorship" })}
          description={p({
            ar: "كل مستوى يمكن تخصيصه حسب الفعالية وأهداف الشريك — والأسعار تُحدَّد لكل نسخة على حدة.",
            en: "Every tier can be tailored to the event and to your objectives — pricing is set per edition.",
          })}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {sponsorTiers.map((tier, i) => (
            <Reveal key={tier.key} delay={i * 0.07} className="h-full">
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-7 ${
                  tier.featured
                    ? "glow-ring bg-primary-deep text-primary-foreground"
                    : "surface-card"
                }`}
              >
                {tier.featured && (
                  <span className="absolute end-0 top-0 flex items-center gap-1 rounded-es-2xl bg-accent px-3 py-1.5 text-[11px] font-bold text-accent-foreground">
                    <Sparkles className="size-3.5" />
                    {p({ ar: "الأكثر تميزاً", en: "Most prominent" })}
                  </span>
                )}
                <span
                  className={`grid size-11 place-items-center rounded-xl ${
                    tier.featured ? "bg-accent/20 text-accent" : "bg-primary/10 text-primary"
                  }`}
                >
                  {tier.featured ? <Crown className="size-5" /> : <BadgeCheck className="size-5" />}
                </span>
                <h3
                  className={`mt-5 font-display text-xl font-bold ${
                    tier.featured ? "text-primary-foreground" : "text-primary"
                  }`}
                >
                  {p(tier.name)}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    tier.featured ? "text-primary-foreground/75" : "text-muted-foreground"
                  }`}
                >
                  {p(tier.headline)}
                </p>

                <div
                  className={`mt-5 flex flex-wrap gap-2 border-t pt-5 text-xs ${
                    tier.featured ? "border-primary-foreground/15" : "border-border"
                  }`}
                >
                  <Badge variant={tier.featured ? "default" : "secondary"}>{p(tier.price)}</Badge>
                  <Badge variant="outline" className={tier.featured ? "border-primary-foreground/30 text-primary-foreground/80" : ""}>
                    {p(tier.slots)}
                  </Badge>
                </div>

                <ul className="mt-5 flex-1 space-y-3">
                  {tier.benefits.map((b) => (
                    <li key={b.en} className="flex gap-2.5 text-sm leading-relaxed">
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${
                          tier.featured ? "text-accent" : "text-accent-foreground"
                        }`}
                      />
                      <span className={tier.featured ? "text-primary-foreground/85" : "text-muted-foreground"}>
                        {p(b)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={tier.featured ? "secondary" : "outline"}
                  className="mt-7 w-full"
                >
                  <a href="#contact">{t("requestKit")}</a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="relative overflow-hidden bg-secondary/50 py-24">
        <div className="kufic-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={p({ ar: "شبكة الشراكات", en: "Partner network" })}
            title={t("ourPartners")}
            description={p({
              ar: "جهات حكومية وشركات وطنية وجامعات واتحادات مهنية تشاركنا تنظيم ورعاية فعاليات الجمعية.",
              en: "Government entities, national companies, universities and professional federations that organise and sponsor BSE events with us.",
            })}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((prt, i) => (
              <Reveal key={prt.name.en} delay={(i % 3) * 0.06} className="h-full">
                <a
                  href={prt.url}
                  target="_blank"
                  rel="noreferrer"
                  className="surface-card group flex h-full items-start gap-4 p-5"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary/8 font-display text-sm font-bold text-primary ring-1 ring-primary/12">
                    {prt.name.en.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-primary">{p(prt.name)}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{p(prt.sector)}</span>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-accent-foreground">
                      <Handshake className="size-3.5" />
                      {p(prt.tier)}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:text-primary" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow={p({ ar: "شهادات", en: "Testimonials" })}
          title={t("testimonialsTitle")}
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((ts, i) => (
            <Reveal key={ts.quote.en} delay={i * 0.08} className="h-full">
              <figure className="surface-card flex h-full flex-col p-7">
                <Quote className="size-8 text-accent/70" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  {p(ts.quote)}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <span className="block font-semibold text-primary">{p(ts.name)}</span>
                  <span className="block text-xs text-muted-foreground">{p(ts.role)}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="bg-primary-deep py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="eyebrow">{p({ ar: "الخطوات", en: "The process" })}</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{t("howItWorks")}</h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {sponsorSteps.map((s, i) => (
              <Reveal key={s.title.en} delay={i * 0.09}>
                <li className="relative border-t border-primary-foreground/20 pt-6">
                  <span className="numeral block text-5xl font-bold text-accent/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{p(s.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{p(s.text)}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mt-16 flex flex-wrap items-center gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8">
            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold">
                {p({ ar: "جاهز لتكون شريكاً في النسخة القادمة؟", en: "Ready to partner on the next edition?" })}
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/70">
                {p({
                  ar: "أرسل لنا اسم شركتك وقطاعك وسنرشح الفعالية والمستوى الأنسب لك.",
                  en: "Send us your company and sector and we will recommend the right event and tier.",
                })}
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild size="lg" variant="secondary">
                <a href="mailto:events@bse.bh">{t("requestKit")}</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link to="/exhibitions">{t("navExhibitions")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
