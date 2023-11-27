import { postInterface, PostTypes } from "./interfaces";
import PersonImage from "../../../public/person.jpg";
import BlogPostMedia from "../../../public/blog-post.webp";

export const posts: Array<postInterface> = [
  {
    type: PostTypes.project,
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
    type: PostTypes.opinion,
    title: "The Commit Show de BettaTech y su charla con MiduDev",
    mediaType: "video",
    media: "https://www.youtube.com/embed/fL83GTilWjw",
    image: PersonImage,
    description: [
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos espécimen.",
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
    type: PostTypes.project,
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
    type: PostTypes.project,
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
  {
    type: PostTypes.experience,
    title:
      "¡Ayudé a una empresa internacional utilizando programación con VBA 🦖!",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "Debido a contactos en mi universidad, una empresa se comunicó conmigo para ayudarles a optimizar sus libros de Excel utilizando programación (VBA) a través de macros.",
      "Inicialmente, para 'Empresa A' (como la llamaré para salvaguardar su privacidad), una empresa internacional muy grande en el país, me contactó específicamente una regional para ayudar con un proceso de transición de plataformas por el que estaban pasando.",
      "Había mucha información dispersa en muchas partes, muchos archivos y muchas plataformas.",
      "Mi función fue unificar la información de diferentes Excels y plataformas que tenían los datos de los perfiles de los empleados y crear un algoritmo que se encargara de validar los cargos (comparar el perfil del cargo contra el perfil del empleado).",
      "En el caso de que un empleado NO cumpliera con el perfil del cargo, lo que hacía era alertar al responsable de recursos humanos y lo ponía en una lista de personas que no eran válidas. De ahí se notificaba a cada jefe de sección para que se encargara de mandar al empleado a completar su perfil si el caso así lo requería.",
      "En el caso de que el empleado sí cumpliera con el perfil, se añadía a la lista de los que están en orden o al corriente con la empresa.",
      "De estas dos listas, también se sacaron estadísticas que permitían definir cuáles eran los sectores más afectados y cuáles eran los requisitos que con mayor frecuencia no eran cumplidos correctamente.",
      "Después de haber desarrollado todo el algoritmo para la empresa en VBA, logré optimizar los tiempos de consulta de información de los empleados en más de un 99% (pues antes era buscar Excel por Excel y plataforma por plataforma). Procesos de búsqueda que podían demorar 1 hora y media pasaron a tardar lo de un par de clics.",
      "De esto, cabe resaltar que la empresa intervenida tenía serios problemas en cuanto al cumplimiento de sus perfiles y gracias al desarrollo del programa se logró ir mejorando progresivamente este punto de la empresa para poder responder de mejor manera a sus procesos de auditorias.",
      "Mira el post donde hablo acerca de mi experiencia trabajando para esta empresa:",
      "link",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/26/2023",
  },
  {
    type: PostTypes.experience,
    title:
      "¡Ayudé a crear un mini sistema de ventas, inventarios y nominas utilizando programación en VBA!",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "Intervine en un bar para mejorar su situación y su gestión, la empresa no contaba con ningún sistema de información, no tenía ni inventarios, ni nominas, ni libros contables, ni libros de proveedores, etc.",
      "Inicialmente mi intervención estuvo enfocada en crear un archivo temporal (un algoritmo) para el manejo de las ventas, inventarios y nominas (esto debido a que la empresa ya había pagado para la realización de un software, entonces solo utilizarían este Excel por un periodo corto de tiempo).",
      "Me encargué de crear los algoritmos necesarios para determinar las pagas de cada mesa, la automatización de los descuentos de inventarios y el registro automático del ingreso de efectivo o el incremento en cuentas por cobrar (cosas contables).",
      "Esa fue mi función, sin embargo, surgió la situación de que es muy común que estas cuentas se paguen por separado, por lo que se buscó implementar un algoritmo bajo el cual las mesas se pudiesen pagar de diferentes maneras.",
      "Por poner un ejemplo, en una mesa pidieron 10 botellas de agua, y una persona viene a pagar solo 3 de ellas (es decir, por separado), el siguiente reto, estuvo enfocado en hacer todo eso posible utilizando solo Excel y sus macros, esto debería ser posible y generar un registro de ventas, que se descuente de inventarios y que la cuenta de la mesa ya no sean 10 botellas, sino 7.",
      "Spoiler: suena muy fácil utilizando lenguajes de programación convencionales, pero utilizando Excel y sus macros... Jajaja, al inicio me comió un poco la cabeza.",
      "Realmente el desarrollo de este algoritmo no tuvo una mayor complejidad, fue adaptarse a las necesidades del local y escribir código para cumplir con ello.",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/26/2023",
  },
  {
    type: PostTypes.experience,
    title:
      "Trabajé como programador fullstack en la creación de un e-commerce 🏪",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "Trabajé como programador fullstack en la creación de una plataforma e-commerce de una empresa de suplementos alimentarios y de servicio de ventas de planes alimentarios.",
      "Se me contactó a través de mis contactos para ingresar a ser parte de un grupo de programadores con la finalidad de desarrollar un e-commerce para la empresa argentina Nutrición Vital.",
      "Lo que quería la empresa era expandirse al mercado digital y ofrecerle a sus clientes la opción de visualizar sus productos y comprarlos en línea, con la posibilidad de recibirlos directamente en sus domicilios, para ello, se planteó la creación de un e-commerce desde cero.",
      "Inicialmente, mis responsabilidades comprendieron la creación y optimización del código y del funcionamiento del aplicativo web.",
      "Como fullstack intervine en todo el desarrollo de la aplicación, desde las bases de datos, la creación de la API y la creación del apartado visual de la aplicación (front).",
      "Las tecnologías que utilicé durante el desarrollo de la aplicación fueron TypeScript, NodeJS, Express, React, Bootstrap, Redux, JWT, MercadoPago, gestor de envíos de emails, MongoDB con mongoose.",
      "Entre otras tecnologías.",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/27/2023",
  },
  {
    type: PostTypes.experience,
    title: "Trabajé como programador fullstack para la UCA 🎓",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "En enero de 2023 se me contactó para ser parte de un grupo de programadores para la UCA, de inmediato me sumé y comenzó una nueva etapa en mi carrera como desarrollador web.",
      "Se me contrató como desarrollador fullstack, empleo que tuve hasta julio de 2023 cuando se terminó y se entregó el proyecto.",
      "Trabajé bajo la modalidad Agile, también con mucho pair programming, aprendí y continué mejorando como programador.",
      "El desarrollo del proyecto solicitado duró al rededor de 5 meses, los 2 meses siguientes se enfocaron en personalizar el proyecto y corregir errores que iban surgiendo.",
      "Finalmente, el proyecto se expuso a la universidad y el resultado fue la aprobación unánime. En el semestre 2 (SII-2023) la aplicación entró en producción y empezó a ser utilizada por los estudiantes.",
      "Mis responsabilidades en el proyecto fueron:",
      "✅ Desarrollar las principales funciones de la lógica en el frontend, encargándome de que el código escrito fuese sencillo y escalable.",
      "✅ Conectar el front con la API, creando funciones específicas que se pudieran reutilizar en cada componente de la aplicación para así tener unas mejores prácticas y garantizar que una futura refactorización se pudiese llevar a cabo de manera más sencilla.",
      "✅ Manejar las sesiones de usuario con sus respectivas validaciones, encargarme de que los usuarios tengan las funciones y los renderizados correspondientes a sus roles, además de también implementar un sistema para un desloggeo automático cuando el token expire.",
      "✅ Desarrollar interfaces de usuario limpias, acordes a la naturaleza de la aplicación, que sean intuitivas y que a los usuarios se les haga cómodas de ver y utilizar.",
      "✅ Entre otras funciones como lo eran el manejo de solicitudes, el desarrollo de la API, las conexiones con la base de datos, el sistema de inicio de sesión, etc.",

      "📃 El main Stack que utilicé durante este trabajo fue: TypeScript, NodeJS, React, Express, JWT, sequelize, Redux, Bootstrap.",
      "Sin duda alguna, una de las experiencias en las que más he aprendido como programador.",
      "Solo queda decir gracias a la UCA por brindarme esa oportunidad 💚.",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/27/2023",
  },
  {
    type: PostTypes.project,
    title: "¡Hice mi trabajo de grado con programación!",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "Mi trabajo de grado fue una de las cosas que más inversión de tiempo me significó este año, quería hacer algo significativo y que no fuera tan común de ver.",
      "Para ello, creé un algoritmo basado en 'clases' utilizando TypeScript que permitiera analizar el contenido publicado por marcas en las diferentes redes sociales.",
      "En pocas palabras, este algoritmo busca identificar los patrones de comportamiento, patrones de colores, patrones de periodicidad y en general todo lo relacionado a cómo interactúan los usuarios con las marcas de ropa en las redes sociales.",
      "Gracias a este algoritmo, se identificó que determinadas empresas, según su sector, utilizan una gama de colores principales para sus productos, que la forma en como se publicitan es bastante similar.",
      "Se toman las últimas 150 publicaciones de la empresa que se quiera analizar, a partir de ahí, se divide las publicaciones en categorías (productos, memes o frases) y se extraen los principales colores.",
      "Unos ejemplos de las funciones que tiene el algoritmo son:",
      "✅  Sacar las categorías con el mayor número de interacciones.",
      "✅  Sacar los colores con el mayor número de interacciones.",
      "✅  Sacar las publicaciones con mayor número de interacciones.",
      "✅  Cuál es la periodicidad en días con las que se publica cada tipo de contenido.",
      "✅  Desviaciones y Xi².",
      "✅  Cuál es la perdida potencial de utilizar colores no acordes a la categoría.",
      "✅  Identificación de las categorías utilizadas en las estrategias publicitarias.",

      "Gracias a esta herramienta se puede observar cómo funcionan las estrategias de las empresas que ya están instauradas en el mercado e intentar replicarlas en empresas más pequeñas o que apenas se estén instaurando en el mercado.",

      "En general, provee una visión general de las estrategias de contenido que les sirven a las grandes empresas que ya cuentan con un público establecido.",
      "La parte de la creación de los Tests fue la más satisfactoria...",

      "El algoritmo quedó a disposición de nuestro asesor de trabajo de grado para que lo utilizara con los estudiantes.",
      "Acá puedes ver el repo con toda la información: https://github.com/Sebastian-pz/TDG-2023",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/03/2023",
  },
  {
    type: PostTypes.project,
    title: "¡Creamos una red social inspirada en Twitter (X) 🦆!",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "Para finales del año 2022 les propuse a mis amigos programadores Matias Straface y Mesila Hellrigl hacer una red social inspirada en el entonces Twitter y los primeros días del 2023 nos pusimos manos en ello.",
      "El nombre es directamente una parodia para hacer alusión a que es una copia de Twitter (decidimos nombrarlo Ducker 🦆).",
      "Con los conocimientos que teníamos hasta ese momento realmente no se nos complicó avanzar rápidamente en el proyecto, de hecho, estaba avanzando mucho más rápido de lo que esperábamos.",
      "En un abrir y cerrar de ojos ya habíamos terminado la mayor parte de del backend (en serio, en un par de días de pair programming estaba casi un 90% listo), eso fue la motivación que necesitábamos para meterle más determinación aún a ese proyecto.",
      "Lo siguiente, una vez terminada la API de Ducker, nos metimos directamente con lo visual, queríamos hacerlo muy similar a Twitter; sin embargo, también queríamos experimentar por nuestra cuenta, ver qué podíamos cambiar, qué podíamos llegar a mejorar (desde nuestro punto de vista).",
      "De igual manera que con el back, el front avanzó rápidamente, en cuestión de una semana la mayoría de las vistas estaban hechas, las conexiones con la API estaban listas y ya teníamos listas las funcionalidades principales de realizar Cuaks, dar me gustas, comentar y marcar como favorito.",
      "La siguiente parte que hicimos fue la correspondiente al perfil, el poder personalizar su perfil con foto, nombre, descripción, localización, intereses y demás. Esta parte tampoco significó un mayor reto para el Team Ducker, para este momento ya nos encontrábamos muy cómodos trabajando con el proyecto.",
      "Ya de ahí en adelante fue ir realizando detalles, mejorando apartados visuales y corrigiendo bugs (que sorprendentemente no fueron muchos).",
      "Ah, claro, el Stack es el de siempre: TypeScript, JavaScript, NodeJS, React, SASS, Express, JWT, MongoDB, Google Auth Library, Cors.",
      "Quiero agradecer a mis compañeros de Team Ducker Mati y Meli, primero que todo por sumarse al proyecto, segundo porque al momento de transicionar al front, mis habilidades con el CSS no estaban tan trabajadas como sí lo están ahora, me tuvieron toda la paciencia del mundo y me fueron explicando poco a poco, y tercero, por ser tan buena onda y hacer de este proyecto un trabajo muy ameno y divertido.",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/27/2023",
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
