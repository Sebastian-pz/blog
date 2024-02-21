import ProjectCard from "@/components/ProjectCard/ProjectCard";

const example = [
  {
    title: "Ducker",
    description: "Trabajo como desarrollador web para un aplicativo e-commerce",
    dates: "Enero 2023 - Julio 2023",
    link: "/",
  },
  {
    title: "RockStar Place",
    description: "Trabajo como desarrollador web para un aplicativo e-commerce",
    dates: "Enero 2023 - Julio 2023",
    link: "/",
  },
  {
    title: "Rock Paper Scissors game",
    description: "Trabajo como desarrollador web para un aplicativo e-commerce",
    dates: "Enero 2023 - Julio 2023",
    link: "/",
  },
  {
    title: "Mi blog",
    description: "Trabajo como desarrollador web para un aplicativo e-commerce",
    dates: "Enero 2023 - Julio 2023",
    link: "/",
  },
  {
    title: "Math Challenge",
    description: "Trabajo como desarrollador web para un aplicativo e-commerce",
    dates: "Enero 2023 - Julio 2023",
    link: "/",
  },
  // {
  //   title: "Tetris",
  //   description: "Trabajo como desarrollador web para un aplicativo e-commerce",
  //   dates: "Enero 2023 - Julio 2023",
  //   link: "/",
  // },
];

export default function Projects() {
  return (
    <section className="mt-8 p-2">
      <h2 className="text-center text-2xl font-bold">
        ¡Proyectos que he creado!
      </h2>
      <p className="text-sm text-slate-500 text-center text-balanced">
        Solo aparecerán los últimos que hice o los más relevantes
      </p>
      <div className="flex flex-wrap w-full justify-center items-center md:px-4 lg:px-10">
        {example.map((experience, index) => {
          return (
            <ProjectCard
              title={experience.title}
              description={experience.description}
              dates={experience.dates}
              link={experience.link}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}
