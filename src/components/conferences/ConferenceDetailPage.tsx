import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, CalendarDays, Clock3, Download, MapPin, Users } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnchorNav } from "@/components/bse/AnchorNav";
import { ClosingCta } from "@/components/bse/ClosingCta";
import { DetailHero } from "@/components/bse/DetailHero";
import { DetailSidebar } from "@/components/bse/DetailSidebar";
import { MapPreview } from "@/components/bse/MapPreview";
import { MetaItem } from "@/components/bse/MetaItem";
import { ScheduleTable } from "@/components/bse/ScheduleTable";
import { TypographyH2, TypographyH3, TypographyP } from "@/components/bse/Typography";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Conference } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function ConferenceDetailPage({ conference, cover }: { conference: Conference; cover: string }) {
  const { p, t } = useI18n();
  const scheduleDays = conference.schedule;
  const statusLabel = conference.status === "upcoming" ? t("upcoming") : t("past");

  return (
    <>
      <DetailHero
        image={cover}
        imageAlt={`${p(conference.title)} — غلاف المؤتمر`}
        eyebrow="مؤتمر ومعرض متخصص"
        breadcrumb={`${t("navConferences")} / ${p(conference.date)}`}
        title={p(conference.title)}
        description={p(conference.summary)}
        status={<Badge className="rounded-full border-bse-gold/60 bg-bse-gold/15 text-bse-gold-soft">{statusLabel}</Badge>}
        facts={
          <>
            <span className="inline-flex items-center gap-2"><CalendarDays className="size-4 text-bse-gold-soft" aria-hidden="true" />{p(conference.date)}</span>
            <span className="inline-flex items-center gap-2"><Clock3 className="size-4 text-bse-gold-soft" aria-hidden="true" />{scheduleDays.length} أيام</span>
            <span className="inline-flex items-center gap-2"><Users className="size-4 text-bse-gold-soft" aria-hidden="true" />{conference.stats[2]?.value ?? "—"} حاضر متوقع</span>
          </>
        }
        primaryAction={
          conference.brochureUrl ? (
            <Button asChild size="lg" className="gap-2 rounded-bse-md bg-bse-gold text-bse-indigo-deep hover:bg-bse-gold-soft">
              <a href={conference.brochureUrl} target="_blank" rel="noreferrer"><Download className="size-4" aria-hidden="true" />عرض البروشور</a>
            </Button>
          ) : (
            <Button asChild size="lg" className="rounded-bse-md bg-bse-gold text-bse-indigo-deep hover:bg-bse-gold-soft"><a href="#contact">اطلب البروشور</a></Button>
          )
        }
        secondaryAction={<Button asChild size="lg" variant="outline" className="gap-2 rounded-bse-md border-white/55 bg-white/5 text-white hover:bg-white/10 hover:text-white"><a href="#contact">سجّل اهتمامك<ArrowUpLeft className="size-4" aria-hidden="true" /></a></Button>}
        panel={
          <div className="hidden min-h-[250px] flex-col justify-between border border-white/15 bg-bse-indigo-deep/85 p-7 text-white shadow-xl lg:flex">
            <div className="flex items-center justify-between border-b border-white/15 pb-5"><span className="font-sans text-xs font-bold tracking-[0.16em] text-bse-gold-soft">BSE / {conference.cover.toUpperCase()}</span><span className="size-2 rounded-full bg-bse-gold" aria-hidden="true" /></div>
            <div className="mt-8"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">GULF ENGINEERING FORUM</p><p className="bse-display mt-2 max-w-[230px] text-xl leading-snug text-white">منصة للقرارات الهندسية المؤثرة</p></div>
            <div className="mt-10 flex items-end justify-between"><span className="font-sans text-6xl font-semibold leading-none tracking-[-0.06em] text-bse-gold">{p(conference.edition).replace("النسخة ", "")}</span><span className="max-w-[130px] text-left text-xs leading-relaxed text-white/60">{p(conference.venue)}</span></div>
          </div>
        }
      />

      <AnchorNav items={[{ href: "#overview", label: "نظرة عامة" }, { href: "#tracks", label: "المسارات الفنية" }, { href: "#program", label: "البرنامج" }, { href: "#speakers", label: "المتحدثون" }, { href: "#location", label: "الموقع" }]} />

      <section id="overview" className="bse-orbital-light scroll-mt-28 bg-bse-canvas-soft py-16 sm:py-20">
        <div className="relative z-10 mx-auto flex max-w-bse-content flex-col gap-12 px-6 lg:flex-row">
          <div className="order-1 min-w-0 flex-1 lg:order-2">
            <p className="text-xs font-bold tracking-[0.16em] text-bse-gold">نظرة عامة</p>
            <TypographyH2 className="mt-3">عن المؤتمر</TypographyH2>
            <div className="mt-5 h-1 w-16 bg-bse-gold" aria-hidden="true" />
            <TypographyP className="mt-7 max-w-bse-reading text-base leading-[2]">{p(conference.description)}</TypographyP>

            <div className="mt-12 grid grid-cols-2 border-y border-bse-hairline sm:grid-cols-4">
              {conference.stats.map((stat) => (
                <div key={`${stat.value}-${stat.label.en}`} className="border-s border-bse-hairline px-4 py-5 first:border-s-0 sm:px-6"><p className="bse-display text-3xl text-bse-indigo">{stat.value}</p><p className="mt-2 text-xs leading-relaxed text-bse-ink-muted">{p(stat.label)}</p></div>
              ))}
            </div>

            <section id="tracks" className="mt-14 scroll-mt-28">
              <div className="flex items-end justify-between gap-5 border-b border-bse-indigo pb-4"><div><p className="text-xs font-bold tracking-[0.16em] text-bse-gold">محتوى المؤتمر</p><TypographyH3 className="mt-2">المسارات الفنية</TypographyH3></div><span className="hidden text-xs font-semibold text-bse-ink-faint sm:block">{conference.tracks.length} مسارات</span></div>
              <div className="divide-y divide-bse-hairline">
                {conference.tracks.map((track, index) => (
                  <div key={track.title.en} className="group grid gap-4 py-5 sm:grid-cols-[72px_minmax(190px,.9fr)_minmax(0,1.4fr)_24px] sm:items-center"><span className="font-sans text-3xl font-semibold text-bse-gold">{String(index + 1).padStart(2, "0")}</span><h3 className="bse-display text-lg text-bse-indigo">{p(track.title)}</h3><p className="text-sm leading-[1.8] text-bse-ink-muted">{p(track.description)}</p><ArrowUpLeft className="size-4 text-bse-blue transition-transform group-hover:-translate-y-1" aria-hidden="true" /></div>
                ))}
              </div>
            </section>

            <div className="mt-10 flex flex-col gap-4 border-e-4 border-bse-gold bg-white p-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-bold text-bse-gold">الجهات المنظمة</p><p className="mt-1 text-sm font-semibold text-bse-indigo">{conference.organisers.map(p).join(" · ")}</p></div><span className="inline-flex items-center gap-2 text-xs font-semibold text-bse-ink-muted"><Users className="size-4 text-bse-gold" aria-hidden="true" />شركاء مهنيون من المنطقة</span></div>
          </div>

          <DetailSidebar>
            <Card className="rounded-bse-md border-bse-hairline bg-white p-6 shadow-sm"><h2 className="bse-display text-xl text-bse-indigo">معلومات أساسية</h2><div className="mt-5 space-y-5"><MetaItem icon={CalendarDays} label="التاريخ" value={p(conference.date)} /><MetaItem icon={MapPin} label="المكان" value={p(conference.venue)} /><MetaItem icon={Clock3} label="المدة" value={`${scheduleDays.length} أيام برنامج`} /></div><div className="mt-5 border-t border-bse-hairline pt-5"><p className="text-xs text-bse-ink-muted">الجهات المنظمة</p><div className="mt-2 flex flex-wrap gap-2">{conference.organisers.map((organiser) => <Badge key={organiser.en} variant="outline" className="text-xs">{p(organiser)}</Badge>)}</div></div></Card>
            <Card className="rounded-bse-md border-bse-violet bg-bse-violet/35 p-6 shadow-none"><p className="text-xs font-bold tracking-[0.14em] text-bse-indigo">وثيقة المؤتمر</p><h2 className="bse-display mt-3 text-2xl text-bse-indigo">البروشور الرسمي</h2><p className="mt-3 text-sm leading-relaxed text-bse-ink-muted">التفاصيل الكاملة للبرنامج، المسارات، ومشاركة الجهات في النسخة الحالية.</p>{conference.brochureUrl && <Button asChild className="mt-5 w-full gap-2 rounded-bse-md bg-bse-indigo text-white hover:bg-bse-indigo-deep"><a href={conference.brochureUrl} target="_blank" rel="noreferrer"><Download className="size-4" aria-hidden="true" />فتح / تحميل البروشور</a></Button>}</Card>
            <MapPreview venue={p(conference.venue)} mapUrl={conference.mapUrl} label="موقع المؤتمر" />
          </DetailSidebar>
        </div>
      </section>

      <section id="program" className="scroll-mt-28 bse-indigo-band bse-blueprint-light relative overflow-hidden py-16 sm:py-20">
        <div className="relative mx-auto max-w-bse-content px-6">
          <div className="flex flex-col gap-6 border-b border-white/15 pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold tracking-[0.16em] text-bse-gold-soft">البرنامج العلمي</p><TypographyH2 className="mt-3 text-white">جدول المؤتمر</TypographyH2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">ثلاثة أيام من الجلسات العامة، الأوراق الفنية، وورش العمل التطبيقية.</p></div><span className="text-sm text-white/55">{p(conference.edition)} · {p(conference.venue)}</span></div>
          <Tabs defaultValue="day-0" className="mt-8" dir="rtl">
            <TabsList aria-label="أيام المؤتمر" className="h-auto gap-2 bg-transparent p-0">{scheduleDays.map((day, index) => <TabsTrigger key={day.day.en} value={`day-${index}`} className="min-h-11 rounded-bse-md border border-white/25 px-4 text-sm text-white data-[state=active]:border-bse-gold data-[state=active]:bg-bse-gold data-[state=active]:text-bse-indigo-deep">{p(day.day)}</TabsTrigger>)}</TabsList>
            {scheduleDays.map((day, index) => <TabsContent key={day.day.en} value={`day-${index}`} className="mt-8"><div className="mb-4 flex flex-wrap items-baseline justify-between gap-3"><h3 className="bse-display text-2xl text-white">{p(day.day)}</h3><p className="text-sm text-white/60">{p(day.date)}</p></div><ScheduleTable rows={day.sessions.map((session) => ({ time: session.time, title: session.title, ...(session.speaker ? { meta: p(session.speaker) } : {}) }))} /></TabsContent>)}
          </Tabs>
        </div>
      </section>

      <section id="speakers" className="bse-orbital-light scroll-mt-28 bg-white py-16 sm:py-20">
        <div className="relative z-10 mx-auto max-w-bse-content px-6">
          <div className="flex flex-col gap-4 border-b border-bse-hairline pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold tracking-[0.16em] text-bse-gold">المشاركون</p><TypographyH2 className="mt-3">متحدثو المؤتمر</TypographyH2></div><p className="text-sm text-bse-ink-muted">خبرات من الجهات المنظمة والقطاع الهندسي</p></div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">{conference.speakers.map((speaker, index) => <Card key={`${speaker.name.en}-${index}`} className="rounded-bse-md border-bse-hairline bg-white p-5 shadow-sm"><div className="flex items-start gap-4"><Avatar className={`size-14 ${index === 0 ? "bg-bse-blue" : index === 1 ? "bg-bse-teal" : "bg-bse-gold"}`}><AvatarFallback className={index === 2 ? "bg-bse-gold text-bse-indigo" : "bg-transparent text-bse-gold-soft"}>{p(speaker.name).charAt(0)}</AvatarFallback></Avatar><div><h3 className="bse-display text-base leading-relaxed text-bse-indigo">{p(speaker.name)}</h3><p className="mt-1 text-sm font-semibold text-bse-gold">{p(speaker.role)}</p><p className="mt-1 text-xs text-bse-ink-muted">{p(speaker.org)}</p></div></div></Card>)}</div>
        </div>
      </section>

      <section id="location" className="bse-orbital-light scroll-mt-28 border-t border-bse-hairline bg-bse-canvas-soft py-14 sm:py-16">
        <div className="relative z-10 mx-auto grid max-w-bse-content gap-8 px-6 lg:grid-cols-2"><div><p className="text-xs font-bold tracking-[0.16em] text-bse-gold">الوصول والتنظيم</p><TypographyH2 className="mt-3">الموقع والمنظمون</TypographyH2><p className="mt-4 max-w-xl text-sm leading-[1.9] text-bse-ink-muted">{p(conference.venueNote)}</p></div><div className="grid gap-4 sm:grid-cols-2">{conference.organisers.map((organiser, index) => <div key={organiser.en} className="border-e-2 border-bse-gold bg-white p-5"><p className="text-xs text-bse-ink-faint">{index === 0 ? "الجهة المستضيفة" : "الشريك المهني"}</p><p className="bse-display mt-2 text-base text-bse-indigo">{p(organiser)}</p></div>)}</div></div>
      </section>

      <ClosingCta eyebrow="شراكة استراتيجية" title="اطلب ملف الشراكة لهذا المؤتمر" description={`تعرّف على فرص الظهور والباقات ومسارات الشراكة في ${p(conference.title)}.`} action={<Button asChild size="lg" className="gap-2 rounded-bse-md bg-white text-bse-indigo hover:bg-bse-gold-soft"><a href="mailto:events@bse.bh">تواصل مع فريق الشراكات<ArrowUpLeft className="size-4" aria-hidden="true" /></a></Button>} />
    </>
  );
}
