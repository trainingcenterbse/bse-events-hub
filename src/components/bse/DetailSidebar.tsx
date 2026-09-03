import type { ReactNode } from "react";

export function DetailSidebar({ children }: { children: ReactNode }) {
  return <aside className="w-full shrink-0 lg:w-[340px]"><div className="sticky top-28 space-y-4">{children}</div></aside>;
}
