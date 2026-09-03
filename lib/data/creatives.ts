import { photosOf, set } from "./galleries";

const C = "creatives/";

const THEATRE_STORY = photosOf(`${C}theatre-story`);
const DANCE_IN_LIGHT = photosOf(`${C}dance-in-light`);
const HIS_OWN_STAGE = photosOf(`${C}his-own-stage`);
const URBAN_MOTION = photosOf(`${C}urban-motion`);
export const THE_BODY_SPEAKS = photosOf(`${C}the-body-speaks`); //THE_BODY_SPEAKS[11]
const THE_MUSE = photosOf(`${C}the-muse`);
const IN_TRANSIT = photosOf(`${C}in-transit`);
export const IN_FORM = photosOf(`${C}in-form`);
const POETRY_IN_MOTION = photosOf(`${C}poetry-in-motion`);
const IN_THE_SHADOWS = photosOf(`${C}in-the-shadows`);
const CITY_AS_STAGE = photosOf(`${C}city-as-stage`);

export const CREATIVES_SETS = [
  set("theatre-story", "Theatre Story", THEATRE_STORY[1], THEATRE_STORY, {
    title: { en: "Theatre Story", uk: "Title" },
  }),
  set("dance-in-light", "Dance in Light", DANCE_IN_LIGHT[7], DANCE_IN_LIGHT, {
    title: { en: "Dance in Light", uk: "Title" },
  }),
  set("his-own-stage", "His Own Stage", HIS_OWN_STAGE[12], HIS_OWN_STAGE, {
    title: { en: "His Own Stage", uk: "Title" },
  }),
  set("urban-motion", "Urban Motion", URBAN_MOTION[6], URBAN_MOTION, {
    title: { en: "Urban Motion", uk: "Title" },
  }),
  set(
    "the-body-speaks",
    "The Body Speaks",
    THE_BODY_SPEAKS[0],
    THE_BODY_SPEAKS,
    {
      title: { en: "The Body Speaks", uk: "Title" },
    },
  ),
  set("the-muse", "The Muse", THE_MUSE[2], THE_MUSE, {
    title: { en: "The Muse", uk: "Title" },
  }),
  set("in-transit", "In Transit", IN_TRANSIT[0], IN_TRANSIT, {
    title: { en: "In Transit", uk: "Title" },
  }),
  set("in-form", "In Form", IN_FORM[1], IN_FORM, {
    title: { en: "In Form", uk: "Title" },
  }),
  set(
    "poetry-in-motion",
    "Poetry in Motion",
    POETRY_IN_MOTION[4],
    POETRY_IN_MOTION,
    {
      title: { en: "Poetry in Motion", uk: "Title" },
    },
  ),
  set("in-the-shadows", "In the Shadows", IN_THE_SHADOWS[0], IN_THE_SHADOWS, {
    title: { en: "In the Shadows", uk: "Title" },
  }),
  set("city-as-stage", "Ciy as Stage", CITY_AS_STAGE[0], CITY_AS_STAGE, {
    title: { en: "Ciy as Stage", uk: "Title" },
  }),
];
