import { createFileRoute } from "@tanstack/react-router";

import teamWork from "@/assets/team-work.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Badge } from "@/components/ui/badge";
import { teamUnits } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "فريق العمل | BSE Event" },
      {
        name: "description",
        content:
          "فريق قسم الفعاليات والمؤتمرات والمعارض: وحدات الإدارة والتشغيل والبرامج العلمية والتسويق وخدمة الحضور وحجم كل وحدة.",
      },
      { property: "og:title", content: "فريق العمل | BSE Event" },
      {
        property: "og:description",
        content: "تعرّف على حجم فريق قسم الفعاليات في جمعية المهندسين البحرينية وتوزيع أدواره.",
      },
    ],
  }),
  component: Team;
});

function Team() {
  const { p } = useI18n();
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

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow={p({ ar: "حجم الفريق", en: "Team size" })}
          title={p({ ar: "توزيع الفريق على الوحدات", en: "How the team is structured" })}
          description={p({
            ar: "كل وحدة مسؤولة عن مرحلة واضحة من دورة حياة الفعالية، مع تكامل كامل بينها خلال أيام التنفيذ.",
            en: "Each unit owns a clear stage of the event lifecycle, integrating fully during delivery days.",
          })}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {teamUnits.map((u) => (
            <div key={u.unit.en} className="surface-card p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-primary">{p(u.unit)}</h3>
                <Badge>
                  {u.size} {p({ ar: "أعضاء", en: "members" })}
                </Badge>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p(u.role)}</p>
              <ul className="mt-5 space-y-3 border-t border-border pt-5">
                {u.members.map((m) => (
                  <li key={m.name.en} className="flex items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                      {p(m.name).trim().charAt(0)}
                    </span>
                    <span className="text-sm">
                      <span className="font-semibold text-foreground">{p(m.name)}</span>
                      <span className="text-muted-foreground"> — {p(m.title)}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="brand-gradient">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4">
          {[
            { v: String(total), l: { ar: "إجمالي أعضاء الفريق", en: "Team members" } },
            { v: String(teamUnits.length), l: { ar: "وحدات تشغيلية", en: "Operating units" } },
            { v: "120+", l: { ar: "فعالية سنوياً", en: "Events a year" } },
            { v: "100%", l: { ar: "تنفيذ داخلي", en: "In-house delivery" } },
          ].map((s) => (
            <div key={s.l.en} className="text-center">
              <p className="font-display text-4xl font-bold text-accent">{s.v}</p>
              <p className="mt-1 text-sm text-primary-foreground/75">{p(s.l)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
