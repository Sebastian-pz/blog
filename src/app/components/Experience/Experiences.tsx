import Card from "../Card/Card";

const example = [
  {
    title: "Programador fullstack web",
    description: "Trabajo como desarrollador web para un aplicativo e-commerce",
    dates: "Enero 2023 - Julio 2023",
    link: "/",
  },
  {
    title: "Programador fullstack web",
    description: "Trabajo como desarrollador web para un aplicativo e-commerce",
    dates: "Enero 2023 - Julio 2023",
    link: "/",
  },
  {
    title: "Programador fullstack web",
    description: "Trabajo como desarrollador web para un aplicativo e-commerce",
    dates: "Enero 2023 - Julio 2023",
    link: "/",
  },
];

export default function Experiences() {
  return (
    <section className="mt-8 p-2">
      <h2 className="text-center text-2xl font-semibold">
        Experiencia profesional 👨🏻‍💻
      </h2>
      <div className="flex flex-col lg:flex-row">
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
