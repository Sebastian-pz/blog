const MARKDOWN_IMAGE = /!\[[^\]]*]\([^)]*\)/g
const MARKDOWN_LINK = /\[([^\]]+)]\([^)]*\)/g
const HEADING = /^#{1,6}\s+/gm
const BLOCKQUOTE = /^>\s?/gm

export function excerptFromMarkdown(markdown: string, limit = 160): string {
  const plain = markdown
    .replace(MARKDOWN_IMAGE, '')
    .replace(MARKDOWN_LINK, '$1')
    .replace(BLOCKQUOTE, '')
    .replace(HEADING, '')
    .replace(/[*_`]/g, '')
    .split(/\n{2,}/)
    .map((block) => block.replace(/\s+/g, ' ').trim())
    .find((block) => block.length > 0)

  if (!plain) return ''
  if (plain.length <= limit) return plain

  const cut = plain.slice(0, limit)
  const lastSpace = cut.lastIndexOf(' ')
  const trimmed = (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trimEnd()
  return `${trimmed}…`
}
