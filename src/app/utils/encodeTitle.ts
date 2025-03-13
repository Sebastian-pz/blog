import { englishStopWords, spanishStopWords } from './defaultStopWords'

const stopWordsMap = {
  es: spanishStopWords,
  en: englishStopWords,
}

function filterCommonWords(phrase: string, lang: string) {
  const words = phrase.split(/\s+/)
  const stopWords = stopWordsMap[lang as keyof typeof stopWordsMap]

  if (!stopWords) {
    return words.join('-') // Default behavior if language is not supported
  }

  const filteredWords = words.filter((word) => !stopWords.includes(word))
  return filteredWords.join('-')
}

export function encodeTitle(title: string, lang: string): string {
  if (!title) {
    return ''
  }

  const cleanTitle = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9\s-]/g, '')

  return filterCommonWords(cleanTitle, lang)
}
