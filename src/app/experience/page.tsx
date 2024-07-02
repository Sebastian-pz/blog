import { getFilteredPosts } from "@/utilities/const";
import { PostTypes } from "@/utilities/interfaces";
import FilteredPosts from "@/components/FilteredPosts/FilteredPosts";

export default function page() {
  const posts = getFilteredPosts(PostTypes.experience);

  return (
    <FilteredPosts
      posts={posts}
      title="Mi experiencia trabajando como programador 🧪"
      description="Posts sobre mi experiencia laboral en los que cuento cómo se ha ido desarrollando mi carrera profesional desde el inicio. "
    />
  );
}
