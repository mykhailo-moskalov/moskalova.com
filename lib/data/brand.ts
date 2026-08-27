import { photosOf, set } from "./galleries";

// const B = "brand/";
const P = "personal/";

const SOPHIIA = photosOf(`${P}sophiia`);

export const BRAND_SETS = [
  set("sofiia", "Sofiia", SOPHIIA[2], SOPHIIA, {
    title: { en: "Sofiia", uk: "Софія" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
];
