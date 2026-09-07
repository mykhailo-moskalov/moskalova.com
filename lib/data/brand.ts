import { photosOf, set } from "./photos";

const B = "brand/";

const THE_STYLE_EDIT = photosOf(`${B}the-style-edit`);
export const COASTAL_STORY = photosOf(`${B}coastal-story`);
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
  set("the-style-edit", "The Style Edit", THE_STYLE_EDIT[3], THE_STYLE_EDIT, {
    title: { en: "The Style Edit", uk: "Стильна добірка" },
    subtitle: {
      en: "Personal branding for a stylist",
      uk: "Персональний бренд для стилістки",
    },
  }),
  set("coastal-story", "Coastal Story", COASTAL_STORY[0], COASTAL_STORY, {
    title: { en: "Coastal Story", uk: "Історія на узбережжі" },
    subtitle: {
      en: "Slow fashion brand campaign",
      uk: "Кампанія для slow-fashion-бренду",
    },
  }),
  set("the-expert", "The Expert", THE_EXPERT[10], THE_EXPERT, {
    title: { en: "The Expert", uk: "Експерт" },
    subtitle: {
      en: "Brand content for a leadership coach",
      uk: "Бренд-контент для коуча з лідерства",
    },
  }),
  set(
    "the-autumn-edit",
    "The Autumn Edit",
    THE_AUTUMN_EDIT[11],
    THE_AUTUMN_EDIT,
    {
      title: { en: "The Autumn Edit", uk: "Осіння добірка" },
      subtitle: {
        en: "Slow fashion brand campaign",
        uk: "Кампанія для slow-fashion-бренду",
      },
    },
  ),
  set("the-design-duo", "The Design Duo", THE_DESIGN_DUO[11], THE_DESIGN_DUO, {
    title: { en: "The Design Duo", uk: "Дизайн-дует" },
    subtitle: {
      en: "Portraits & content for product designers",
      uk: "Портрети та контент для продуктових дизайнерів",
    },
  }),
  set("the-practice", "The Practice", THE_PRACTICE[5], THE_PRACTICE, {
    title: { en: "The Practice", uk: "Практика" },
    subtitle: {
      en: "Brand photography for a doctor of psychology",
      uk: "Бренд-фотографія для доктора психології",
    },
  }),
  set("at-work", "At Work", AT_WORK[8], AT_WORK, {
    title: { en: "At Work", uk: "За роботою" },
    subtitle: {
      en: "Brand content for a marketing specialist",
      uk: "Бренд-контент для маркетолога",
    },
  }),
  // set("the-coach", "The Coach", THE_COACH[0], THE_COACH, {
  //   title: { en: "The Coach", uk: "Коуч" },
  //   subtitle: { en: "Brand content for a life coach", uk: "Бренд-контент для лайф-коуча" },
  // }),
  // set("the-hotel", "The Hotel", THE_HOTEL[0], THE_HOTEL, {
  //   title: { en: "The Hotel", uk: "Готель" },
  //   subtitle: { en: "Hotel & hospitality photography", uk: "Фотографія для готелів та сфери гостинності" },
  // }),
  // set("in-the-studio", "In the Studio", IN_THE_STUDIO[0], IN_THE_STUDIO, {
  //   title: { en: "In the Studio", uk: "У студії" },
  //   subtitle: { en: "Artist & designer", uk: "Митець і дизайнер" },
  // }),
  // set(
  //   "a-french-escape",
  //   "A French Escape",
  //   A_FRENCH_ESCAPE[0],
  //   A_FRENCH_ESCAPE,
  //   {
  //     title: { en: "A French Escape", uk: "Французьке intermezzo" },
  //     subtitle: { en: "Villa & property photography", uk: "Фотографія вілли та нерухомості" },
  //   },
  // ),
  // set("autumn-muse", "Autumn Muse", AUTUMN_MUSE[0], AUTUMN_MUSE, {
  //   title: { en: "Autumn Muse", uk: "Осіння муза" },
  //   subtitle: { en: "Personal branding for a stylist", uk: "Персональний бренд для стиліста" },
  // }),
  // set(
  //   "behind-the-suit",
  //   "Behind the Suit",
  //   BEHIND_THE_SUIT[0],
  //   BEHIND_THE_SUIT,
  //   {
  //     title: { en: "Behind the Suit", uk: "По той бік костюма" },
  //     subtitle: { en: "Crisis & Reputation Advisor", uk: "Радник із кризових комунікацій та репутації" },
  //   },
  // ),
  // set(
  //   "viennese-living",
  //   "Viennese Living",
  //   VIENNESE_LIVING[0],
  //   VIENNESE_LIVING,
  //   {
  //     title: { en: "Viennese Living", uk: "Віденське життя" },
  //     subtitle: { en: "Interior & property photography", uk: "Фотографія інтерʼєрів та нерухомості" },
  //   },
  // ),
  // set(
  //   "italian-countryside",
  //   "Italian Countryside",
  //   ITALIAN_COUNTRYSIDE[0],
  //   ITALIAN_COUNTRYSIDE,
  //   {
  //     title: { en: "Italian Countryside", uk: "Італійська провінція" },
  //     subtitle: { en: "Interior & property photography", uk: "Фотографія інтерʼєрів та нерухомості" },
  //   },
  // ),
];
