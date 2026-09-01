"use client";

import { FormEvent, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import css from "./ContactForm.module.css";
import Btn from "@/components/ui/Btn/Btn";
import Heading from "@/components/ui/Heading/Heading";

const HONEYPOT_FIELD = "nm_extra";

const ContactForm = () => {
  const t = useTranslations("contact.form");
  const locale = useLocale();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;
    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          [HONEYPOT_FIELD]: formData.get(HONEYPOT_FIELD),
          locale,
        }),
      });

      if (response.ok) {
        toast.success(t("success"), { duration: 6000 });
        form.reset();
      } else if (response.status === 429) {
        toast.error(t("tooMany"));
      } else if (response.status === 400) {
        toast.error(t("invalid"));
      } else {
        toast.error(t("error"));
      }
    } catch {
      toast.error(t("error"));
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Section id="contact" className={css.contact}>
      <Container className={css.container}>
        <Heading text={t("heading")} />

        <form
          className={css.form}
          onSubmit={handleSubmit}
          aria-busy={isSending}
        >
          <label className={css.field}>
            <span className={css.label}>{t("name")}&#42;</span>
            <input
              className={css.input}
              type="text"
              name="name"
              autoComplete="name"
              placeholder={t("namePlaceholder")}
              minLength={2}
              maxLength={100}
              required
            />
          </label>

          <label className={css.field}>
            <span className={css.label}>{t("email")}&#42;</span>
            <input
              className={css.input}
              type="email"
              name="email"
              autoComplete="email"
              placeholder={t("emailPlaceholder")}
              maxLength={254}
              required
            />
          </label>

          <label className={css.field}>
            <span className={css.label}>{t("message")}&#42;</span>
            <textarea
              className={`${css.input} ${css.textarea}`}
              name="message"
              rows={6}
              placeholder={t("messagePlaceholder")}
              minLength={10}
              maxLength={5000}
              required
            />
          </label>

          <div className={css.honeypot} aria-hidden="true">
            <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
            <input
              id={HONEYPOT_FIELD}
              name={HONEYPOT_FIELD}
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <Btn
            className={css.btn}
            type="submit"
            aria-disabled={isSending}
            data-sending={isSending || undefined}
          >
            {isSending ? (
              <>
                <ClipLoader size={16} color="currentColor" aria-hidden="true" />
                <span className="visuallyHidden">{t("sending")}</span>
              </>
            ) : (
              t("submit")
            )}
          </Btn>
        </form>
      </Container>
    </Section>
  );
};

export default ContactForm;
