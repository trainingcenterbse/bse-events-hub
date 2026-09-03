import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type EventFilter = "all" | "upcoming" | "past";

export function EventFilterBar({
  filter,
  onFilterChange,
  category,
  categories,
  onCategoryChange,
  search,
  onSearchChange,
}: {
  filter: EventFilter;
  onFilterChange: (value: EventFilter) => void;
  category: string;
  categories: { value: string; label: string }[];
  onCategoryChange: (value: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
}) {
  return (
    <div className="rounded-bse-xl border border-bse-hairline bg-white p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <label className="relative block min-w-0 flex-1">
          <span className="sr-only">ابحث عن فعالية أو موضوع</span>
          <Search className="pointer-events-none absolute end-4 top-1/2 size-5 -translate-y-1/2 text-bse-ink-muted" aria-hidden="true" />
          <Input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="ابحث عن فعالية أو موضوع"
            className="min-h-12 rounded-bse-md border-bse-hairline bg-bse-canvas-soft pe-12 text-sm text-bse-indigo placeholder:text-bse-ink-muted focus-visible:ring-bse-blue"
          />
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <Tabs value={filter} onValueChange={(value) => onFilterChange(value as EventFilter)}>
            <TabsList aria-label="تصفية الفعاليات" className="h-12 rounded-bse-md border border-bse-hairline bg-bse-canvas-soft p-1">
              <TabsTrigger value="all" className="h-10 rounded-bse-md px-4 text-sm data-[state=active]:bg-bse-indigo data-[state=active]:text-white">الكل</TabsTrigger>
              <TabsTrigger value="upcoming" className="h-10 rounded-bse-md px-4 text-sm data-[state=active]:bg-bse-indigo data-[state=active]:text-white">قادم</TabsTrigger>
              <TabsTrigger value="past" className="h-10 rounded-bse-md px-4 text-sm data-[state=active]:bg-bse-indigo data-[state=active]:text-white">سابق</TabsTrigger>
            </TabsList>
          </Tabs>
          <label className="min-w-[190px]">
            <span className="sr-only">التصنيف</span>
            <Select value={category} onValueChange={onCategoryChange}>
              <SelectTrigger className="min-h-12 rounded-bse-md border-bse-hairline bg-white text-sm text-bse-indigo">
                <SelectValue placeholder="جميع التصنيفات" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع التصنيفات</SelectItem>
                {categories.map((item) => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </label>
        </div>
      </div>
    </div>
  );
}
