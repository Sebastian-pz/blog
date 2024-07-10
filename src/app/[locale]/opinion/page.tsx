import FilteredPosts from "@/components/FilteredPosts/FilteredPosts";
import { getFilteredPosts } from "@/utilities/const";
import { PostTypes } from "@/utilities/interfaces";

export default function page() {
  const posts = getFilteredPosts(PostTypes.opinion);

  return (
    <FilteredPosts
      posts={posts}
      title="Estos son mis opiniones sobre cosas de tecnología en general 🤔"
      description="La sección de Opinión está más enfocada en exponer mis 'pensamientos' sobre el mundo del desarrollo de software. Hablo sobre unas pocas noticias, tendencias, clean code, buenas prácticas, arquitecturas y demás. Algunos de estos temas aún se escapan a mi dominio, por lo que es muy probable que me apoye de expertos (siempre dejando los créditos a la persona que comparte su conocimiento)."
    />
  );
}
