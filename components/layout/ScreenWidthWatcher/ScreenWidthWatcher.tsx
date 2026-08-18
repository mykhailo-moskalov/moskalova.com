// "use client";

// import { useEffect } from "react";
// import { useWidthStore } from "@/lib/store/widthStore";

// export default function ScreenWidthWatcher() {
//   const setIsMobile = useWidthStore((state) => state.setIsMobile);
//   const setIsTablet = useWidthStore((state) => state.setIsTablet);

//   useEffect(() => {
//     const checkMobileSize = () => setIsMobile(window.innerWidth < 768);
//     const checkTabletSize = () =>
//       setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1440);
//     checkMobileSize();
//     checkTabletSize();

//     window.addEventListener("resize", checkMobileSize);
//     window.addEventListener("resize", checkTabletSize);
//     return () => {
//       window.removeEventListener("resize", checkMobileSize);
//       window.removeEventListener("resize", checkTabletSize);
//     };
//   }, [setIsMobile, setIsTablet]);

//   return null;
// }
