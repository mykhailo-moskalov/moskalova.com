"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Keyboard,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import type { Photo } from "@/lib/types/gallery";
import css from "./Hero.module.css";
import Section from "@/components/ui/Section/Section";
import { CSSProperties } from "react";

type HeroSwiperProps = {
  slides: Photo[][];
};

const stopIfReducedMotion = (swiper: SwiperInstance) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    swiper.autoplay.stop();
  }
};

export default function HeroSwiper({ slides }: HeroSwiperProps) {
  if (slides.length === 0) return null;

  return (
    <Section className={css.hero} aria-label="Photo slideshow">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Keyboard, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={2000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        navigation
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
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    sizes={`${Math.round(100 / group.length)}vw`}
                    priority={s === 0}
                    className={css.img}
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
