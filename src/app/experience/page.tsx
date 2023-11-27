import { getFilteredPosts } from "../utils/const";
import { PostTypes } from "../utils/interfaces";
import FilteredPosts from "../components/FilteredPosts/FilteredPosts";

export default function page() {
  const posts = getFilteredPosts(PostTypes.experience);

  return (
    <FilteredPosts
      posts={posts}
      title="Mi experiencia trabajando como programador 🧪"
    />
  );
}
