import * as rootParams from "next/root-params";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale: override }) => {
  let locale = override;
  if (!locale) {
    const param = await rootParams.locale();
    locale = hasLocale(routing.locales, param) ? param : routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
