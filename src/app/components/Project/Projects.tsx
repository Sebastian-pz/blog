import Card from "@/components/Card/Card";

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
        ¡Proyectos que he creado 😬!
      </h2>
      <div className="flex flex-col flex-wrap lg:flex-row">
        {example.map((experience, index) => {
          return (
            <Card
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
