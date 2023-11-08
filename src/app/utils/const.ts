import { postInterface } from "./interfaces";
import PersonImage from "../../../public/person.jpg";

export function getPost(id: number) {
  return posts[id];
}

export const posts: Array<postInterface> = [
  {
    title: "Nueva publicación en el blog",
    image: PersonImage,
    description: [
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/03/2023",
  },
  {
    title: "Nueva publicación en el blog 2",
    image: PersonImage,
    description: [
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/03/2023",
  },
  {
    title: "Nueva publicación en el blog 3",
    image: PersonImage,
    description: [
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, dolor dolores amet mollitia fugiat debitis sequi ad harum, earum quidem,possimus nihil neque hic quas obcaecati magni impedit rem!",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/03/2023",
  },
  {
    title: "Nueva publicación en el blog 4",
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
