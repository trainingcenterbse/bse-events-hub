import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, ShieldCheck } from "lucide-react";

import heroConference from "@/assets/hero-conference.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { goals, services, stats } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن وأهدافنا | BSE Event" },
      {
        name: "description",
        content:
          "تعرّف على قسم إدارة الفعاليات والمؤتمرات والمعارض في جمعية المهندسين البحرينية: الرسالة، الأهداف، والخدمات التي نقدمها للرعاة والعارضين والحضور.",
      },
      { property: "og:title", content: "من نحن وأهدافنا | BSE Event" },
      {
        property: "og:description",
        content: "رسالة القسم وأهدافه وخدماته في تنظيم المؤتمرات والمعارض الهندسية في مملكة البحرين.",
      },
    ],
  }),
  component: About,
});

function About() {
  const { p, t } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("navAbout")}
        title={p({ ar: "من نحن وأهدافنا", en: "About us & our goals" })}
        description={p({
          ar: "قسم متخصص داخل جمعية المهندسين البحرينية يحوّل الأفكار الهندسية إلى منصات حقيقية للقاء والمعرفة والأعمال.",
          en: "A specialised department within the Bahrain Society of Engineers turning engineering ideas into real platforms for meeting, knowledge and business.",
        })}
        image={heroConference}
      />

      <section className="band-light relative overflow-hidden py-24">
        <div className="dot-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <SectionHeading
                eyebrow={t("society")}
                title={p({ ar: "من نحن", en: "Who we are" })}
              />
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  {p({
                    ar: "جمعية المهندسين البحرينية مؤسسة مهنية تأسست لخدمة المهندسين في مملكة البحرين، وتضم آلاف الأعضاء من مختلف التخصصات الهندسية، ويقع مقرها في الجفير. تعمل الجمعية عبر لجان فنية وأقسام متخصصة لتطوير المهنة ورفع كفاءة الكادر الهندسي الوطني.",
                    en: "The Bahrain Society of Engineers is a professional institution serving engineers in the Kingdom of Bahrain, with thousands of members across all engineering disciplines and headquarters in Juffair. It works through technical committees and specialised departments to develop the profession and raise the capability of the national engineering workforce.",
                  })}
                </p>
                <p>
                  {p({
                    ar: "قسم إدارة الفعاليات والمؤتمرات والمعارض هو الجهة المسؤولة عن تخطيط وتنظيم وتنفيذ جميع المؤتمرات والمعارض والندوات والأنشطة التي تحمل اسم الجمعية. نتعامل مع كل فعالية كمشروع كامل: تحليل الجدوى، بناء البرنامج، استقطاب الرعاة والعارضين، التشغيل الميداني، ثم التقرير الختامي ومؤشرات الأثر.",
                    en: "The Events, Conferences & Exhibitions Department plans, organises and delivers every conference, exhibition, seminar and activity carrying the Society's name. We treat each event as a full project: feasibility, programme design, sponsor and exhibitor acquisition, on-site operations, then a closing report with impact indicators.",
                  })}
                </p>
                <p>
                  {p({
                    ar: "نستهدف بخدماتنا أربع فئات رئيسية: رعاة الفعاليات، والحضور والزوار، والشركات العارضة، وشركات التنظيم والموردين — ولكل فئة مسار واضح للتعامل معنا وباقة خدمات مخصصة.",
                    en: "Our services target four audiences: event sponsors, attendees and visitors, exhibiting companies, and organising firms and suppliers — each with a clear engagement path and a dedicated service package.",
                  })}
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: Eye,
                  title: p({ ar: "رؤيتنا", en: "Our vision" }),
                  text: p({
                    ar: "أن تكون البحرين مركزاً خليجياً معتمداً للمؤتمرات والمعارض الهندسية المتخصصة.",
                    en: "For Bahrain to be a recognised Gulf hub for specialised engineering conferences and exhibitions.",
                  }),
                },
                {
                  icon: Target,
                  title: p({ ar: "رسالتنا", en: "Our mission" }),
                  text: p({
                    ar: "تنظيم فعاليات هندسية ذات أثر قابل للقياس تخدم المهنة والاقتصاد الوطني وتربط المهندس بسوق العمل.",
                    en: "Organising engineering events with measurable impact that serve the profession, the national economy and connect engineers with the market.",
                  }),
                },
                {
                  icon: ShieldCheck,
                  title: p({ ar: "قيمنا", en: "Our values" }),
                  text: p({
                    ar: "المهنية، الشفافية مع الرعاة والشركاء، الجودة في التنفيذ، والاستدامة في اختيار الموضوعات والموردين.",
                    en: "Professionalism, transparency with sponsors and partners, quality in delivery, and sustainability in topics and suppliers.",
                  }),
                },
              ].map((c) => (
                <div key={c.title} className="surface-card p-6">
                  <span className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                    <c.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band-blue relative overflow-hidden py-24">
        <div className="dot-grid-light absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-primary-foreground">
            <SectionHeading
              eyebrow={p({ ar: "الأهداف", en: "Goals" })}
              title={p({ ar: "أهدافنا الاستراتيجية", en: "Our strategic goals" })}
              description={p({
                ar: "أربعة أهداف تحكم اختيارنا للفعاليات وطريقة تنفيذها وقياس نتائجها.",
                en: "Four goals that govern how we choose, deliver and measure our events.",
              })}
            />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {goals.map((g, i) => (
              <div key={g.title.en} className="glass-panel p-7">
                <span className="font-display text-4xl font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-primary-foreground">{p(g.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{p(g.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band-light relative overflow-hidden py-24">
        <div className="dot-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={p({ ar: "الخدمات", en: "Services" })}
            title={p({ ar: "ما نقدمه بالتفصيل", en: "What we deliver" })}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.icon} className="surface-card p-6">
                <h3 className="text-base font-bold text-primary">{p(s.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p(s.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-gradient">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <p className="font-display text-4xl font-bold text-accent">{s.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/75">{p(s.label)}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
