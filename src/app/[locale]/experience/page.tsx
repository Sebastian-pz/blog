import { getFilteredPosts } from "@/utilities/const";
import { PostTypes } from "@/utilities/interfaces";
import FilteredPosts from "@/components/FilteredPosts/FilteredPosts";

export default function page() {
  const posts = getFilteredPosts(PostTypes.experience);

  return (
    <FilteredPosts
      posts={posts}
      title="Mi experiencia trabajando como programador 🧪"
      description="En esta sección de Experiencia relato mi trayectoria profesional en el campo del desarrollo de software. A través de estos posts, comparto mis vivencias en diferentes proyectos, equipos y organizaciones, hablo de las tecnologías y metodologías que he utilizado, y, aunque hago mención de temas un poco técnicos, mi enfoque es más narrativo para ofrecer una visión general de mi recorrido y aprendizajes."
    />
  );
}
