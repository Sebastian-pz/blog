import { postInterface } from "./interfaces";
import PersonImage from "../../../public/person.jpg";
import BlogPostMedia from "../../../public/blog-post.webp";

export const posts: Array<postInterface> = [
  {
    title: "¡El blog está casi listo 🚀👨🏻‍🚀!",
    mediaType: "image",
    image: BlogPostMedia,
    description: [
      "Enfocado principalmente en las publicaciones tecnológicas y actualizaciones sobre mis proyectos ya está casi completa, quedan pocas cosas que ultimar, pero los detalles y el funcionamiento general de la aplicación ya está completo. ",

      "La creación de la aplicación inició la primera semana de noviembre 2023 y se fue desarrollando poco a poco, después de terminado mi periodo académico en la universidad el proyecto ya estaba casi en su totalidad completo, de hecho, solo faltaba ultimar detalles en cuanto a los estilos.",

      "Inicialmente no se tenía una estimación del tiempo de desarrollo que tomaría este blog, de hecho, el estar tan cerca de los periodos de exámenes finales hacía que realizar presupuestos fuese algo incierto.",

      "Finalmente, a día de hoy 16 de noviembre de 2023, el proyecto ya se encuentra prácticamente terminado.",

      "Las tecnologías utilizadas para este proyecto fueron principalmente TypeScript, NextJS - React, Tailwind para los estilos y ESLint con standard para mejorar el código.",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/16/2023",
  },
  {
    title: "The Commit Show de BettaTech y su charla con MiduDev",
    mediaType: "video",
    media: "https://www.youtube.com/embed/fL83GTilWjw",
    image: PersonImage,
    description: [
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
      "Como programador, llevo siguiendo el contenido de Midudev desde hace años, es uno de mis referentes tecnológicos y con la cual he aprendido mucho.",
      "Durante la charla en The Commit Show de BettaTech, Midu habla de muchos temas referentes al ámbito de la tecnología y programación en general, habla de quién es, de su experiencia y cómo es su perspectiva sobre la actualidad y futuro del mundo del desarrollo.",
      "Uno de los temas más relevantes tratados en esta charla, es el hecho de que cuando un programador está buscando introducirse en el mercado por primera (o primeras) vez, es muy importante llegar a una empresa la cual te ofrezca mentorías, es decir, que tengas a una persona que pueda hacer de guía en tu proceso, siendo esta parte una de las que más se aprende. De hecho, él define que `Es mucho más importante que el sueldo en un inicio`.",
      "Si bien es verdad que la carencia de este mentor hace que el programador desarrolle autosuficiencia, en algunos casos esto tiende a convertirse en una carga mental que afecta la salud y que, a final de cuentas, no vale la pena.",
      "En la charla se tratan otros temas muy importantes a tener en cuenta en el mundo del desarrollo, salarios y quizá lo más importante, ser senior, ¿Qué significa realmente?",
      "Es una charla que en mi opinión está totalmente recomendada y que proporciona un panorama amplio del entorno de la programación.",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/03/2023",
  },
  {
    title: "Creé una aplicación del juego de piedra, papel o tijera",
    mediaType: "image",
    image: PersonImage,
    description: [
      "Creé una aplicación web inspirada en el popular juego de piedra, papel o tijera para poner a prueba mis conocimientos en mis tiempos libres de la universidad y de mis trabajos freelance.",
      "Inicialmente, quería practicar mis habilidades de frontend y me topé con este reto en *frontend mentor*, únicamente estaba enfocado en desarrollar el apartado visual, sin embargo, en mi caso lo que quise fue llevarlo un paso más allá y darle la lógica necesaria para poder jugar realmente.",
      "Lo principal fue desarrollar el apartado visual para probar mis habilidades frontend, como tal. Lo que quería era poner a prueba mis conocimientos de vanilla CSS. Luego, una vez terminado ese apartado, lo que hice fue meterme con el manejo de la lógica.",
      "Para desarrollar el proyecto utilicé las tecnologías: TypeScript como lenguaje de programación, Vite como herramienta de compilación, React como librería principal de desarrollo y CSS vanilla para estilizar la aplicación.",
      "Si quieres ver el juego, acá está: ",
      "https://rps-game-navy.vercel.app/",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/03/2023",
  },
  {
    title: "¡Creé una aplicación de retos matemáticos con tiempo 👨🏻‍🔬⌛!",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "¡Creé un juego de retos de rapidez matemática! Con la finalidad de mejorar el tiempo de respuesta y la asertividad de los estudiantes de mi universidad frente a problemas matemáticos básicos, creé una aplicación para que entrenaran.",
      "La idea surgió de un momento en mis clases de universidad donde querían poner a prueba la fluidez con la que diferentes estudiantes respondíamos con respecto a preguntas matemáticas, en lo personal me fue bien (#humildad), pero a mis compañeros no tanto.",
      "Debido a esto, me surgió la idea de crear una aplicación para practicar la rapidez con la que puedes responder a preguntas matemáticas básicas relacionadas con las operaciones de suma, resta, multiplicación y división, principalmente.",
      "¡Las puntuaciones se van guardando por persona y quedan disponibles para ir comprobando la mejora que tienen los jugadores!",
      "Si quieres acceder al proyecto, acá está:",
      "link",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/03/2023",
  },
];

const defaultPost = posts[0];

export function getPost(id: number) {
  if (isNaN(Number(id))) {
    return defaultPost;
  }

  return posts[id];
}

export function getPosts(limit = 5) {
  return posts.slice(1, limit);
}

export function getMainPost() {
  return posts[0];
}
