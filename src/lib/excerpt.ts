const MARKDOWN_IMAGE = /!\[[^\]]*]\([^)]*\)/g
const MARKDOWN_LINK = /\[([^\]]+)]\([^)]*\)/g

function plainText(block: string): string {
  return block
    .replace(MARKDOWN_IMAGE, '')
    .replace(MARKDOWN_LINK, '$1')
    .replace(/^>\s?/gm, '')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function excerptFromMarkdown(markdown: string, limit = 160): string {
  const paragraph = markdown
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0 && !block.startsWith('#') && !block.startsWith('!['))
    .map(plainText)
    .find((block) => block.length > 0)

  if (!paragraph) return ''
  if (paragraph.length <= limit) return paragraph

  const cut = paragraph.slice(0, limit)
  const lastSpace = cut.lastIndexOf(' ')
  const trimmed = (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trimEnd()
  return `${trimmed}…`
}
