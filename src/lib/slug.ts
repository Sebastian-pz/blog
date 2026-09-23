/**
 * Published article URLs store the slug this function produced.
 * Changing the stop-word lists would not rewrite those files.
 */
export type SupportedLanguage = 'en' | 'es'

const stopWordsMap: Record<SupportedLanguage, string[]> = {
  es: ['de', 'la', 'el', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'del'],
  en: ['a', 'an', 'the'],
}

function filterCommonWords(phrase: string, lang: string): string {
  if (!phrase || phrase.trim() === '') return ''

  const words = phrase.split(/\s+/).filter((word) => word.length > 0)
  const stopWords = stopWordsMap[lang as SupportedLanguage]
  if (!stopWords) return words.join('-')

  const filteredWords = words.filter((word) => !stopWords.includes(word))
  if (filteredWords.length === 0 && words.length > 0) return words[0]
  return filteredWords.join('-')
}

export function encodeTitle(title: string, lang: string): string {
  if (!title || title.trim() === '') return ''

  const cleanTitle = title
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, ' ')

  return filterCommonWords(cleanTitle, lang)
}
