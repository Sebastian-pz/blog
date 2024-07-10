import { postInterface, PostTypes } from "./interfaces";

import { posts as PostsInSpanish } from "./locale/es/posts";
import { posts as PostsInEnglish } from "./locale/en/posts";

let posts: Array<postInterface> = PostsInSpanish;
let defaultPost = posts[0];

function loadPosts(locale: string) {
  switch (locale) {
    case "es":
      posts = PostsInSpanish;
      defaultPost = posts[0];
      return posts;
    case "en":
      posts = PostsInEnglish;
      defaultPost = posts[0];
      return posts;
    default:
      defaultPost = posts[0];
      return posts;
  }
}

export function getPosts(locale: string, limit = 5) {
  loadPosts(locale);
  return posts.slice(1, limit);
}
export function getPost(locale: string, id: string) {
  loadPosts(locale);
  return posts.find((post, index) => post.id === id) || defaultPost;
}

export function getMainPost(locale: string) {
  loadPosts(locale);
  return posts[0];
}

export function getFilteredPosts(filter: PostTypes, limit = 5) {
  const filteredPosts = posts.filter((post) => post.type === filter);
  if (!filteredPosts.length) return getPosts("default", limit);
  return filteredPosts;
}

export function getRandomPost() {
  const post = posts[Math.floor(Math.random() * posts.length)];
  return post.id;
}

/*

Utilizar funciones con nombres dentro del hook useEffect de react suena un poco... raro ¿no? Pues no, o al menos no lo es para Cory House.
LINK: 
*/
