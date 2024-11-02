export function t(text: string) {
  // should use i18n library here to translate text to the user's language
  // but for the sake of this example, we will just return the text as is
  return text;
}

export function getLocales(): string | string[] {
  // should use i18n library here to get the user's locales
  // but for the sake of this example, we will just return "en-GB"
  return navigator.language;
}
