import FilteredPosts from "@/components/FilteredPosts/FilteredPosts";
import { getFilteredPosts } from "@/utilities/const";
import { PostTypes } from "@/utilities/interfaces";

export default function page() {
  const posts = getFilteredPosts(PostTypes.project);

  return (
    <FilteredPosts
      posts={posts}
      title="Estos son los proyectos en los que he trabajado 👷🏻‍♂️"
      description="En esta sección expongo mis proyectos personales en el desarrollo de aplicaciones de todo tipo. Estos son proyectos que he desarrollado por pasión y curiosidad, con el objetivo de aprender y dominar nuevas herramientas (o simplemente por hobby). Aquí se muestra cómo puedo estar creado gestores en Excel con VBA y luego estar creando Bots utilizando Python."
    />
  );
}
