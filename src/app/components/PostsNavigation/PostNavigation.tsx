import Link from "next/link";

import PersonalizedLink from "./PersonalizedLink";

export default function PostNavigation() {
  return (
    <>
      <h2 className="text-center mt-6 text-lg font-bold">
        ¿Quieres ver algo en específico?
      </h2>
      <div className="h-6 mt-3 flex justify-center">
        <PersonalizedLink href="/experience" label="Experiencia" />
        <PersonalizedLink href="/project" label="Proyectos" />
        <PersonalizedLink href="/opinion" label="Opiniones" />
      </div>
    </>
  );
}
