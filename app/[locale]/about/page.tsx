import AboutMe from "@/components/sections/AboutMe/AboutMe";
import MoreAbout from "@/components/sections/MoreAbout/MoreAbout";
import Motto from "@/components/sections/Motto/Motto";

export default function ArtistsAndPerformers() {
  return (
    <main>
      <AboutMe />
      <MoreAbout />
      <Motto namespace="home.mottoEnd" href="/contact" backg />
    </main>
  );
}
