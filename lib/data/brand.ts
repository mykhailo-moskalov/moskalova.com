import { photosOf, set } from "./photos";

const B = "brand/";

const THE_STYLE_EDIT = photosOf(`${B}the-style-edit`);
const COASTAL_STORY = photosOf(`${B}coastal-story`);
const THE_EXPERT = photosOf(`${B}the-expert`);
const THE_AUTUMN_EDIT = photosOf(`${B}the-autumn-edit`);
const THE_DESIGN_DUO = photosOf(`${B}the-design-duo`);
const THE_PRACTICE = photosOf(`${B}the-practice`);
const AT_WORK = photosOf(`${B}at-work`);
// const THE_COACH = photosOf(`${B}the-coach`);
// const THE_HOTEL = photosOf(`${B}the-hotel`);
// const IN_THE_STUDIO = photosOf(`${B}in-the-studio`);
// const A_FRENCH_ESCAPE = photosOf(`${B}a-french-escape`);
// const AUTUMN_MUSE = photosOf(`${B}autumn-muse`);
// const BEHIND_THE_SUIT = photosOf(`${B}behind-the-suit`);
// const VIENNESE_LIVING = photosOf(`${B}viennese-living`);
// const ITALIAN_COUNTRYSIDE = photosOf(`${B}italian-countryside`);

export const BRAND_SETS = [
  set("the-style-edit", "The Style Edit", THE_STYLE_EDIT[0], THE_STYLE_EDIT, {
    title: { en: "The Style Edit", uk: "Title" },
    subtitle: { en: "Personal branding", uk: "Subtitle" },
  }),
  set("coastal-story", "Coastal Story", COASTAL_STORY[0], COASTAL_STORY, {
    title: { en: "Coastal Story", uk: "Title" },
    subtitle: { en: "Slow fashion brand campaign", uk: "Subtitle" },
  }),
  set("the-expert", "The Expert", THE_EXPERT[0], THE_EXPERT, {
    title: { en: "The Expert", uk: "Title" },
    subtitle: { en: "Brand content for a leadership coach", uk: "Subtitle" },
  }),
  set(
    "the-autumn-edit",
    "The Autumn Edit",
    THE_AUTUMN_EDIT[0],
    THE_AUTUMN_EDIT,
    {
      title: { en: "The Autumn Edit", uk: "Title" },
      subtitle: { en: "Slow fashion brand campaign", uk: "Subtitle" },
    },
  ),
  set("the-design-duo", "The Design Duo", THE_DESIGN_DUO[0], THE_DESIGN_DUO, {
    title: { en: "The Design Duo", uk: "Title" },
    subtitle: {
      en: "Portraits & content for product designers",
      uk: "Subtitle",
    },
  }),
  set("the-practice", "The Practice", THE_PRACTICE[0], THE_PRACTICE, {
    title: { en: "The Practice", uk: "Title" },
    subtitle: {
      en: "Brand photography for a doctor of psychology",
      uk: "Subtitle",
    },
  }),
  set("at-work", "At Work", AT_WORK[0], AT_WORK, {
    title: { en: "At Work", uk: "Title" },
    subtitle: {
      en: "Brand content for a marketing specialist",
      uk: "Subtitle",
    },
  }),
  // set("the-coach", "The Coach", THE_COACH[0], THE_COACH, {
  //   title: { en: "The Coach", uk: "Title" },
  //   subtitle: { en: "Brand content for a life coach", uk: "Subtitle" },
  // }),
  // set("the-hotel", "The Hotel", THE_HOTEL[0], THE_HOTEL, {
  //   title: { en: "The Hotel", uk: "Title" },
  //   subtitle: { en: "Hotel & hospitality photography", uk: "Subtitle" },
  // }),
  // set("in-the-studio", "In the Studio", IN_THE_STUDIO[0], IN_THE_STUDIO, {
  //   title: { en: "In the Studio", uk: "Title" },
  //   subtitle: { en: "Artist & designer", uk: "Subtitle" },
  // }),
  // set(
  //   "a-french-escape",
  //   "A French Escape",
  //   A_FRENCH_ESCAPE[0],
  //   A_FRENCH_ESCAPE,
  //   {
  //     title: { en: "A French Escape", uk: "Title" },
  //     subtitle: { en: "Villa & property photography", uk: "Subtitle" },
  //   },
  // ),
  // set("autumn-muse", "Autumn Muse", AUTUMN_MUSE[0], AUTUMN_MUSE, {
  //   title: { en: "Autumn Muse", uk: "Title" },
  //   subtitle: { en: "Personal branding for a stylist", uk: "Subtitle" },
  // }),
  // set(
  //   "behind-the-suit",
  //   "Behind the Suit",
  //   BEHIND_THE_SUIT[0],
  //   BEHIND_THE_SUIT,
  //   {
  //     title: { en: "Behind the Suit", uk: "Title" },
  //     subtitle: { en: "Crisis & Reputation Advisor", uk: "Subtitle" },
  //   },
  // ),
  // set(
  //   "viennese-living",
  //   "Viennese Living",
  //   VIENNESE_LIVING[0],
  //   VIENNESE_LIVING,
  //   {
  //     title: { en: "Viennese Living", uk: "Title" },
  //     subtitle: { en: "Interior & property photography", uk: "Subtitle" },
  //   },
  // ),
  // set(
  //   "italian-countryside",
  //   "Italian Countryside",
  //   ITALIAN_COUNTRYSIDE[0],
  //   ITALIAN_COUNTRYSIDE,
  //   {
  //     title: { en: "Italian Countryside", uk: "Title" },
  //     subtitle: { en: "Interior & property photography", uk: "Subtitle" },
  //   },
  // ),
];
