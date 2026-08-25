import { useTranslations } from "next-intl";
import css from "./Btn.module.css";
import { Link } from "@/lib/navigation";

type CommonProps = {
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
};
type BtnProps = CommonProps &
  ({ href: string } | { href?: never; type?: "button" | "submit" | "reset" });

export default function Btn({
  children,
  className,
  ariaLabel,
  ...rest
}: BtnProps) {
  const t = useTranslations("aria");
  const shared = {
    className: `${css.btn} ${className ?? ""}`,
    ...(ariaLabel && { "aria-label": t(ariaLabel) }),
  };

  return rest.href !== undefined ? (
    <Link href={rest.href} {...shared}>
      {children}
    </Link>
  ) : (
    <button type={rest.type ?? "button"} {...shared}>
      {children}
    </button>
  );
}
