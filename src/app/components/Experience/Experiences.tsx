import Card from "@/components/Card/Card";
import EXPERIENCES from "@/utilities/ExperiencesConst";
import { useTranslations } from "next-intl";

export default function Experiences() {
  const t = useTranslations("aboutExperience");

  return (
    <section className="mt-8 p-2">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold ">
        {t("title")}
      </h2>
      <p className="text-center my-4">{t("note")}</p>
      <section className="flex flex-col w-full justify-center items-center md:px-4 lg:px-10">
        {EXPERIENCES.map((experience, index) => {
          return (
            <Card
              responsibilities={experience.responsibilities}
              title={experience.title}
              description={experience.description}
              dates={experience.dates}
              link={experience.link}
              key={index}
            />
          );
        })}
      </section>
    </section>
  );
}
