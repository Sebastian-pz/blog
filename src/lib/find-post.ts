export function findBySlug<T extends { slug: string }>(posts: T[], slug: string): T | null {
  return posts.find((post) => post.slug === slug) ?? null
}

export function findById<T extends { slug: string; id: string }>(
  posts: T[],
  id: string,
): T | null {
  return posts.find((post) => post.id === id) ?? null
}
