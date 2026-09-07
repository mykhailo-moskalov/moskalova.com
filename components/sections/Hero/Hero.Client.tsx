"use client";

import css from "./Hero.module.css";
import Section from "@/components/ui/Section/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay, EffectFade, Keyboard, A11y } from "swiper/modules";
import { CSSProperties, useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import type { Photo } from "@/lib/types/gallery";

type HeroSwiperProps = {
  slides: Photo[][];
};

const stopIfReducedMotion = (swiper: SwiperInstance) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    swiper.autoplay.stop();
    swiper.params.speed = 0;
  }
};

export default function HeroSwiper({ slides }: HeroSwiperProps) {
  const [mounted, setMounted] = useState(() => new Set([0, 1]));

  const handleSlideChange = (sw: SwiperInstance) => {
    const current = sw.realIndex;
    const next = (current + 1) % slides.length;
    setMounted((prev) =>
      prev.has(current) && prev.has(next)
        ? prev
        : new Set(prev).add(current).add(next),
    );
  };

  if (slides.length === 0) return null;

  return (
    <Section className={css.hero} aria-label="Photo slideshow">
      <Swiper
        onSlideChange={handleSlideChange}
        modules={[Autoplay, EffectFade, Keyboard, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={2000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        keyboard={{ enabled: true }}
        onSwiper={stopIfReducedMotion}
        className={css.slider}
      >
        {slides.map((group, s) => (
          <SwiperSlide key={group[0].src} className={css.slide}>
            <div
              className={css.group}
              style={{ "--n": group.length } as CSSProperties}
            >
              {group.map((photo) => (
                <div key={photo.src} className={css.cell}>
                  {mounted.has(s) && (
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      sizes={`${Math.round(100 / group.length)}vw`}
                      priority={s === 0}
                      fetchPriority={s === 0 ? "high" : undefined}
                      className={css.img}
                    />
                  )}
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
