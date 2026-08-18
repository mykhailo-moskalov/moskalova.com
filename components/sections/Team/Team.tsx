// "use client";

// import Container from "../../ui/Container/Container";
// import Section from "../../ui/Section/Section";
// import css from "./Team.module.css";
// import Image from "next/image";
// import { useState, useRef } from "react";
// import { IoChevronBack, IoChevronForward } from "react-icons/io5";
// import { slides } from "@/lib/constants/slides";

// import { Swiper, SwiperSlide } from "swiper/react";
// import type { Swiper as SwiperType } from "swiper";
// import { Navigation, FreeMode, Thumbs } from "swiper/modules";
// import "swiper/css/bundle";

// import Lightbox from "yet-another-react-lightbox";
// import { Captions, Zoom } from "yet-another-react-lightbox/plugins";
// import "yet-another-react-lightbox/styles.css";
// import "yet-another-react-lightbox/plugins/captions.css";
// import { useWidthStore } from "@/lib/store/widthStore";
// import { useTranslations } from "next-intl";

// const Team = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

//   const swiperRef = useRef<SwiperType | null>(null);
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [lightboxIndex, setLightboxIndex] = useState(0);
//   const isMobile = useWidthStore((state) => state.isMobile);
//   const isTablet = useWidthStore((state) => state.isTablet);

//   const imgWidth = isMobile || isTablet ? 335 : 468;
//   const imgHeight = isMobile || isTablet ? 502.5 : 702;
//   const imgWidthHorizontal = imgHeight * 1.5;

//   const imgWidthThumbnail = isMobile || isTablet ? 60 : 84;
//   const imgHeightThumbnail = isMobile || isTablet ? 90 : 126;
//   const imgWidthHorizontalThumbnail = imgHeight * 1.5;

//   const t = useTranslations("team");
//   const ta = useTranslations("aria");
//   const ts = useTranslations("team.slides");

//   return (
//     <Section id="team" className={css.team}>
//       <Container className={css.container}>
//         <h2 className={css.heading}>
//           {t("heading1")}
//           <br />
//           <span className="pad">{t("heading2")}</span>
//         </h2>
//         <Swiper
//           onSwiper={(swiper) => (swiperRef.current = swiper)}
//           loop={true}
//           spaceBetween={16}
//           grabCursor={true}
//           modules={[Navigation, FreeMode, Thumbs]}
//           thumbs={{ swiper: thumbsSwiper }}
//           className={css.swiper}
//         >
//           {slides.map((slide) => (
//             <SwiperSlide
//               key={slide.src}
//               className={css.swiperSlide}
//               onClick={() => {
//                 setLightboxIndex(swiperRef.current?.realIndex ?? 0);
//                 setLightboxOpen(true);
//               }}
//             >
//               <Image
//                 width={slide.horizontal ? imgWidthHorizontal : imgWidth}
//                 height={imgHeight}
//                 alt={ts(slide.key)}
//                 src={slide.thumbnail}
//                 loading="lazy"
//               />
//               {ts(slide.key) && (
//                 <p className={css.slideDesc}>{ts(slide.key)}</p>
//               )}
//             </SwiperSlide>
//           ))}
//           <div className={css.navBox}>
//             <button
//               aria-label={ta("prevPhoto")}
//               className={css.navBtn}
//               onClick={() => swiperRef.current?.slidePrev()}
//             >
//               <IoChevronBack />
//             </button>
//             <button
//               aria-label={ta("nextPhoto")}
//               className={css.navBtn}
//               onClick={() => swiperRef.current?.slideNext()}
//             >
//               <IoChevronForward />
//             </button>
//           </div>
//         </Swiper>
//         <Swiper
//           onSwiper={setThumbsSwiper}
//           loop={true}
//           spaceBetween={12}
//           freeMode={true}
//           watchSlidesProgress={true}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className={css.swiperBottom}
//         >
//           {slides.map((slide) => (
//             <SwiperSlide key={slide.mini} className={css.swiperSlide}>
//               <Image
//                 width={
//                   slide.horizontal
//                     ? imgWidthHorizontalThumbnail
//                     : imgWidthThumbnail
//                 }
//                 height={imgHeightThumbnail}
//                 alt={ts(slide.key)}
//                 src={slide.mini}
//                 loading="lazy"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Container>

//       <Lightbox
//         open={lightboxOpen}
//         close={() => setLightboxOpen(false)}
//         slides={slides.map((s) => ({
//           src: s.src,
//           description: ts(s.key) || undefined,
//         }))}
//         index={lightboxIndex}
//         plugins={[Captions, Zoom]}
//         on={{
//           view: ({ index }) => swiperRef.current?.slideToLoop(index),
//         }}
//       />
//     </Section>
//   );
// };

// export default Team;
