import ProjectCard from "@/components/ProjectCard/ProjectCard";
import PROJECTS from "@/utilities/ProjectsConstants";

export default function Projects() {
  return (
    <section className="my-8 p-2">
      <h2 className="text-center text-2xl font-bold">
        ¡Proyectos que he creado!
      </h2>
      <p className="text-sm text-slate-500 text-center text-balanced">
        Solo aparecerán los últimos que hice o los más relevantes
      </p>
      <div className="flex flex-wrap w-full justify-center items-center md:px-4 lg:px-10">
        {PROJECTS.map((project, index) => {
          return (
            <ProjectCard
              title={project.title}
              description={project.description}
              dates={project.dates}
              link={project.link}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}
