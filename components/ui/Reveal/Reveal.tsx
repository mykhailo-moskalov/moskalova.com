"use client";

import { createElement, CSSProperties, ReactNode } from "react";
import useInView from "@/lib/hooks/useInView";
import css from "./Reveal.module.css";

type RevealProps = {
  children: ReactNode;
  as?: "div" | "li" | "section" | "span";
  index?: number;
  className?: string;
};

export default function Reveal({
  children,
  as = "div",
  index = 0,
  className,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return createElement(
    as,
    {
      ref,
      className: `${css.reveal} ${inView ? css.visible : ""} ${className ?? ""}`,
      style: { "--reveal-delay": `${index * 80}ms` } as CSSProperties,
    },
    children,
  );
}
