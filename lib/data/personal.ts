import { photosOf, set } from "./galleries";

const P = "personal/";

const SOPHIIA = photosOf(`${P}sophiia`);
const ELMIRA = photosOf(`${P}elmira`);
const MARINA = photosOf(`${P}marina`);
const YULIIA = photosOf(`${P}yuliia`);
const OLEXANDRA = photosOf(`${P}olexandra`);
const ANNA = photosOf(`${P}anna`);
const VIKTORIIA = photosOf(`${P}viktoriia`);
const TAYA = photosOf(`${P}taya`);
const OLEXANDRA_SEA = photosOf(`${P}olexandra-sea`);
const ANASTATSIIA = photosOf(`${P}anastasiia`);
const NATALI = photosOf(`${P}natali`);
const EVA = photosOf(`${P}eva`);
const NATALIA = photosOf(`${P}natalia`);
const INNA = photosOf(`${P}inna`);

export const PERSONAL_SETS = [
  set("sofiia", "Sofiia", SOPHIIA[2], SOPHIIA, {
    title: { en: "Sofiia", uk: "Софія" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("elmira", "Elmira", ELMIRA[10], ELMIRA, {
    title: { en: "Elmira", uk: "Ельміра" },
    subtitle: { en: "Street", uk: "Стріт-стайл" },
  }),
  set("marina", "Marina", MARINA[4], MARINA, {
    title: { en: "Marina", uk: "Марина" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("yuliia", "Yuliia", YULIIA[2], YULIIA, {
    title: { en: "Yuliia", uk: "Юлія" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("Olexandra", "Olexandra", OLEXANDRA[3], OLEXANDRA, {
    title: { en: "Olexandra", uk: "Олександра" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("anna", "Anna", ANNA[12], ANNA, {
    title: { en: "Anna", uk: "Анна" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("viktoriia", "Viktoriia", VIKTORIIA[1], VIKTORIIA, {
    title: { en: "Viktoriia", uk: "Вікторія" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("taya", "Taya", TAYA[4], TAYA, {
    title: { en: "Taya", uk: "Тая" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("olexandra", "Olexandra Sea", OLEXANDRA_SEA[0], OLEXANDRA_SEA, {
    title: { en: "Olexandra", uk: "Олександра" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("anastasiia", "Anastasiia", ANASTATSIIA[0], ANASTATSIIA, {
    title: { en: "Anastasiia", uk: "Анастасія" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("natali", "Natali", NATALI[0], NATALI, {
    title: { en: "Natali", uk: "Наталі" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("eva", "Eva", EVA[2], EVA, {
    title: { en: "Eva", uk: "Єва" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("natalia", "Natalia", NATALIA[15], NATALIA, {
    title: { en: "Natalia", uk: "Наталя" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("inna", "Inna", INNA[15], INNA, {
    title: { en: "Inna", uk: "Інна" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
];
export const COUPLES_SETS = [
  set("sofiia", "Sofiia", SOPHIIA[2], SOPHIIA, {
    title: { en: "Sofiia", uk: "Софія" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
];
