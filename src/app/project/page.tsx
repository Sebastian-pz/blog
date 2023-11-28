import FilteredPosts from "../components/FilteredPosts/FilteredPosts";
import { getFilteredPosts } from "../utils/const";
import { PostTypes } from "../utils/interfaces";

export default function page() {
  const posts = getFilteredPosts(PostTypes.project);

  return (
    <FilteredPosts
      posts={posts}
      title="Estos son los proyectos en los que he trabajado 👷🏻‍♂️"
    />
  );
}
