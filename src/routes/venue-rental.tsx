import { createFileRoute } from "@tanstack/react-router";
import { Building2, Mail, MapPin, Users, Calendar, Clock, CheckCircle2, Wifi, Projector, Coffee, Mic, Video, Shield, Sparkles } from "lucide-react";

import heroConference from "@/assets/hero-conference.jpg";
import heroEvents from "@/assets/hero-events.jpg";
import { PageHero, SectionHeading } from "@/components/Sections";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/lib/i18n";

/* 
 * Developed by Ultra Cube Team
 * www.ucubetech.com
 * https://github.com/ultra-cube
 */

export const Route = createFileRoute("/venue-rental")({
  head: () => ({
    meta: [
      { title: "تأجير القاعات | BSE Event" },
      {
        name: "description",
        content:
          "استأجر قاعات جمعية المهندسين البحرينية لفعالياتك: قاعة المهندس هشام الشهابي، قاعات التدريب، وغرفة الاجتماعات.",
      },
      { property: "og:title", content: "تأجير القاعات | BSE Event" },
      {
        property: "og:description",
        content: "قاعات احترافية متاحة للتأجير في جمعية المهندسين البحرينية.",
      },
    ],
  }),
  component: VenueRental,
});

function VenueRental() {
  const { p, t } = useI18n();

  const venues = [
    {
      id: "hisham-al-shahabi",
      name: {
        ar: "قاعة المهندس هشام الشهابي",
        en: "Engineer Hisham Al-Shahabi Hall",
      },
      tag: {
        ar: "القاعة الرئيسية",
        en: "Main Hall",
      },
      description: {
        ar: "قاعة كبرى متعددة الاستخدامات مناسبة للمؤتمرات والندوات والفعاليات الكبرى، مجهزة بأحدث أنظمة الصوت والصورة والإضاءة الاحترافية.",
        en: "A versatile main hall suitable for conferences, seminars, and major events, equipped with state-of-the-art audio-visual systems and professional lighting.",
      },
      capacity: { ar: "100 شخص", en: "100 people" },
      area: { ar: "300 م²", en: "300 m²" },
      features: [
        { icon: Mic, ar: "نظام صوتي احترافي", en: "Professional audio system" },
        { icon: Projector, ar: "جهاز عرض عالي الدقة", en: "High-definition projector" },
        { icon: Video, ar: "شاشات LED كبيرة", en: "Large LED screens" },
        { icon: Wifi, ar: "إنترنت عالي السرعة", en: "High-speed internet" },
        { icon: Shield, ar: "تكييف مركزي", en: "Central air conditioning" },
        { icon: Sparkles, ar: "إضاءة احترافية متعددة", en: "Professional multi-lighting" },
      ],
      suitableFor: [
        { ar: "المؤتمرات الكبرى", en: "Major conferences" },
        { ar: "الندوات والورش", en: "Seminars & workshops" },
        { ar: "حفلات التخرج", en: "Graduation ceremonies" },
        { ar: "الفعاليات الرسمية", en: "Official events" },
      ],
      image: heroConference,
      icon: Building2,
    },
    {
      id: "training-halls",
      name: {
        ar: "قاعات التدريب",
        en: "Training Halls",
      },
      tag: {
        ar: "قاعتان للتدريب",
        en: "Two Training Halls",
      },
      description: {
        ar: "قاعتان مخصصتان للتدريب وورش العمل، مثاليتان للندوات التعليمية والتدريبات الفنية بمساحات مريحة وتجهيزات متكاملة.",
        en: "Two halls dedicated to training and workshops, ideal for educational seminars and technical trainings with comfortable spaces and complete equipment.",
      },
      capacity: { ar: "25 شخص لكل قاعة", en: "25 people per hall" },
      area: { ar: "60 م² لكل قاعة", en: "60 m² per hall" },
      features: [
        { icon: Projector, ar: "جهاز عرض تفاعلي", en: "Interactive projector" },
        { icon: Wifi, ar: "إنترنت سريع", en: "Fast internet" },
        { icon: Shield, ar: "تكييف منفصل", en: "Individual air conditioning" },
        { icon: Coffee, ar: "خدمات القهوة والشاي", en: "Coffee & tea service" },
        { icon: Sparkles, ar: "أثاث تدريبي مريح", en: "Comfortable training furniture" },
      ],
      suitableFor: [
        { ar: "ورش العمل", en: "Workshops" },
        { ar: "الدورات التدريبية", en: "Training courses" },
        { ar: "الندوات التعليمية", en: "Educational seminars" },
        { ar: "اجتماعات الفرق", en: "Team meetings" },
      ],
      image: heroEvents,
      icon: Users,
    },
    {
      id: "meeting-room",
      name: {
        ar: "غرفة الاجتماعات",
        en: "Meeting Room",
      },
      tag: {
        ar: "غرفة خاصة",
        en: "Private Room",
      },
      description: {
        ar: "غرفة اجتماعات احترافية للاجتماعات الصغيرة واللجان، توفر بيئة هادئة ومريحة للنقاشات واتخاذ القرارات.",
        en: "A professional meeting room for small meetings and committees, providing a quiet and comfortable environment for discussions and decision-making.",
      },
      capacity: { ar: "15 شخص", en: "15 people" },
      area: { ar: "35 م²", en: "35 m²" },
      features: [
        { icon: Video, ar: "شاشة عرض", en: "Display screen" },
        { icon: Mic, ar: "نظام مؤتمرات", en: "Conference system" },
        { icon: Wifi, ar: "إنترنت", en: "Internet" },
        { icon: Shield, ar: "خصوصية تامة", en: "Complete privacy" },
        { icon: Coffee, ar: "خدمات القهوة والشاي", en: "Coffee & tea service" },
      ],
      suitableFor: [
        { ar: "اجتماعات الإدارة", en: "Management meetings" },
        { ar: "اجتماعات اللجان", en: "Committee meetings" },
        { ar: "المقابلات", en: "Interviews" },
        { ar: "الاجتماعات الخاصة", en: "Private meetings" },
      ],
      image: heroConference,
      icon: Calendar,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={p({ ar: "خدماتنا", en: "Our Services" })}
        title={p({ ar: "تأجير القاعات", en: "Venue Rental" })}
        description={p({
          ar: "قاعات احترافية متاحة للتأجير في جمعية المهندسين البحرينية، مجهزة بأحدث التقنيات لضمان نجاح فعالياتكم.",
          en: "Professional halls available for rent at the Bahrain Society of Engineers, equipped with the latest technologies to ensure the success of your events.",
        })}
        image={heroConference}
      />

      <section className="band-light relative overflow-hidden py-24">
        <div className="dot-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={p({ ar: "القاعات المتاحة", en: "Available Venues" })}
            title={p({
              ar: "اختر القاعة المناسبة لفعاليتك",
              en: "Choose the right venue for your event",
            })}
          />

          <div className="mt-16 space-y-12">
            {venues.map((venue, index) => {
              const Icon = venue.icon;
              const isEven = index % 2 === 1;
              return (
                <Reveal key={venue.id} delay={index * 0.1}>
                  <div className={`grid gap-8 lg:gap-12 ${isEven ? 'lg:grid-cols-[1fr_1.2fr]' : 'lg:grid-cols-[1.2fr_1fr]'}`}>
                    <div className={`relative overflow-hidden rounded-3xl ${isEven ? 'lg:order-2' : ''}`}>
                      <img
                        src={venue.image}
                        alt={p(venue.name)}
                        className="h-64 w-full object-cover lg:h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <Badge className="mb-3 bg-primary text-primary-foreground">
                          {p(venue.tag)}
                        </Badge>
                      </div>
                    </div>

                    <div className={`flex flex-col justify-center ${isEven ? 'lg:order-1' : ''}`}>
                      <div className="mb-6 flex items-center gap-3">
                        <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="size-7" />
                        </div>
                        <Badge variant="outline" className="border-primary/30">
                          {p(venue.tag)}
                        </Badge>
                      </div>

                      <h3 className="mb-4 font-display text-3xl font-bold text-primary lg:text-4xl">
                        {p(venue.name)}
                      </h3>

                      <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                        {p(venue.description)}
                      </p>

                      <div className="mb-8 grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 rounded-xl bg-card border-2 border-border p-4">
                          <Users className="size-5 text-primary" />
                          <div>
                            <p className="text-xs text-muted-foreground">
                              {p({ ar: "السعة", en: "Capacity" })}
                            </p>
                            <p className="font-bold text-primary">{p(venue.capacity)}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl bg-card border-2 border-border p-4">
                          <MapPin className="size-5 text-primary" />
                          <div>
                            <p className="text-xs text-muted-foreground">
                              {p({ ar: "المساحة", en: "Area" })}
                            </p>
                            <p className="font-bold text-primary">{p(venue.area)}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <p className="mb-4 text-sm font-semibold text-primary">
                          {p({ ar: "المميزات:", en: "Features:" })}
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {venue.features.map((feature, idx) => {
                            const FeatureIcon = feature.icon;
                            return (
                              <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <FeatureIcon className="size-4 text-accent shrink-0" />
                                {p(feature)}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="mb-8">
                        <p className="mb-4 text-sm font-semibold text-primary">
                          {p({ ar: "مناسبة لـ:", en: "Suitable for:" })}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {venue.suitableFor.map((item, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {p(item)}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button
                        asChild
                        size="lg"
                        className="w-full gap-2"
                      >
                        <a href="mailto:events@bse.bh?subject=Venue Booking Inquiry - {p(venue.name)}">
                          <Mail className="size-5" />
                          {p({ ar: "تواصل للحجز", en: "Contact for Booking" })}
                        </a>
                      </Button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary-deep py-24 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-primary-foreground/10">
            <Mail className="size-10" />
          </div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {p({
              ar: "هل ترغب في حجز قاعة؟",
              en: "Interested in booking a venue?",
            })}
          </h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/70">
            {p({
              ar: "تواصل معنا عبر البريد الإلكتروني للاستفسار عن التوافر والتفاصيل. فريقنا سيساعدك في اختيار القاعة المناسبة لفعاليتك.",
              en: "Contact us via email to inquire about availability and details. Our team will help you choose the right venue for your event.",
            })}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              <a href="mailto:events@bse.bh">
                <Mail className="size-5" />
                events@bse.bh
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="tel:+97317531133">
                <MapPin className="size-5" />
                {p({ ar: "اتصل بنا", en: "Call Us" })}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow={p({ ar: "معلومات إضافية", en: "Additional Information" })}
            title={p({
              ar: "ما تحتاج معرفته قبل الحجز",
              en: "What you need to know before booking",
            })}
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="size-6" />
              </div>
              <div>
                <h4 className="mb-2 font-bold text-primary">
                  {p({ ar: "أوقات العمل", en: "Working Hours" })}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {p({
                    ar: "متاحة من الساعة 8 صباحاً حتى 10 مساءً أيام الأسبوع",
                    en: "Available from 8 AM to 10 PM on weekdays",
                  })}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="size-6" />
              </div>
              <div>
                <h4 className="mb-2 font-bold text-primary">
                  {p({ ar: "الموقع", en: "Location" })}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {p({
                    ar: "مقر جمعية المهندسين البحرينية، الجفير",
                    en: "BSE Headquarters, Juffair",
                  })}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Users className="size-6" />
              </div>
              <div>
                <h4 className="mb-2 font-bold text-primary">
                  {p({ ar: "التجهيزات", en: "Equipment" })}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {p({
                    ar: "جميع القاعات مجهزة بالتقنيات الحديثة",
                    en: "All halls are equipped with modern technology",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
