import { useLocale } from "next-intl";
import PersonalizedLink from "./PersonalizedLink";

export default function PostNavigation() {
  const activeLocale = useLocale();

  return (
    <>
      <h2 className="text-center mt-6 text-lg font-bold">
        ¿Quieres ver algo en específico?
      </h2>
      <div className="h-6 mt-3 flex justify-center text-white">
        <PersonalizedLink
          href={`/${activeLocale}/experience`}
          label="Experiencia"
        />
        <PersonalizedLink href={`/${activeLocale}/project`} label="Proyectos" />
        <PersonalizedLink href={`/${activeLocale}/opinion`} label="Opiniones" />
      </div>
    </>
  );
}
