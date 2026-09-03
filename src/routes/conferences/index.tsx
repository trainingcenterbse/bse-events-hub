import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import heroConference from "@/assets/hero-conference.jpg";
import { ClosingCta } from "@/components/bse/ClosingCta";
import { ConferenceFilterBar, type ConferenceFilter, type ConferenceSort } from "@/components/bse/ConferenceFilterBar";
import { ConferenceListItem } from "@/components/bse/ConferenceListItem";
import { EditorialSectionHeading } from "@/components/bse/EditorialSectionHeading";
import { SharedSplitHero } from "@/components/bse/SharedSplitHero";
import { StatStrip } from "@/components/bse/StatStrip";
import { TypographyH2 } from "@/components/bse/Typography";
import { Button } from "@/components/ui/button";
import { conferences } from "@/data/content";
import { conferenceCovers } from "@/lib/presentation";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/conferences/")({
  head: () => ({
    meta: [
      { title: "المؤتمرات | BSE Event" },
      { name: "description", content: "مؤتمرات جمعية المهندسين البحرينية: برامج علمية محكّمة، معارض مصاحبة، وصفحات تفاصيل لكل مؤتمر." },
    ],
  }),
  component: Conferences,
});

function Conferences() {
  const { p } = useI18n();
  const [filter, setFilter] = useState<ConferenceFilter>("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<ConferenceSort>("default");
  const filtered = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return conferences
      .filter((conference) => filter === "all" || conference.status === filter)
      .filter((conference) => !query || `${p(conference.title)} ${p(conference.summary)} ${p(conference.venue)}`.toLocaleLowerCase().includes(query))
      .sort((a, b) => sort === "oldest" ? Number(a.date.ar) - Number(b.date.ar) : Number(b.date.ar) - Number(a.date.ar));
  }, [filter, p, search, sort]);
  const impact = [
    { value: "26", label: { ar: "نسخة من الملتقى الخليجي", en: "Editions of the Gulf Engineering Forum" } },
    { value: "150+", label: { ar: "ورقة فنية محكّمة", en: "Peer-reviewed technical papers" } },
    { value: "20+", label: { ar: "دولة مشاركة في برامجنا", en: "Countries represented" } },
  ];

  return (
    <>
      <SharedSplitHero
        variant="home"
        eyebrow="CONFERENCES / 01"
        title="المؤتمرات الهندسية"
        description="منصات علمية تجمع الخبراء وصنّاع القرار والقطاع الهندسي حول موضوعات الطاقة والصيانة والتقنية والتآكل."
        image={heroConference}
        imageAlt="قاعة مؤتمر هندسي في البحرين"
        primaryAction={<Button asChild size="lg" className="gap-2 rounded-bse-md bg-bse-gold text-bse-indigo-deep hover:bg-bse-gold-soft"><a href="#conference-list">تصفح المؤتمرات<span aria-hidden="true">↙</span></a></Button>}
        secondaryAction={<Button asChild size="lg" variant="outline" className="gap-2 rounded-bse-md border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"><a href="#contact">فرص الشراكة<span aria-hidden="true">↗</span></a></Button>}
        facts={<div className="mt-12 border-t border-white/15 pt-5 text-xs text-white/65">أجندة 2025 · برامج علمية ومعارض مصاحبة</div>}
      />
      <StatStrip items={impact} />

      <section id="conference-list" className="bse-orbital-light bg-bse-canvas-soft px-6 py-20 sm:py-24">
        <div className="relative z-10 mx-auto max-w-bse-content">
          <EditorialSectionHeading
            eyebrow="THE CONFERENCE REGISTER"
            title="مؤتمراتنا"
            description="تعرّف على المؤتمرات التي تستضيفها الجمعية أو تنظمها بالشراكة مع الاتحادات المهنية."
            action={<span className="text-sm text-bse-ink-muted"><strong className="text-bse-indigo">{filtered.length}</strong> مؤتمرات معروضة</span>}
          />
          <div className="mt-8"><ConferenceFilterBar filter={filter} onFilterChange={setFilter} search={search} onSearchChange={setSearch} sort={sort} onSortChange={setSort} /></div>
          <div className="mt-8 space-y-6">
            {filtered.map((conference, index) => <ConferenceListItem key={conference.slug} conference={conference} cover={conferenceCovers[conference.cover]} featured={index === 0 && filter === "all" && sort !== "oldest"} />)}
          </div>
          {filtered.length === 0 && (
            <div className="mt-8 rounded-bse-xl border border-dashed border-bse-gold bg-white p-10 text-center">
              <TypographyH2 className="text-2xl">لم نعثر على مؤتمر مطابق</TypographyH2>
              <p className="mt-3 text-sm text-bse-ink-muted">جرّب كلمة بحث مختلفة أو أعد عرض جميع المؤتمرات.</p>
              <Button type="button" className="mt-5 rounded-bse-md" onClick={() => { setFilter("all"); setSearch(""); setSort("default"); }}>عرض جميع المؤتمرات</Button>
            </div>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-bse-hairline pt-5 text-sm text-bse-ink-muted"><span>السنة على كل غلاف تشير إلى النسخة أو الدورة المعروضة.</span><a href="mailto:events@bse.bh" className="font-semibold text-bse-blue hover:text-bse-gold">تحتاج ملفًا لمؤتمر سابق؟</a></div>
        </div>
      </section>

      <ClosingCta eyebrow="PARTNERSHIPS" title="هل لديك مؤتمر قادم؟" description="نحوّل الشراكة إلى برنامج واضح، حضور مؤثر، وتجربة منظمة من الدعوة حتى التقرير الختامي." action={<Button asChild size="lg" className="gap-2 rounded-bse-md bg-white text-bse-indigo hover:bg-bse-gold-soft"><a href="mailto:events@bse.bh">ناقش فرص الشراكة<span aria-hidden="true">↙</span></a></Button>} />
    </>
  );
}
