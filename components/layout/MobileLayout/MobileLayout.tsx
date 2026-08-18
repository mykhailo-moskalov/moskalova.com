// "use client";

// import { ReactNode, useEffect } from "react";
// import Header from "@/components/layout/Header/Header";
// import Footer from "@/components/layout/Footer/Footer";
// import Sidebar from "@/components/layout/Sidebar/Sidebar";
// import { useWidthStore } from "@/lib/store/widthStore";
// import { useSidebarStore } from "@/lib/store/sidebarStore";
// import ScreenWidthWatcher from "../ScreenWidthWatcher/ScreenWidthWatcher";
// import { Toaster } from "react-hot-toast";

// export default function MobileLayout({ children }: { children: ReactNode }) {
//   const setIsOpen = useSidebarStore((state) => state.setIsOpen);
//   const isMobile = useWidthStore((state) => state.isMobile);

//   useEffect(() => {
//     let startX = 0;
//     let shouldBlock = false;

//     const handleTouchStart = (e: TouchEvent) => {
//       const target = e.target as HTMLElement;
//       if (target.closest(".swiper")) {
//         shouldBlock = false;
//         return;
//       }
//       startX = e.touches[0].clientX;
//       shouldBlock = true;
//     };

//     const handleTouchMove = (e: TouchEvent) => {
//       if (!shouldBlock) return;
//       const currentX = e.touches[0].clientX;
//       const diff = startX - currentX;
//       if (diff < -30) e.preventDefault();
//     };

//     const handleTouchEnd = (e: TouchEvent) => {
//       if (!shouldBlock) return;
//       if (!isMobile) return;
//       const diff = startX - e.changedTouches[0].clientX;
//       if (diff > 100) setIsOpen(true);
//       if (diff < -100) setIsOpen(false);
//     };

//     window.addEventListener("touchstart", handleTouchStart);
//     window.addEventListener("touchmove", handleTouchMove, { passive: false });
//     window.addEventListener("touchend", handleTouchEnd);

//     return () => {
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//       window.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [isMobile, setIsOpen]);

//   return (
//     <>
//       <div style={{ position: "relative" }}>
//         <ScreenWidthWatcher />
//         <Header />
//         <Sidebar />
//         {children}
//         <Footer />
//       </div>
//       <Toaster />
//     </>
//   );
// }
