import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { test } from 'node:test'
import matter from 'gray-matter'

import { formatPostDate, isIsoDate } from './dates.ts'
import { excerptFromMarkdown } from './excerpt.ts'
import { findById, findBySlug } from './find-post.ts'
import { buildLocaleQuery, postPathForLocale } from './locale-switch.ts'
import { encodeTitle } from './slug.ts'

test('encodeTitle keeps the slug already published for the generative AI article', () => {
  const title =
    'El camino hacia la Implementación de IA Generativa: Mucho más que conectar un modelo'
  assert.equal(
    encodeTitle(title, 'es'),
    'camino-hacia-implementacion-ia-generativa-mucho-mas-que-conectar-modelo',
  )
})

test('encodeTitle drops English stop words and punctuation', () => {
  assert.equal(encodeTitle('The Road to Generative AI!', 'en'), 'road-to-generative-ai')
})

test('encodeTitle keeps one word when the title is only stop words', () => {
  assert.equal(encodeTitle('el la', 'es'), 'el')
  assert.equal(encodeTitle('   ', 'es'), '')
})

test('isIsoDate accepts a real calendar day and rejects the old month/day form', () => {
  assert.equal(isIsoDate('2024-10-07'), true)
  assert.equal(isIsoDate('2024-02-31'), false)
  assert.equal(isIsoDate('10/07/2024'), false)
  assert.equal(isIsoDate('2024-13-01'), false)
})

test('formatPostDate renders the ISO day in the active locale', () => {
  assert.equal(formatPostDate('2024-10-07', 'es'), '7 de octubre de 2024')
  assert.equal(formatPostDate('2024-10-07', 'en'), 'October 7, 2024')
  assert.equal(formatPostDate('10/07/2024', 'en'), '10/07/2024')
})

test('excerptFromMarkdown uses the first paragraph and stops on a word', () => {
  const markdown = '## Ignored\n\nThis is the opening sentence of the article and it keeps going past the limit.'
  const excerpt = excerptFromMarkdown(markdown, 40)
  assert.equal(excerpt.startsWith('This is the opening'), true)
  assert.equal(excerpt.endsWith('…'), true)
  assert.equal(excerpt.includes('Ignored'), false)
})

test('excerptFromMarkdown keeps link text and drops the URL', () => {
  assert.equal(excerptFromMarkdown('Read [the notes](https://example.com) today.'), 'Read the notes today.')
})

test('a missing translation stays on the current article', () => {
  const refs = [{ id: 'only-es', slug: 'solo', locale: 'es' }]
  assert.equal(postPathForLocale('/post/solo', 'es', 'en', refs), null)
  assert.equal(
    postPathForLocale('/post/solo', 'es', 'en', [
      ...refs,
      { id: 'only-es', slug: 'only', locale: 'en' },
    ]),
    '/post/only',
  )
  assert.equal(postPathForLocale('/about', 'es', 'en', refs), '/about')
})

test('archive query keeps page and tag on their own', () => {
  assert.equal(buildLocaleQuery('/q', '2', null), '/q?page=2')
  assert.equal(buildLocaleQuery('/q', null, 'CI/CD'), '/q?tag=CI%2FCD')
  assert.equal(buildLocaleQuery('/q', '2', 'Opinion'), '/q?page=2&tag=Opinion')
})

test('each article file name matches its slug and ids are unique per locale', () => {
  const root = path.join(import.meta.dirname, '../../content')
  for (const locale of ['en', 'es']) {
    const ids = new Set<string>()
    for (const file of fs.readdirSync(path.join(root, locale))) {
      if (!file.endsWith('.mdx')) continue
      const { data } = matter(fs.readFileSync(path.join(root, locale, file), 'utf8'))
      assert.equal(data.slug, file.slice(0, -4))
      assert.equal(typeof data.id, 'string')
      assert.equal(ids.has(data.id), false)
      ids.add(data.id)
    }
  }
})

test('a missed slug or id is null', () => {
  const posts = [{ id: 'a', slug: 'alpha' }]
  assert.equal(findBySlug(posts, 'missing'), null)
  assert.equal(findBySlug(posts, 'alpha')?.id, 'a')
  assert.equal(findById(posts, 'nope'), null)
  assert.equal(findById(posts, 'a')?.slug, 'alpha')
})
