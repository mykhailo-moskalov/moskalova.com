export const LEFT_LINKS = ["home", "brand", "personal", "creatives"] as const;
export const RIGHT_LINKS = ["services", "about", "contact"] as const;
export const HREFS: Record<
  (typeof LEFT_LINKS | typeof RIGHT_LINKS)[number],
  string
> = {
  home: "/",
  brand: "/brand-stories",
  personal: "/personal-stories",
  creatives: "/artists-and-performers",
  services: "/services",
  about: "/about",
  contact: "/contact",
};
