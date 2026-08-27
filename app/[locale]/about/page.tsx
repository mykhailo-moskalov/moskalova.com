import Heading from "@/components/ui/Heading/Heading";
import { useTranslations } from "next-intl";

export default function ArtistsAndPerformers() {
  const t = useTranslations("about");
  return (
    <main>
      <Heading text={t("heading")} as="h1" />
    </main>
  );
}
