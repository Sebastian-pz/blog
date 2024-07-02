import FilteredPosts from "@/components/FilteredPosts/FilteredPosts";
import { getFilteredPosts } from "@/utilities/const";
import { PostTypes } from "@/utilities/interfaces";

export default function page() {
  const posts = getFilteredPosts(PostTypes.opinion);

  return (
    <FilteredPosts
      posts={posts}
      title="Estos son mis opiniones sobre cosas de tecnología en general 🤔"
      description="Acá hablo sobre temas más randoms del mundo de la programación, quizá artículos que me resultan útiles o simplemente interesantes"
    />
  );
}
