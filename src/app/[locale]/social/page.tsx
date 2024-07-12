import Link from "next/link";
import URLS from "./Constants";

export default function page() {
  return (
    <section
      id="social"
      className="mx-auto w-full md:w-3/4 lg:w-1/2  p-4 text-center"
    >
      <h1 className="text-center text-2xl font-bold my-4">
        Redes sociales Sebastian Pérez
      </h1>
      <p className="my-4">
        Si bien no suelo publicar muy a menudo puede que encuentres reposts de
        publicaciones útiles o información de interés en mis redes sociales.
      </p>
      <p>
        De vez en cuando estoy mirando publicaciones de los referentes en cuanto
        a muchas tecnologías, mayoritariamente angloparlantes, así que
        probablemente vayas a ver muchas publicaciones en inglés.
      </p>

      <h2 className="mt-12 text-xl font-bold text-center">
        Links a mis principales redes
      </h2>

      <p className="text-center">
        Mi linkedin{" "}
        <Link
          className="font-bold text-primary-color-500 hover:text-primary-color-700"
          href={URLS.GITHUB}
          target="_blank"
        >
          Sebastian Perez Zuluaga
        </Link>
      </p>

      <p className="text-center">
        Puedes encontrar mi twitter (X){" "}
        <Link
          className="font-bold text-primary-color-500 hover:text-primary-color-700"
          href={URLS.GITHUB}
          target="_blank"
        >
          Sebastiantfa
        </Link>
      </p>

      <p className="text-center">
        Puedes ver mi perfil de GitHub{" "}
        <Link
          className="font-bold text-primary-color-500 hover:text-primary-color-700"
          href={URLS.GITHUB}
          target="_blank"
        >
          Sebastian-pz
        </Link>
      </p>

      <h2 className="mt-12 text-xl font-bold text-center">Reconocimientos</h2>
      <p className="text-center">
        Respeto mucho a los creadores de contenido que a través de sus redes
        sociales comparten su conocimiento y ayudan a que la comunidad mejore.
        También a los compañeros que comentan para ayudar a los demás desde el
        respeto 💙💜.
      </p>

      <p className="font-bold my-12 text-center">
        Gracias por llegar hasta acá.
      </p>
    </section>
  );
}
