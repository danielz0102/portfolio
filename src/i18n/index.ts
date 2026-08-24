import en from "./en.json"
import es from "./es.json"

const dictionaries = { en, es } as const

export type Locale = keyof typeof dictionaries
export type Translations = typeof en

export function getTranslations(locale: Locale = "en"): Translations {
	return dictionaries[locale]
}
