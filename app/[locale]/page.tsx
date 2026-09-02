import Feedback from "@/components/sections/Feedback/Feedback";
import Hero from "@/components/sections/Hero/Hero";
import Motto from "@/components/sections/Motto/Motto";

export default function Home() {
  return (
    <main>
      <Hero />
      <Motto namespace="home.motto" href="/about" caps />
      <Feedback />
    </main>
  );
}
