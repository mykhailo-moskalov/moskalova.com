import BackToTop from "@/components/ui/BackToTop/BackToTop";
import { useTranslations } from "next-intl";
import Hero from "@/components/sections/Hero/Hero";
import Motto from "@/components/sections/Motto/Motto";

export default function Home() {
  const t = useTranslations("home");
  return (
    <main>
      <Hero />
      <Motto />
      <BackToTop />
    </main>
  );
}
