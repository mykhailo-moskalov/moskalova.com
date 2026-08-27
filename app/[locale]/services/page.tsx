import { useTranslations } from "next-intl";
import Heading from "@/components/ui/Heading/Heading";

export default function Services() {
  const t = useTranslations("services");
  return (
    <main>
      <Heading text={t("heading")} as="h1" />
    </main>
  );
}
