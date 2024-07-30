import { PostTypes } from "./interfaces";

import { posts as PostsInSpanish } from "./locale/es/posts";
import { posts as PostsInEnglish } from "./locale/en/posts";

export function getPosts(lang: string) {
  switch (lang) {
    case "es":
      return PostsInSpanish;
    case "en":
      return PostsInEnglish;
    default:
      return PostsInEnglish;
  }
}

export interface queryFilterI {
  page: number;
  tag?: string | null;
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getFilteredPosts(lang: string, query: queryFilterI) {
  const filterLimit = 9;
  let posts = getPosts(lang);
  let { tag, page = 1 } = query;

  if (isNaN(page)) page = 1;
  if (tag) posts = posts.filter((post) => tag && post.tags.includes(tag));

  const totalPostsByTag = posts.length;

  posts = posts.slice((page - 1) * filterLimit, page * filterLimit);

  return {
    totalPosts: totalPostsByTag,
    posts,
  };
}

export function getPostById(lang: string, id: string) {
  const posts = getPosts(lang);
  return posts.find((post) => post.id === id) || posts[0];
}

export function getPostsByType(lang: string, type: PostTypes) {
  return getPosts(lang).filter((post) => post.type === type);
}

export function searchPosts(lang: string, search: string) {
  return getPosts(lang).filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
}
