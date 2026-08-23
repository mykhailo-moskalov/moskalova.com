"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import Section from "@/components/ui/Section/Section";
import Container from "@/components/ui/Container/Container";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const t = useTranslations("contact.form");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // captured now: currentTarget is null once we await
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
          company: formData.get("company"),
        }),
      });

      if (response.ok) {
        toast.success(t("success"));
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
        <h2 className={css.heading}>{t("heading")}</h2>

        <form className={css.form} onSubmit={handleSubmit} noValidate>
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
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <button className={css.button} type="submit" disabled={isSending}>
            {isSending ? (
              <ClipLoader size={16} color="currentColor" title={t("sending")} />
            ) : (
              t("submit")
            )}
          </button>
        </form>
      </Container>

      <Toaster position="top-center" />
    </Section>
  );
};

export default ContactForm;
