import { photosOf, set } from "./galleries";

const P = "personal/";

const SOPHIIA = photosOf(`${P}sophiia`);
const ELMIRA = photosOf(`${P}2`);
const MARINA = photosOf(`${P}3`);
const YULIIA = photosOf(`${P}4`);
const OLEXANDRA = photosOf(`${P}5`);
const ANNA = photosOf(`${P}6`);
const VIKTORIIA = photosOf(`${P}7`);
const TAYA = photosOf(`${P}8`);
const OLEXANDRA_SEA = photosOf(`${P}9`);
const ANASTATSIIA = photosOf(`${P}10`);
const NATALI = photosOf(`${P}11`);
const EVA = photosOf(`${P}12`);
const NATALIA = photosOf(`${P}13`);
const INNA = photosOf(`${P}14`);

export const PERSONAL_SETS = [
  set("sofiia", "Sofiia", SOPHIIA[2], SOPHIIA, {
    title: { en: "Sofiia", uk: "Софія" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("Elmira", "Elmira", ELMIRA[10], ELMIRA, {
    title: { en: "Elmira", uk: "Ельміра" },
    subtitle: { en: "Street", uk: "Стріт-стайл" },
  }),
  set("Marina", "Marina", MARINA[4], MARINA, {
    title: { en: "Marina", uk: "Марина" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("Yuliia", "Yuliia", YULIIA[2], YULIIA, {
    title: { en: "Yuliia", uk: "Юлія" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("Olexandra", "Olexandra", OLEXANDRA[3], OLEXANDRA, {
    title: { en: "Olexandra", uk: "Олександра" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("Anna", "Anna", ANNA[12], ANNA, {
    title: { en: "Anna", uk: "Анна" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("Viktoriia", "Viktoriia", VIKTORIIA[1], VIKTORIIA, {
    title: { en: "Viktoriia", uk: "Вікторія" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("Taya", "Taya", TAYA[4], TAYA, {
    title: { en: "Taya", uk: "Тая" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("Olexandra", "Olexandra Sea", OLEXANDRA_SEA[0], OLEXANDRA_SEA, {
    title: { en: "Olexandra", uk: "Олександра" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("Anastasiia", "Anastasiia", ANASTATSIIA[0], ANASTATSIIA, {
    title: { en: "Anastasiia", uk: "Анастасія" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("Natali", "Natali", NATALI[0], NATALI, {
    title: { en: "Natali", uk: "Наталі" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("Eva", "Eva", EVA[2], EVA, {
    title: { en: "Eva", uk: "Єва" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("Natalia", "Natalia", NATALIA[15], NATALIA, {
    title: { en: "Natalia", uk: "Наталя" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("Inna", "Inna", INNA[15], INNA, {
    title: { en: "Inna", uk: "Інна" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
];
export const COUPLES_SETS = [
  set("sofiia", "Sofiia", SOPHIIA[1], SOPHIIA, {
    title: { en: "Sofiia", uk: "Софія" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("sofiia", "Sofiia", SOPHIIA[1], SOPHIIA, {
    title: { en: "Sofiia", uk: "Софія" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
  set("sofiia", "Sofiia", SOPHIIA[1], SOPHIIA, {
    title: { en: "Sofiia", uk: "Софія" },
    subtitle: { en: "Portrait session", uk: "Портретна зйомка" },
  }),
];
