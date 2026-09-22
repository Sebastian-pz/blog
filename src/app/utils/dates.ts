/**
 * Posts store dates as MM/DD/YYYY. `<time dateTime>` needs YYYY-MM-DD.
 * Returns undefined when the value is not that shape.
 */
export function toDateTimeAttribute(value: string): string | undefined {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value.trim())
  if (!match) return undefined

  const month = Number(match[1])
  const day = Number(match[2])
  if (month < 1 || month > 12 || day < 1 || day > 31) return undefined

  return `${match[3]}-${match[1]}-${match[2]}`
}
