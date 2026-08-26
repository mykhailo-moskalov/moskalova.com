export const LEFT_LINKS = ["home", "personal", "brand", "creatives"] as const;
export const RIGHT_LINKS = ["services", "about", "contact"] as const;
export const HREFS: Record<
  (typeof LEFT_LINKS | typeof RIGHT_LINKS)[number],
  string
> = {
  home: "/",
  personal: "/personal-stories",
  brand: "/brand-stories",
  creatives: "/artists-and-performers",
  services: "/services",
  about: "/about",
  contact: "/contact",
};
