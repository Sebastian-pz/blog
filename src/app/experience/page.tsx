import { getFilteredPosts } from "@/utilities/const";
import { PostTypes } from "@/utilities/interfaces";
import FilteredPosts from "@/components/FilteredPosts/FilteredPosts";

export default function page() {
  const posts = getFilteredPosts(PostTypes.experience);

  return (
    <FilteredPosts
      posts={posts}
      title="Mi experiencia trabajando como programador 🧪"
    />
  );
}
