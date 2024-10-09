import "server-only";

const dictionaries = {
  en: () =>
    import("../../public/dictionaries/en.json").then(
      (module) => module.default
    ),
  uz: () =>
    import("../../public/dictionaries/uz.json").then(
      (module) => module.default
    ),
  ru: () =>
    import("../../public/dictionaries/ru.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale) => {
  const fallbackLocale = "en";
  return dictionaries[locale]
    ? dictionaries[locale]()
    : dictionaries[fallbackLocale]();
};
