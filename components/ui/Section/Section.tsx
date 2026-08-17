import { ReactNode } from "react";
import css from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={`${css.section} ${className}`}>
      {children}
    </section>
  );
}
