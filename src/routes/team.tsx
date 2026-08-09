import { createFileRoute } from "@tanstack/react-router";
import { Mail, Users2 } from "lucide-react";

import teamWork from "@/assets/team-work.jpg";
import { CountUp, Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { leadership, teamUnits } from "@/data/content";
import { personPhotos } from "@/data/media";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "فريق العمل | BSE Event" },
      {
        name: "description",
        content:
          "فريق قسم الفعاليات والمؤتمرات والمعارض: قيادة القسم بالصور والمناصب، ووحدات الإدارة والتشغيل والبرامج العلمية والتسويق وخدمة الحضور.",
      },
      { property: "og:title", content: "فريق العمل | BSE Event" },
      {
        property: "og:description",
        content: "تعرّف على قيادة قسم الفعاليات في جمعية المهندسين البحرينية وتوزيع الوحدات التشغيلية.",
      },
    ],
  }),
  component: Team,
});

function Team() {
  const { p, t } = useI18n();
  const total = teamUnits.reduce((sum, u) => sum + Number(u.size), 0);

  return (
    <>
      <PageHero
        eyebrow={p({ ar: "فريق العمل", en: "Our team" })}
        title={p({ ar: "فريق واحد، خمس وحدات تشغيلية", en: "One team, five operating units" })}
        description={p({
          ar: `${total} عضواً وعضوة يعملون بين التخطيط والتشغيل والبرامج العلمية والتسويق وخدمة الحضور لتنفيذ فعاليات الجمعية على مدار العام.`,
          en: `${total} members working across planning, operations, technical programmes, marketing and attendee care to deliver BSE events all year round.`,
        })}
        image={teamWork}
      />

      {/* Blue band — scale */}
      <section className="band-blue relative overflow-hidden">
        <div className="hatch-light absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4">
          {[
            { v: String(total), l: { ar: "إجمالي أعضاء الفريق", en: "Team members" } },
            { v: String(teamUnits.length), l: { ar: "وحدات تشغيلية", en: "Operating units" } },
            { v: "120+", l: { ar: "فعالية سنوياً", en: "Events a year" } },
            { v: "100%", l: { ar: "تنفيذ داخلي", en: "In-house delivery" } },
          ].map((s, i) => (
            <Reveal key={s.l.en} delay={i * 0.07} className="text-center">
              <CountUp value={s.v} className="numeral block text-5xl font-bold text-accent" />
              <p className="mt-3 text-sm text-primary-foreground/75">{p(s.l)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* White band — leadership with photos */}
      <section className="band-light relative overflow-hidden py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={t("ourLeadership")}
            title={p({ ar: "المسؤولون عن تنفيذ فعالياتنا", en: "The people behind our events" })}
            description={p({
              ar: "ستة مسؤولين يقودون وحدات القسم، ولكل منهم نطاق واضح من المسؤولية وقناة تواصل مباشرة للرعاة والعارضين.",
              en: "Six leads run the department's units, each with a clear remit and a direct contact channel for sponsors and exhibitors.",
            })}
          />

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((m, i) => (
              <Reveal key={m.email} delay={(i % 3) * 0.08} className="h-full">
                <article className="showcase-card group flex h-full flex-col bg-card">
                  <div className="relative aspect-4/5 overflow-hidden">
                    <img
                      src={personPhotos[m.photo]}
                      alt={p(m.name)}
                      width={768}
                      height={960}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover object-top"
                    />
                    <div className="veil absolute inset-0" />
                    <div className="absolute inset-x-5 bottom-5">
                      <Badge variant="secondary" className="mb-2">
                        {p(m.unit)}
                      </Badge>
                      <h3 className="font-display text-xl font-bold text-primary-foreground">
                        {p(m.name)}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-accent">{p(m.role)}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{p(m.bio)}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {m.focus.map((f) => (
                        <Badge key={f.en} variant="outline">
                          {p(f)}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" size="sm" className="mt-6 w-fit gap-1.5">
                      <a href={`mailto:${m.email}`}>
                        <Mail className="size-4" />
                        {t("contactPerson")}
                      </a>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blue band — operating units */}
      <section className="band-blue relative overflow-hidden py-24">
        <div className="dot-grid-light absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="eyebrow">{t("unitsTitle")}</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              {p({ ar: "توزيع الفريق على الوحدات", en: "How the team is structured" })}
            </h2>
            <p className="mt-3 leading-relaxed text-primary-foreground/70">
              {p({
                ar: "كل وحدة مسؤولة عن مرحلة واضحة من دورة حياة الفعالية، مع تكامل كامل بينها خلال أيام التنفيذ.",
                en: "Each unit owns a clear stage of the event lifecycle, integrating fully during delivery days.",
              })}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {teamUnits.map((u, i) => (
              <Reveal key={u.unit.en} delay={(i % 2) * 0.08} className="h-full">
                <div className="glass-panel flex h-full flex-col p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold">{p(u.unit)}</h3>
                    <span className="flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent">
                      <Users2 className="size-3.5" />
                      {u.size} {p({ ar: "أعضاء", en: "members" })}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{p(u.role)}</p>
                  <ul className="mt-5 space-y-3 border-t border-primary-foreground/15 pt-5">
                    {u.members.map((mem) => (
                      <li key={mem.name.en} className="flex items-center gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary-foreground/10 font-display text-sm font-bold text-accent">
                          {p(mem.name).trim().charAt(0)}
                        </span>
                        <span className="text-sm">
                          <span className="font-semibold">{p(mem.name)}</span>
                          <span className="text-primary-foreground/60"> — {p(mem.title)}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* White closing band */}
      <section className="band-light relative overflow-hidden py-24">
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="eyebrow">{t("contactUs")}</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
            {p({ ar: "تحتاج التنسيق مع أحد فرقنا؟", en: "Need to reach one of our units?" })}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {p({
              ar: "راسلنا وسنحوّل طلبك إلى الوحدة المختصة في القسم خلال يوم عمل واحد.",
              en: "Send us a note and we'll route your request to the right unit within one working day.",
            })}
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href="#contact">{t("contactUs")}</a>
          </Button>
        </div>
      </section>
    </>
  );
}
