import { englishStopWords, spanishStopWords } from './defaultStopWords'

/**
 * Supported language codes for stop word filtering
 */
export type SupportedLanguage = 'en' | 'es';

/**
 * Map of stop words by language code
 */
const stopWordsMap: Record<SupportedLanguage, string[]> = {
  es: spanishStopWords,
  en: englishStopWords,
}

/**
 * Filters common stop words from a phrase and joins the remaining words with hyphens
 * 
 * @param phrase - The phrase to filter stop words from
 * @param lang - The language code to determine which stop words to use
 * @returns A hyphen-joined string of filtered words
 */
function filterCommonWords(phrase: string, lang: string): string {
  if (!phrase || phrase.trim() === '') {
    return ''
  }

  const words = phrase.split(/\s+/).filter(word => word.length > 0)
  
  // Safely access stop words with type checking
  const stopWords = stopWordsMap[lang as SupportedLanguage]

  if (!stopWords) {
    return words.join('-') // Default behavior if language is not supported
  }

  const filteredWords = words.filter((word) => !stopWords.includes(word))
  
  // If all words were stop words, return at least one word to avoid empty slugs
  if (filteredWords.length === 0 && words.length > 0) {
    return words[0]
  }
  
  return filteredWords.join('-')
}

/**
 * Encodes a title into a URL-friendly slug by removing accents, special characters,
 * and common stop words based on the specified language
 * 
 * @param title - The title to encode
 * @param lang - The language code ('en' or 'es') to determine which stop words to filter
 * @returns A URL-friendly slug version of the title
 */
export function encodeTitle(title: string, lang: string): string {
  if (!title || title.trim() === '') {
    return ''
  }

  // Normalize and clean the title
  const cleanTitle = title
    .toLowerCase()
    .trim()
    .normalize('NFD') // Normalize Unicode characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, ' ') // Replace multiple spaces with a single space

  return filterCommonWords(cleanTitle, lang)
}
