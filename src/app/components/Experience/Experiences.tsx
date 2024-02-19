import Card from "@/components/Card/Card";

const example = [
  {
    title: "Programador fullstack web",
    description: "Trabajo como desarrollador web para un aplicativo e-commerce",
    dates: "Enero 2023 - Junio 2023",
    link: "/",
  },
  {
    title: "Fullstack web developer",
    description: "Trabajo como desarrollador web para un aplicativo e-commerce",
    dates: "Marzo 2023 - Julio 2023",
    link: "/",
  },
  {
    title: "Jr. fullstack web developer",
    description: "Trabajo como desarrollador web para un aplicativo e-commerce",
    dates: "Enero 2023 - Julio 2023",
    link: "/",
  },
];

export default function Experiences() {
  return (
    <section className="mt-8 p-2">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold ">
        Experiencia profesional
      </h2>
      <p className="text-center my-4">
        ¡Si quieres ver más info puedes hacer click en ella!
      </p>
      <div className="flex flex-col w-full justify-center items-center md:px-4 lg:px-10">
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
