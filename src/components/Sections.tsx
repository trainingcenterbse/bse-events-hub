import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  action?: ReactNode;
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
        {description && (
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={image}
        alt=""
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1 className="fade-up mt-3 max-w-3xl text-4xl font-bold text-primary-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="fade-up mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          {description}
        </p>
      </div>
    </section>
  );
}
