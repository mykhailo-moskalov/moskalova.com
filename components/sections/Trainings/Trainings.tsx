// "use client";

// import Container from "../../ui/Container/Container";
// import Section from "../../ui/Section/Section";
// import css from "./Trainings.module.css";
// import { useTrainingsStore } from "@/lib/store/trainingsStore";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css/bundle";
// import { IoArrowForward } from "react-icons/io5";
// import { useTranslations } from "next-intl";

// const Trainings = () => {
//   const setSwiper = useTrainingsStore((state) => state.setSwiper);
//   const t = useTranslations("trainings");

//   return (
//     <Section id="trainings" className={css.trainings}>
//       <Container className={css.container}>
//         <h2 className={css.heading}>
//           {t("heading1")}
//           <br />
//           <span className="pad">{t("heading2")}</span>
//         </h2>
//         <Swiper
//           onSwiper={setSwiper}
//           spaceBetween={32}
//           slidesPerView={"auto"}
//           modules={[Pagination, Autoplay]}
//           autoplay={{ delay: 3000 }}
//           pagination={{ dynamicBullets: true, clickable: true }}
//           loop={true}
//           autoHeight={false}
//           grabCursor={true}
//           className={css.swiper}
//         >
//           <SwiperSlide id="miniFlames" className={css.swiperSlide}>
//             <h3>{t("teams.miniFlames.name")}</h3>
//             <h4>{t("trainingsH")}:</h4>
//             <p>
//               {t("teams.miniFlames.trainings.training1.time")}
//               <br />
//               {t("teams.miniFlames.trainings.training1.place")}
//             </p>
//             <h4>{t("ageH")}:</h4>
//             <p>{t("teams.miniFlames.age")}</p>
//           </SwiperSlide>
//           <SwiperSlide id="fairies" className={css.swiperSlide}>
//             <h3>{t("teams.fairies.name")}</h3>
//             <h4>{t("trainingsH")}:</h4>
//             <p>
//               {t("teams.fairies.trainings.training1.time")}
//               <br />
//               {t("teams.fairies.trainings.training1.place")}
//             </p>
//             <p>
//               {t("teams.fairies.trainings.training2.time")}
//               <br />
//               {t("teams.fairies.trainings.training2.place")}
//             </p>
//             <h4>{t("ageH")}:</h4>
//             <p>{t("teams.fairies.age")}</p>
//           </SwiperSlide>
//           <SwiperSlide id="fireflies" className={css.swiperSlide}>
//             <h3>{t("teams.fireflies.name")}</h3>
//             <h4>{t("trainingsH")}:</h4>
//             <p>
//               {t("teams.fireflies.trainings.training1.time")}
//               <br />
//               {t("teams.fireflies.trainings.training1.place")}
//             </p>
//             <p>
//               {t("teams.fireflies.trainings.training2.time")}
//               <br />
//               {t("teams.fireflies.trainings.training2.place")}
//             </p>
//             <p>
//               {t("teams.fireflies.trainings.training3.time")}
//               <br />
//               {t("teams.fireflies.trainings.training3.place")}
//             </p>
//             <h4>{t("ageH")}:</h4>
//             <p>{t("teams.fireflies.age")}</p>
//           </SwiperSlide>
//           <SwiperSlide id="firebirds" className={css.swiperSlide}>
//             <h3>{t("teams.firebirds.name")}</h3>
//             <h4>{t("trainingsH")}:</h4>
//             <p>
//               {t("teams.firebirds.trainings.training1.time")}
//               <br />
//               {t("teams.firebirds.trainings.training1.place")}
//             </p>
//             <p>
//               {t("teams.firebirds.trainings.training2.time")}
//               <br />
//               {t("teams.firebirds.trainings.training2.place")}
//             </p>
//             <p>
//               {t("teams.firebirds.trainings.training3.time")}
//               <br />
//               {t("teams.firebirds.trainings.training3.place")}
//             </p>
//             <h4>{t("ageH")}:</h4>
//             <p>{t("teams.firebirds.age")}</p>
//           </SwiperSlide>
//           <SwiperSlide id="forces" className={css.swiperSlide}>
//             <h3>{t("teams.forces.name")}</h3>
//             <h4>{t("ageH")}:</h4>
//             <p>{t("teams.forces.age")}</p>
//           </SwiperSlide>
//           <SwiperSlide id="firestorm" className={css.swiperSlide}>
//             <h3>{t("teams.firestorm.name")}</h3>
//             <h4>{t("ageH")}:</h4>
//             <p>{t("teams.firestorm.age")}</p>
//           </SwiperSlide>
//         </Swiper>
//         <p className={css.hint}>
//           {t("hint")}
//           <IoArrowForward />
//         </p>
//       </Container>
//     </Section>
//   );
// };

// export default Trainings;
