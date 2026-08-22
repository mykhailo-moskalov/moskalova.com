import Hero from "@/components/sections/Hero/Hero";
import Story from "@/components/sections/Story/Story";
import Sponsors from "@/components/sections/Sponsors/Sponsors";
import BackToTop from "@/components/ui/BackToTop/BackToTop";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Sponsors />
      <BackToTop />
    </main>
  );
}
