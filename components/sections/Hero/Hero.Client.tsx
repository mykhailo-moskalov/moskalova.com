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

type HeroSwiperProps = {
  photos: Photo[];
};

const stopIfReducedMotion = (swiper: SwiperInstance) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    swiper.autoplay.stop();
  }
};

export default function HeroSwiper({ photos }: HeroSwiperProps) {
  if (photos.length === 0) return null;

  return (
    <Section className={css.hero} aria-label="Photo slideshow">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Keyboard, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        navigation
        keyboard={{ enabled: true }}
        onSwiper={stopIfReducedMotion}
        className={css.slider}
      >
        {photos.map((photo, i) => (
          <SwiperSlide key={photo.src} className={css.slide}>
            <Image
              src={photo.src}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              className={css.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
