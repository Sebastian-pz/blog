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

export function getPostById(lang: string, id: string) {
  const posts = getPosts(lang);
  return posts.find((post) => post.id === id) || posts[0];
}

export function getPostsByType(lang: string, type: PostTypes) {
  return getPosts(lang).filter((post) => post.type === type);
}
