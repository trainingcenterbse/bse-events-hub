import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import heroConference from "@/assets/hero-conference.jpg";
import heroExhibition from "@/assets/hero-exhibition.jpg";
import heroEvents from "@/assets/hero-events.jpg";
import { Button } from "@/components/ui/button";
import { useI18n, type Localized } from "@/lib/i18n";

type Slide = {
  image: string;
  eyebrow: Localized;
  title: Localized;
  text: Localized;
  to: "/conferences" | "/exhibitions" | "/events";
  cta: Localized;
};

const slides: Slide[] = [
  {
    image: heroConference,
    eyebrow: { ar: "المؤتمرات", en: "Conferences" },
    title: {
      ar: "مؤتمرات هندسية بمعايير دولية في قلب البحرين",
      en: "Engineering conferences of international standard, in the heart of Bahrain",
    },
    text: {
      ar: "من الملتقى الهندسي الخليجي إلى مؤتمرات الصيانة والتآكل والتكنولوجيا — نبني البرنامج العلمي وننفّذه من الفكرة حتى التقرير الختامي.",
      en: "From the Gulf Engineering Forum to maintenance, corrosion and technology conferences — we build and deliver the technical programme end to end.",
    },
    to: "/conferences",
    cta: { ar: "تصفح المؤتمرات", en: "Browse conferences" },
  },
  {
    image: heroExhibition,
    eyebrow: { ar: "المعارض", en: "Exhibitions" },
    title: {
      ar: "معارض متخصصة تملكها وتنظمها جمعية المهندسين",
      en: "Specialised exhibitions owned and organised by BSE",
    },
    text: {
      ar: "المعرض الدولي للدراسات الأكاديمية والهندسية ومعرض كروجن — منصتان تجمعان العارضين والزوار وصنّاع القرار في قطاعات التعليم والطاقة.",
      en: "The International Exhibition for Academic & Engineering Studies and CROGEN — two platforms uniting exhibitors, visitors and decision-makers.",
    },
    to: "/exhibitions",
    cta: { ar: "استعرض المعارض", en: "Explore exhibitions" },
  },
  {
    image: heroEvents,
    eyebrow: { ar: "الفعاليات والأنشطة", en: "Events & activities" },
    title: {
      ar: "أكثر من 120 فعالية وندوة ونشاط سنوياً",
      en: "More than 120 events, seminars and activities every year",
    },
    text: {
      ar: "يوم المهندس البحريني، تكريم المتطوعين، الندوات الفنية، والزيارات الميدانية — برنامج متصل يخدم المهنة والمجتمع الهندسي.",
      en: "Bahraini Engineer Day, volunteer recognition, technical seminars and site visits — a continuous programme serving the profession.",
    },
    to: "/events",
    cta: { ar: "شاهد الفعاليات", en: "See events" },
  },
];

export function HeroSlider() {
  const { p, dir, t } = useI18n();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => window.clearInterval(id);
  }, []);

  const go = (delta: number) => setIndex((i) => (i + delta + slides.length) % slides.length);
  const Prev = dir === "rtl" ? ArrowRight : ArrowLeft;
  const Next = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[600px] overflow-hidden bg-primary-deep">
      {slides.map((slide, i) => (
        <img
          key={slide.to}
          src={slide.image}
          alt=""
          width={1920}
          height={1088}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="hero-overlay absolute inset-0" />

      <div className="relative mx-auto flex min-h-[600px] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6">
        <div key={index} className="fade-up max-w-3xl">
          <p className="eyebrow">{p(slides[index].eyebrow)}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            {p(slides[index].title)}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            {p(slides[index].text)}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to={slides[index].to}>{p(slides[index].cta)}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#contact">{t("becomeSponsor")}</a>
            </Button>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-4">
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.to}
                type="button"
                aria-label={p(s.eyebrow)}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-10 bg-accent" : "w-5 bg-primary-foreground/35"
                }`}
              />
            ))}
          </div>
          <div className="ms-auto flex gap-2">
            <button
              type="button"
              aria-label="previous"
              onClick={() => go(-1)}
              className="grid size-10 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Prev className="size-4" />
            </button>
            <button
              type="button"
              aria-label="next"
              onClick={() => go(1)}
              className="grid size-10 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Next className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
