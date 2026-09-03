import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Localized } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n";

export type ScheduleRow = {
  time: string;
  title: Localized;
  meta?: string;
};

export function ScheduleTable({ rows }: { rows: ScheduleRow[] }) {
  const { p } = useI18n();

  return (
    <div className="overflow-hidden border border-white/15 bg-white/[.04]">
      <Table className="min-w-[680px] text-right">
        <TableHeader className="bg-bse-indigo-deep text-xs uppercase tracking-[.1em] text-bse-gold-soft">
          <TableRow className="border-white/15 hover:bg-transparent">
            <TableHead className="w-[120px] px-5 py-4 text-right font-semibold text-bse-gold-soft">الوقت</TableHead>
            <TableHead className="px-5 py-4 text-right font-semibold text-bse-gold-soft">الجلسة</TableHead>
            <TableHead className="w-[270px] px-5 py-4 text-right font-semibold text-bse-gold-soft">المسار / ملاحظة</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={`${row.time}-${row.title.en}`} className={index % 2 === 0 ? "border-white/10 bg-bse-blue hover:bg-bse-blue/90" : "border-white/10 bg-bse-teal-mid hover:bg-bse-teal-mid/90"}>
              <TableCell className="px-5 py-4 font-mono text-sm font-semibold text-bse-gold-soft" dir="ltr">{row.time}</TableCell>
              <TableCell className="px-5 py-4 text-sm font-semibold text-white">{p(row.title)}</TableCell>
              <TableCell className="px-5 py-4 text-sm text-white/70">{row.meta ?? "البرنامج العلمي"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
