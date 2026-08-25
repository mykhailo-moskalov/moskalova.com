import { photosOf } from "@/lib/data/galleries";
import HeroSwiper from "./Hero.Client";

export default function Hero() {
  return <HeroSwiper photos={photosOf("hero")} />;
}
