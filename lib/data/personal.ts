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
const SISTERHOOD = photosOf(`${P}sisterhood`);
const SUMMER_STORY = photosOf(`${P}summer-story`);
const THE_THREE_OF_US = photosOf(`${P}the-three-of-us`);
const A_VIENNA_ROMANCE = photosOf(`${P}a-vienna-romance`);
const THE_FAMILY_EDIT = photosOf(`${P}the-family-edit`);
const OUR_TOGETHER = photosOf(`${P}our-together`);
const THEE_TWO_OF_US = photosOf(`${P}the-two-of-us`);

export const PERSONAL_SETS = [
  set("sofiia", "Sofiia", SOPHIIA[2], SOPHIIA, {
    title: { en: "Sofiia", uk: "Софія" },
    subtitle: { en: "Autumn Story", uk: "Осінній день" },
  }),
  set("elmira", "Elmira", ELMIRA[10], ELMIRA, {
    title: { en: "Elmira", uk: "Ельміра" },
    subtitle: { en: "City Story", uk: "Міська історія" },
  }),
  set("marina", "Marina", MARINA[4], MARINA, {
    title: { en: "Marina", uk: "Марина" },
    subtitle: { en: "Quiet Story", uk: "Серед осені" },
  }),
  set("yuliia", "Yuliia", YULIIA[2], YULIIA, {
    title: { en: "Yuliia", uk: "Юлія" },
    subtitle: { en: "Intimate Story", uk: "Чуттєвий портрет" },
  }),
  set("Olexandra", "Olexandra", OLEXANDRA[3], OLEXANDRA, {
    title: { en: "Olexandra", uk: "Олександра" },
    subtitle: { en: "Urban Story", uk: "Міський ритм" },
  }),
  set("anna", "Anna", ANNA[12], ANNA, {
    title: { en: "Anna", uk: "Анна" },
    subtitle: { en: "Editorial Story", uk: "Портрет у музеї" },
  }),
  set("viktoriia", "Viktoriia", VIKTORIIA[1], VIKTORIIA, {
    title: { en: "Viktoriia", uk: "Вікторія" },
    subtitle: { en: "Schönbrunn Story", uk: "Шенбрунн" },
  }),
  set("taya", "Taya", TAYA[4], TAYA, {
    title: { en: "Taya", uk: "Тая" },
    subtitle: { en: "Little Vienna Story", uk: "Віденський день" },
  }),
  set("olexandra", "Olexandra Sea", OLEXANDRA_SEA[0], OLEXANDRA_SEA, {
    title: { en: "Olexandra", uk: "Олександра" },
    subtitle: { en: "Stone Story", uk: "Каміння і світло" },
  }),
  set("anastasiia", "Anastasiia", ANASTATSIIA[0], ANASTATSIIA, {
    title: { en: "Anastasiia", uk: "Анастасія" },
    subtitle: { en: "Winter Story", uk: "Зимова історія" },
  }),
  set("natali", "Natali", NATALI[0], NATALI, {
    title: { en: "Natali", uk: "Наталі" },
    subtitle: { en: "Home Story", uk: "Домашня історія" },
  }),
  set("eva", "Eva", EVA[2], EVA, {
    title: { en: "Eva", uk: "Єва" },
    subtitle: { en: "Coastal Story", uk: "Біля моря" },
  }),
  set("natalia", "Natalia", NATALIA[15], NATALIA, {
    title: { en: "Natalia", uk: "Наталя" },
    subtitle: { en: "Vienna Story", uk: "Віденська історія" },
  }),
  set("inna", "Inna", INNA[15], INNA, {
    title: { en: "Inna", uk: "Інна" },
    subtitle: { en: "Odessa Story", uk: "Одеська історія" },
  }),
];
export const COUPLES_SETS = [
  set("sisterhood", "Sisterhood", SISTERHOOD[2], SISTERHOOD, {
    title: { en: "Sisterhood", uk: "Сестри" },
  }),
  set("summer-story", "Summer story", SUMMER_STORY[12], SUMMER_STORY, {
    title: { en: "Summer story", uk: "Літо" },
  }),
  set(
    "the-three-of-us",
    "The Three of Us",
    THE_THREE_OF_US[0],
    THE_THREE_OF_US,
    {
      title: { en: "The Three of Us", uk: "Втрьох" },
    },
  ),
  set(
    "a-vienna-romance",
    "A Vienna Romance",
    A_VIENNA_ROMANCE[18],
    A_VIENNA_ROMANCE,
    {
      title: { en: "A Vienna Romance", uk: "Віденський роман" },
    },
  ),
  set(
    "the-family-edit",
    "The Family Edit",
    THE_FAMILY_EDIT[9],
    THE_FAMILY_EDIT,
    {
      title: { en: "The Family Edit", uk: "Сімейний портрет" },
    },
  ),
  set("our-together", "Our Together", OUR_TOGETHER[12], OUR_TOGETHER, {
    title: { en: "Our Together", uk: "Разом" },
  }),
  set("the-two-of-us", "The Two of Us", THEE_TWO_OF_US[0], THEE_TWO_OF_US, {
    title: { en: "The Two of Us", uk: "Вдвох" },
  }),
];
