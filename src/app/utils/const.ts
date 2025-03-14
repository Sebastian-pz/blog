import { PostTypes, postInterface } from './interfaces';
import { posts as PostsInSpanish } from './locale/es/posts';
import { posts as PostsInEnglish } from './locale/en/posts';
import { encodeTitle } from './encodeTitle';

/**
 * Default number of posts to display per page
 */
export const DEFAULT_POST_LIMIT = 9;

/**
 * Supported language codes
 */
export type SupportedLanguage = 'en' | 'es';

/**
 * Interface for query filter parameters
 */
export interface PostQueryFilter {
  page: number;
  tag?: string | null;
}

/**
 * Interface for filtered posts result
 */
export interface FilteredPostsResult {
  totalPosts: number;
  posts: postInterface[];
}

/**
 * Get all posts for a specific language
 * @param lang - Language code ('en' or 'es')
 * @returns Array of posts for the specified language
 */
export function getPosts(lang: string): postInterface[] {
  switch (lang) {
    case 'es':
      return PostsInSpanish;
    case 'en':
      return PostsInEnglish;
    default:
      return PostsInEnglish; // Fallback to English
  }
}

/**
 * Get filtered posts based on query parameters
 * @param lang - Language code ('en' or 'es')
 * @param query - Query filter parameters
 * @returns Filtered posts and total count
 */
export function getFilteredPosts(lang: string, query: PostQueryFilter): FilteredPostsResult {
  let posts = getPosts(lang);
  let { tag, page = 1 } = query;

  // Ensure page is a valid number
  if (isNaN(page) || page < 1) {
    page = 1;
  }

  // Filter by tag if provided
  if (tag) {
    posts = posts.filter((post) => post.tags.includes(tag));
  }

  const totalPosts = posts.length;
  const postsThisPage = posts.slice(
    (page - 1) * DEFAULT_POST_LIMIT,
    page * DEFAULT_POST_LIMIT
  );

  return {
    totalPosts,
    posts: postsThisPage,
  };
}

/**
 * Get a post by its ID
 * @param lang - Language code ('en' or 'es')
 * @param id - Post ID
 * @returns The post with the specified ID or the first post if not found
 */
export function getPostById(lang: string, id: string): postInterface {
  const posts = getPosts(lang);
  const foundPost = posts.find((post) => post.id === id);
  
  if (!foundPost) {
    console.warn(`Post with ID ${id} not found, returning first post as fallback`);
    return posts[0];
  }
  
  return foundPost;
}

/**
 * Get a post by its encoded title
 * @param lang - Language code ('en' or 'es')
 * @param title - Encoded post title
 * @returns The post with the specified title or the first post if not found
 */
export function getPostByTitle(lang: string, title: string): postInterface {
  const posts = getPosts(lang);
  const foundPost = posts.find((post) => encodeTitle(post.title, lang) === title);
  
  if (!foundPost) {
    console.warn(`Post with title ${title} not found, returning first post as fallback`);
    return posts[0];
  }
  
  return foundPost;
}

/**
 * Get all posts of a specific type
 * @param lang - Language code ('en' or 'es')
 * @param type - Post type (experience, opinion, project)
 * @returns Array of posts of the specified type
 */
export function getPostsByType(lang: string, type: PostTypes): postInterface[] {
  return getPosts(lang).filter((post) => post.type === type);
}

/**
 * Search posts by title
 * @param lang - Language code ('en' or 'es')
 * @param search - Search query string
 * @returns Array of posts that match the search query
 */
export function searchPosts(lang: string, search: string): postInterface[] {
  if (!search || search.trim() === '') {
    return [];
  }
  
  const normalizedSearch = search.toLowerCase().trim();
  return getPosts(lang).filter((post) =>
    post.title.toLowerCase().includes(normalizedSearch)
  );
}
