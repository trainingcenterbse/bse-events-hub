import { Link } from "@tanstack/react-router";
import { ArrowUpLeft, CalendarDays, Check, Clock3, MapPin, Tag, Users } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnchorNav } from "@/components/bse/AnchorNav";
import { ClosingCta } from "@/components/bse/ClosingCta";
import { DetailHero } from "@/components/bse/DetailHero";
import { DetailSidebar } from "@/components/bse/DetailSidebar";
import { MapPreview } from "@/components/bse/MapPreview";
import { MetaItem } from "@/components/bse/MetaItem";
import { ScheduleTable } from "@/components/bse/ScheduleTable";
import { TypographyH2, TypographyP } from "@/components/bse/Typography";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { EventItem } from "@/data/content";
import { useI18n } from "@/lib/i18n";

export function EventDetailPage({ event, cover, relatedEvents }: { event: EventItem; cover: string; relatedEvents: EventItem[] }) {
  const { p, t } = useI18n();
  const statusLabel = event.status === "upcoming" ? t("upcoming") : t("past");
  const headline = event.slug === "bahraini-engineer-day" ? "تكريم المهنة التي تبني المملكة" : p(event.title);
  const requirements = [
    { ar: "تأكيد الحضور أو إبراز بطاقة العضوية عند الوصول", en: "Confirm attendance or show your membership card on arrival" },
    { ar: "الوصول قبل الموعد لاستكمال إجراءات التسجيل", en: "Arrive early to complete registration" },
    { ar: "التواصل مع فريق التنظيم عند الحاجة إلى دعم إضافي", en: "Contact the organising team when additional support is needed" },
  ];

  return (
    <>
      <DetailHero
        mode="split"
        image={cover}
        imageAlt={`${p(event.title)} — BSE Event`}
        eyebrow="BSE SIGNATURE EVENT"
        breadcrumb={`${t("navEvents")} / ${p(event.category)}`}
        title={p(event.title)}
        description={p(event.summary)}
        status={<Badge className="rounded-full border-bse-gold bg-bse-gold text-bse-indigo-deep">{statusLabel}</Badge>}
        facts={<><span className="inline-flex items-center gap-2"><CalendarDays className="size-4 text-bse-gold" aria-hidden="true" />{p(event.date)}</span><span className="inline-flex items-center gap-2"><Users className="size-4 text-bse-gold" aria-hidden="true" />{event.stats[0]?.value ?? "—"} حاضر</span><span className="inline-flex items-center gap-2"><Tag className="size-4 text-bse-gold" aria-hidden="true" />{p(event.category)}</span></>}
        primaryAction={<Button asChild size="lg" className="gap-2 rounded-bse-md bg-bse-gold text-bse-indigo-deep hover:bg-bse-gold-soft"><a href="#rsvp">سجّل اهتمامك<ArrowUpLeft className="size-4" aria-hidden="true" /></a></Button>}
        secondaryAction={<Button asChild size="lg" variant="outline" className="gap-2 rounded-bse-md border-white/55 bg-white/5 text-white hover:bg-white/10 hover:text-white"><a href="#location"><MapPin className="size-4 text-bse-gold" aria-hidden="true" />عرض الموقع</a></Button>}
      />

      <AnchorNav items={[{ href: "#about", label: "عن الفعالية" }, { href: "#highlights", label: "أبرز ما يميزها" }, { href: "#schedule", label: "البرنامج" }, { href: "#location", label: "الموقع" }]} />

      <section className="bse-orbital-light bg-bse-canvas-soft py-16 sm:py-20">
        <div className="relative z-10 mx-auto flex max-w-bse-content flex-col gap-12 px-6 lg:flex-row">
          <div className="order-1 min-w-0 flex-1 lg:order-2">
            <section id="about" className="scroll-mt-28"><p className="text-xs font-bold tracking-[0.16em] text-bse-gold">01 / عن الفعالية</p><TypographyH2 className="mt-3">{headline}</TypographyH2><div className="mt-5 h-1 w-16 bg-bse-gold" aria-hidden="true" /><TypographyP className="mt-7 max-w-bse-reading text-base leading-[2]">{p(event.description)}</TypographyP></section>
            <div className="mt-10 grid grid-cols-3 gap-3 border-y border-bse-hairline py-6">{event.stats.map((stat) => <div key={`${stat.value}-${stat.label.en}`} className="border-s border-bse-hairline pe-4 first:border-0"><p className="bse-display text-3xl text-bse-indigo">{stat.value}</p><p className="mt-1 text-xs text-bse-ink-muted">{p(stat.label)}</p></div>)}</div>
            <section id="highlights" className="mt-14 scroll-mt-28"><p className="text-xs font-bold tracking-[0.16em] text-bse-gold">02 / أبرز ما يميزها</p><h2 className="bse-display mt-3 text-2xl text-bse-indigo sm:text-3xl">برنامج يضع الإنجاز في الواجهة</h2><div className="mt-7 grid gap-3 sm:grid-cols-2">{event.highlights.map((highlight) => <div key={highlight.en} className="flex gap-3 border border-bse-hairline bg-white p-4"><span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-bse-gold-soft"><Check className="size-3.5 text-bse-indigo" aria-hidden="true" /></span><p className="text-sm leading-[1.8] text-bse-ink-muted">{p(highlight)}</p></div>)}</div></section>
            <div className="mt-10 flex flex-col gap-4 border-e-4 border-bse-gold bg-white p-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-bold text-bse-gold">الجمهور المستهدف</p><p className="mt-1 text-sm font-semibold text-bse-indigo">{p(event.audience)}</p></div><span className="inline-flex items-center gap-2 text-xs font-semibold text-bse-ink-muted"><Users className="size-4 text-bse-gold" aria-hidden="true" />دعوة مفتوحة للقطاع الهندسي</span></div>
          </div>

          <DetailSidebar>
            <Card className="rounded-bse-md border-bse-hairline bg-white p-6 shadow-sm"><div className="flex items-center justify-between border-b border-bse-hairline pb-4"><h2 className="bse-display text-xl text-bse-indigo">تفاصيل الفعالية</h2><Badge className="rounded-full bg-bse-gold-soft text-bse-indigo">BSE Event</Badge></div><div className="mt-5 space-y-5"><MetaItem icon={CalendarDays} label="التاريخ" value={p(event.date)} /><MetaItem icon={MapPin} label="المكان" value={p(event.venue)} /><MetaItem icon={Tag} label="التصنيف" value={p(event.category)} /><MetaItem icon={Clock3} label="الحالة" value={statusLabel} /></div></Card>
            <Card id="rsvp" className="scroll-mt-28 rounded-bse-md border-bse-violet bg-bse-violet/35 p-6 shadow-none"><p className="text-xs font-bold tracking-[0.14em] text-bse-indigo">RSVP / INTEREST</p><h2 className="bse-display mt-3 text-2xl text-bse-indigo">خطط لحضور فريقك</h2><p className="mt-3 text-sm leading-relaxed text-bse-ink-muted">اترك بياناتك ليصلك موعد التسجيل الرسمي وتفاصيل المشاركة والرعاية.</p><Button asChild className="mt-5 w-full rounded-bse-md bg-bse-indigo text-white hover:bg-bse-indigo-deep"><a href="mailto:events@bse.bh">سجّل اهتمامك</a></Button></Card>
            <MapPreview venue={p(event.venue)} mapUrl="https://maps.google.com/?q=Kingdom+of+Bahrain" label="الموقع" />
          </DetailSidebar>
        </div>
      </section>

      <section id="schedule" className="scroll-mt-28 bse-indigo-band bse-blueprint-light relative overflow-hidden py-16 sm:py-20">
        <div className="relative mx-auto max-w-bse-content px-6">
          <div className="flex flex-col gap-6 border-b border-white/15 pb-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold tracking-[0.16em] text-bse-gold-soft">03 / البرنامج</p><TypographyH2 className="mt-3 text-white">جدول الفعالية</TypographyH2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">مسار واضح من الاستقبال إلى التكريم واللقاءات المهنية.</p></div><TabsBlock /></div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]"><div><ScheduleTable rows={event.program.map((row) => ({ time: row.time, title: row.title, meta: p(event.category) }))} /><Card className="mt-4 border-white/15 bg-white/[.04] p-5 text-white shadow-none"><div className="flex items-start gap-3"><Check className="mt-0.5 size-5 text-bse-gold" aria-hidden="true" /><div><h3 className="bse-display text-base text-white">متطلبات الحضور</h3><p className="mt-2 text-sm leading-[1.8] text-white/65">{requirements.map(p).join(" · ")}</p></div></div></Card></div><div className="border border-white/15 bg-bse-teal-mid/60 p-5 text-white"><Clock3 className="size-5 text-bse-gold" aria-hidden="true" /><h3 className="bse-display mt-5 text-xl text-white">ملاحظة تنظيمية</h3><p className="mt-3 text-sm leading-[1.9] text-white/70">قد تتغير الأوقات وفق البروتوكول الرسمي للفعالية. سيتم إرسال البرنامج النهائي للمسجلين قبل الموعد.</p><a className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-bse-gold-soft" href="#rsvp">احصل على التحديثات<ArrowUpLeft className="size-4" aria-hidden="true" /></a></div></div>
        </div>
      </section>

      <section className="bse-orbital-light bg-white py-16 sm:py-20"><div className="relative z-10 mx-auto grid max-w-bse-content items-center gap-10 px-6 lg:grid-cols-[.9fr_1.1fr]"><div className="relative min-h-[320px] overflow-hidden rounded-bse-md bg-bse-indigo"><img src={cover} alt={`${p(event.title)} — صورة داعمة`} width={1600} height={1000} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover opacity-85" /><div className="absolute inset-0 bg-bse-indigo/55" /><div className="absolute inset-x-5 bottom-5 text-white"><p className="text-xs tracking-[0.14em] text-bse-gold-soft">BSE EVENT STANDARD</p><p className="bse-display mt-2 text-2xl">مهنة · إنجاز · أثر</p></div></div><div><p className="text-xs font-bold tracking-[0.16em] text-bse-gold">04 / لماذا هذه الفعالية؟</p><TypographyH2 className="mt-3">احتفاء رسمي يربط الإنجاز بالمستقبل</TypographyH2><TypographyP className="mt-5 text-base leading-[2]">صُممت الفعالية لتكون أكثر من حفل؛ إنها مساحة تلتقي فيها الخبرة الوطنية مع الجيل القادم، وتتحول فيها قصص الإنجاز إلى فرص تعاون جديدة.</TypographyP><div className="mt-7 grid gap-4 sm:grid-cols-3">{[{ title: "اعتراف", text: "نحتفي بالخبرات والمسيرات التي صنعت فرقاً." }, { title: "معرفة", text: "نشارك المشاريع والحلول الهندسية أمام المجتمع." }, { title: "شبكة", text: "نفتح حواراً عملياً بين المهندس والشريك." }].map((item) => <div key={item.title} className="border-t-2 border-bse-gold pt-3"><p className="text-sm font-bold text-bse-indigo">{item.title}</p><p className="mt-2 text-xs leading-[1.7] text-bse-ink-muted">{item.text}</p></div>)}</div></div></div></section>

      <section id="location" className="bse-orbital-light scroll-mt-28 bg-bse-canvas-soft py-16"><div className="relative z-10 mx-auto max-w-bse-content px-6"><div className="flex flex-col gap-3 border-b border-bse-hairline pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-bold tracking-[0.16em] text-bse-gold">05 / فعاليات ذات صلة</p><TypographyH2 className="mt-3">تابع برنامج الجمعية</TypographyH2></div><p className="max-w-sm text-sm leading-relaxed text-bse-ink-muted">اكتشف فعالياتنا المؤسسية والاجتماعية الأخرى بنفس مستوى التنظيم والوضوح.</p></div><div className="mt-8 grid gap-4 md:grid-cols-2">{relatedEvents.map((related) => <Link key={related.slug} to="/events/$slug" params={{ slug: related.slug }} className="group flex items-center justify-between border border-bse-hairline bg-white p-5 hover:border-bse-gold"><div className="flex items-center gap-4"><Avatar className="size-12 rounded-bse-md bg-bse-indigo text-bse-gold"><AvatarFallback className="rounded-bse-md bg-bse-indigo text-bse-gold">{p(related.title).charAt(0)}</AvatarFallback></Avatar><div><p className="text-xs font-bold text-bse-gold">{p(related.category)}</p><h3 className="bse-display mt-1 text-lg text-bse-indigo">{p(related.title)}</h3></div></div><ArrowUpLeft className="size-5 text-bse-indigo transition-transform group-hover:-translate-y-1" aria-hidden="true" /></Link>)}</div></div></section>

      <ClosingCta eyebrow="BSE EVENTS TEAM" title="نظّم حضور فريقك بثقة" description="تواصل مع فريق التنظيم للحصول على تفاصيل التسجيل، الرعاية، أو المشاركة في برنامج الجمعية." action={<Button asChild size="lg" className="gap-2 rounded-bse-md bg-white text-bse-indigo hover:bg-bse-gold-soft"><a href="mailto:events@bse.bh">تواصل مع فريق التنظيم<ArrowUpLeft className="size-4" aria-hidden="true" /></a></Button>} />
    </>
  );
}

function TabsBlock() {
  return (
    <Tabs defaultValue="program" dir="rtl">
      <TabsList aria-label="محتوى الفعالية" className="h-auto gap-2 bg-transparent p-0">
        <TabsTrigger value="program" className="min-h-10 rounded-bse-md border border-bse-gold bg-bse-gold px-4 text-sm text-bse-indigo-deep data-[state=active]:bg-bse-gold">البرنامج</TabsTrigger>
        <TabsTrigger value="requirements" className="min-h-10 rounded-bse-md border border-white/25 bg-transparent px-4 text-sm text-white data-[state=active]:bg-bse-gold data-[state=active]:text-bse-indigo-deep">المتطلبات</TabsTrigger>
      </TabsList>
      <TabsContent value="program" className="sr-only">البرنامج ظاهر في الجدول أدناه</TabsContent>
      <TabsContent value="requirements" className="sr-only">متطلبات الحضور موضحة أسفل الجدول</TabsContent>
    </Tabs>
  );
}
