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
    ],

    author: "Sebastian Pérez",
    creationDate: "11/03/2023",
  },
  {
    title: "Nueva publicación en el blog 3",
    mediaType: "image",
    image: PersonImage,
    description: [
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
      " No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/03/2023",
  },
  {
    title: "Nueva publicación en el blog 4",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
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
