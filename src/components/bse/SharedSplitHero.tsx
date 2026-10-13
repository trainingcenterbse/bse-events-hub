import { useEffect, useState, type ReactNode } from "react";

import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

import { TypographyH1 } from "@/components/bse/Typography";

export type SharedSplitHeroProps = {
  eyebrow?: string;
  eyebrows?: string[];
  title?: string;
  titles?: string[];
  description?: string;
  descriptions?: string[];
  image?: string;
  images?: string[];
  imageAlt?: string;
  imageAlts?: string[];
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  facts?: ReactNode;
  variant?: "home" | "about";
  enableSlideshow?: boolean;
};

export function SharedSplitHero({
  eyebrow,
  eyebrows,
  title,
  titles,
  description,
  descriptions,
  image,
  images,
  imageAlt,
  imageAlts,
  primaryAction,
  secondaryAction,
  facts,
  variant = "home",
  enableSlideshow = false,
}: SharedSplitHeroProps) {
  const slideshowImages = enableSlideshow && images ? images : (image ? [image] : []);
  const slideshowAlts = enableSlideshow && imageAlts ? imageAlts : (imageAlt ? [imageAlt] : []);
  const slideshowEyebrows = enableSlideshow && eyebrows ? eyebrows : (eyebrow ? [eyebrow] : []);
  const slideshowTitles = enableSlideshow && titles ? titles : (title ? [title] : []);
  const slideshowDescriptions = enableSlideshow && descriptions ? descriptions : (description ? [description] : []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!enableSlideshow || slideshowImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [enableSlideshow, slideshowImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
  };

  const currentImage = slideshowImages[currentIndex];
  const currentAlt = slideshowAlts[currentIndex] || "";
  const currentEyebrow = slideshowEyebrows[currentIndex] || "";
  const currentTitle = slideshowTitles[currentIndex] || "";
  const currentDescription = slideshowDescriptions[currentIndex] || "";

  return (
    <section className="grid min-h-[500px] grid-cols-1 lg:min-h-[570px] lg:grid-cols-2" dir="ltr">
      <div className="relative order-2 min-h-[330px] overflow-hidden bg-bse-indigo-deep lg:order-1 lg:min-h-0">
        <img
          src={currentImage}
          alt={currentAlt}
          width={1920}
          height={1088}
          loading="eager"
          decoding="async"
          className="absolute inset-0 size-full object-cover transition-opacity duration-500"
        />
        <div className="bse-photo-wash absolute inset-0" />
        <div className="bse-blueprint pointer-events-none absolute inset-0 opacity-35" />
        {enableSlideshow && slideshowImages.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
              aria-label="Next slide"
            >
              <ChevronRight className="size-5" />
            </button>
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              {slideshowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition ${
                    index === currentIndex ? "bg-bse-gold" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
        <div className="absolute inset-x-6 bottom-6 border-t border-white/25 pt-4 text-right text-white sm:inset-x-10 sm:bottom-10">
          <div className="flex items-center justify-between gap-4 text-xs">
            <span className="font-semibold tracking-[0.12em] text-bse-gold-soft">BSE / 1983—2026</span>
            <span className="text-white/70">التخطيط · التشغيل · الأثر</span>
          </div>
        </div>
      </div>

      <div className="relative order-1 flex flex-col justify-center overflow-hidden bg-bse-indigo px-6 py-14 text-white sm:px-12 lg:order-2 lg:px-16">
        <div className="absolute inset-y-0 start-0 w-1 bg-bse-gold" />
        <div className="absolute -bottom-28 -start-20 size-80 rounded-full border border-white/10" aria-hidden="true" />
        <div className="absolute -bottom-12 start-4 size-52 rounded-full border border-bse-gold/20" aria-hidden="true" />
        <div className="relative max-w-[560px]" dir="rtl">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-[0.14em] text-bse-gold-soft">
            <span className="h-px w-10 bg-bse-gold" aria-hidden="true" />
            <span>{currentEyebrow}</span>
            {variant === "home" && <span className="font-sans text-white/70">BSE EVENT</span>}
          </div>
          <TypographyH1 className="mt-6 max-w-[620px] text-white sm:text-[3.25rem]">
            {currentTitle}
          </TypographyH1>
          <p className="mt-6 max-w-[500px] text-base leading-[1.95] text-white/75">{currentDescription}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            {primaryAction}
            {secondaryAction}
          </div>
          {facts ?? (
            <div className="mt-12 flex items-center gap-3 border-t border-white/15 pt-5 text-xs text-white/60">
              <MapPin className="size-4 text-bse-gold-soft" aria-hidden="true" />
              <span>مملكة البحرين · جمعية المهندسين البحرينية</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
