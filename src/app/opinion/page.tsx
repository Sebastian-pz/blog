import FilteredPosts from "../components/FilteredPosts/FilteredPosts";
import { getFilteredPosts } from "../utils/const";
import { PostTypes } from "../utils/interfaces";

export default function page() {
  const posts = getFilteredPosts(PostTypes.opinion);

  return (
    <FilteredPosts
      posts={posts}
      title="Estos son mis opiniones sobre cosas de tecnología en general 🤔"
    />
  );
}
