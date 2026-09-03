import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type ConferenceFilter = "all" | "upcoming" | "past";
export type ConferenceSort = "default" | "newest" | "oldest";

export function ConferenceFilterBar({
  filter,
  onFilterChange,
  search,
  onSearchChange,
  sort,
  onSortChange,
}: {
  filter: ConferenceFilter;
  onFilterChange: (value: ConferenceFilter) => void;
  search: string;
  onSearchChange: (value: string) => void;
  sort: ConferenceSort;
  onSortChange: (value: ConferenceSort) => void;
}) {
  return (
    <div className="rounded-bse-xl border border-bse-hairline bg-white p-4 shadow-[0_12px_32px_-26px_rgba(14,12,31,.45)] sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <label className="relative block min-w-0 flex-1">
          <span className="sr-only">ابحث عن مؤتمر</span>
          <Search className="pointer-events-none absolute end-4 top-1/2 size-5 -translate-y-1/2 text-bse-ink-muted" aria-hidden="true" />
          <Input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="ابحث عن مؤتمر"
            className="min-h-12 rounded-bse-md border-bse-hairline bg-bse-canvas-soft pe-12 text-sm text-bse-indigo placeholder:text-bse-ink-muted focus-visible:ring-bse-blue"
          />
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <Tabs value={filter} onValueChange={(value) => onFilterChange(value as ConferenceFilter)}>
            <TabsList aria-label="تصفية المؤتمرات" className="h-12 rounded-bse-md border border-bse-hairline bg-bse-canvas-soft p-1">
              <TabsTrigger value="all" className="h-10 rounded-bse-md px-4 text-sm data-[state=active]:bg-bse-indigo data-[state=active]:text-white">
                الكل
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="h-10 rounded-bse-md px-4 text-sm data-[state=active]:bg-bse-indigo data-[state=active]:text-white">
                القادم
              </TabsTrigger>
              <TabsTrigger value="past" className="h-10 rounded-bse-md px-4 text-sm data-[state=active]:bg-bse-indigo data-[state=active]:text-white">
                السابق
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <label className="min-w-[190px]">
            <span className="sr-only">الترتيب حسب السنة</span>
            <Select value={sort} onValueChange={(value) => onSortChange(value as ConferenceSort)}>
              <SelectTrigger className="min-h-12 rounded-bse-md border-bse-hairline bg-white text-sm text-bse-indigo">
                <SelectValue placeholder="الترتيب حسب السنة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">الترتيب حسب السنة</SelectItem>
                <SelectItem value="newest">الأحدث أولاً</SelectItem>
                <SelectItem value="oldest">الأقدم أولاً</SelectItem>
              </SelectContent>
            </Select>
          </label>
        </div>
      </div>
    </div>
  );
}
