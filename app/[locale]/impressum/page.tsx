import { useTranslations } from "next-intl";
import Heading from "@/components/ui/Heading/Heading";

export default function Impressum() {
  const t = useTranslations("impressum");
  return (
    <main>
      <Heading text={t("heading")} as="h1" parent />
    </main>
  );
}
