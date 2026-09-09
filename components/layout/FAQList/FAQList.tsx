"use client";

import css from "./FAQList.module.css";
import type { FAQEntry } from "@/components/sections/FAQ/FAQ";
import * as Accordion from "@radix-ui/react-accordion";
import { IoChevronDown } from "react-icons/io5";

export default function FAQList({ items }: { items: FAQEntry[] }) {
  return (
    <Accordion.Root type="single" collapsible asChild>
      <ul className={css.list}>
        {items.map(({ question, answer }, i) => (
          <Accordion.Item key={question} value={`q${i}`} asChild>
            <li className={css.item}>
              <Accordion.Header asChild>
                <Accordion.Trigger className={css.trigger}>
                  {question}
                  <IoChevronDown aria-hidden="true" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className={css.content}>
                <p className={css.answer}>{answer}</p>
              </Accordion.Content>
            </li>
          </Accordion.Item>
        ))}
      </ul>
    </Accordion.Root>
  );
}
