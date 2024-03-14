import { postInterface, PostTypes } from "./interfaces";
import PersonImage from "@/public/person.jpg";
import BlogPostMedia from "@/public/blog-post.webp";
import useEffectImg from "@/public/blog/useEffect.webp";

export const posts: Array<postInterface> = [
  {
    id: "1d0d966b84354712b92c359cc28a06c2",
    type: PostTypes.experience,
    title:
      "¡💥 Trabajé para BB- Bar en la creación de una aplicación fullstack para gestionar ventas e inventarios 💥!",
    mediaType: "video",
    media: "https://www.youtube.com/embed/fL83GTilWjw",
    image: BlogPostMedia,
    description: [
      "Creé una aplicación web FullStack que se encarga de gestionar las ventas, costos, gastos e inventarios de un bar, logrando de este modo facilitar los procesos de la tienda.",

      "Inicialmente, en noviembre, debido a una persona en común se me contactó para preguntarme acerca de unos determinados procesos administrativos del bar en cuestión, durante mis observaciones se me comentó el hecho de que estaban creando un software específico para el tema de manejo de ventas (como lo mencioné en un post anterior en el blog). ",

      "Como el software ya estaba siendo construido, mi participación en el proceso se limitó únicamente en crear un Excel que sirviera para solventar el problema de gestión en ventas e inventarios momentáneamente, sin embargo, a finales de noviembre, inicios de diciembre me hicieron llegar la información restante del proyecto.",

      "La idea que tenia el bar era que les crearan un software propio para la gestión única del local, sin embargo, les estaban vendiendo la licencia de un programa ya hecho, además de esto, les estaban cobrando una cuota mensual significativamente alta (no sé si mencionarlo específicamente esté bien), ya ahí las cosas venían mal, les estaban cobrando la aplicación y la licencia mensual, lo que se convertía en una suma grande de dinero.",

      "Además de esto, al momento de realizar la 'entrega', la persona en cuestión les dijo que para poder ejecutar la aplicación iban a necesitar instalar Windows en su computador (Utilizan una Mac Book Pro en el negocio), todo esto llevó a que el dueño del negocio no se sintiera cómodo con esto.",

      "Para no hacerlo muy largo, después de esa charla con el chico del otro software se me habló y justo al lunes siguiente me puse manos a la obra para comenzar con el proyecto.",

      "Las tecnologías utilizadas para este proyecto fueron principalmente JavaScript, NodeJS, React, Vite, Tailwind, NodeJS, Express, MongoDB (Atlas), byCrypt, json web tokens JWT, Cors y ESLint con standard para mejorar el código.",
    ],

    author: "Sebastian Pérez",
    creationDate: "01/16/2024",
  },
  {
    id: "fc2aaada30594ed9a39fa1928d267655",
    type: PostTypes.opinion,
    title: "¿Pasar como parámetro funciones con nombre al useEffect 🤔?",
    mediaType: "image",
    image: useEffectImg,
    description: [
      "Utilizar funciones con nombres dentro del hook useEffect de react suena un poco... raro ¿no? Pues no, o al menos no lo es para Cory House.",
      "Hace relativamente poco vi una publicación en X que hablaba de utilizar funciones con nombre dentro del hook useEffect en React (sí, como primer parámetro). Me pareció interesante la idea, así que me adentré en el hilo para ver qué tenían que decir al respecto.",
      "Es una manera de mejorar la legibilidad del código, haciendo más simple entender qué es lo que hace un useEffect que tengamos en nuestra aplicación, y sí, viéndolo desde este lado tiene sentido, sin embargo, no terminó de convencer a algunos que argumentaban que estaban haciendo más complicado el desarrollo.",
      "Por un lado, tenemos la parte de la legibilidad (que sí, es más legible desde mi perspectiva), sin embargo, también tenemos que tener en cuenta el tema de las convenciones, es mucho más común ver que este hook es utilizado pasando como parámetro simplemente un arrow function, así que entiendo el choque de opiniones que puede generar este tema.",
      "Otras personas dicen que todo se soluciona con un simple comentario que explique qué hace el useEffect en cuestión, es decir, comentario VS ponerle nombre a la función, a lo que el autor del post nos comenta lo siguiente:",
      "✅ El código tiende a mantenerse actualizado, mientras que los comentarios suelen quedar obsoletos. Por tanto, los comentarios 'mienten' con más frecuencia que el código.",
      "✅ Las funciones nombradas mejoran el seguimiento de la pila (stack trace), lo que mejora la depuración y el registro de errores.",
      "✅ Los comentarios no deben reemplazar el nombre de una función; deben aumentar el nombre de la función en casos excepcionales en los que el nombre por sí solo no sea suficiente.",
      "También están las personas que se quejan de que ahora los useEffect gracias a este cambio se vuelven demasiado complejos... Eso de encontrarles un nombre correcto es más complicado de lo que parece 🤣.",
      "Por mi parte, creo que prefiero seguir utilizando un arrow function con una función dentro que posteriormente llamaré. Quizá no es la solución más óptima, pero considero que es bastante decente y legible 🤯.",
      "Créditos a Cory House @housecor en X, de donde vi esta publicación.",
      "¿Cuál es tu opinión al respecto? ¿Está bien utilizar funciones nombradas o es mejor utilizar las típicas funciones flecha?",

      "Link a la publicación original:",
      "https://twitter.com/housecor/status/1753777632976461954",
    ],

    author: "Sebastian Pérez",
    creationDate: "02/17/2024",
  },
  {
    id: "7a46a12b32e4461e911ef2e941303a33",
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
    id: "3ae67a3496d74fdfa5c16f6cbef1ed73",
    type: PostTypes.project,
    title:
      "¿Cómo fue trabajar con VBA por primera vez en la regional de una multinacional 😬?",
    mediaType: "image",
    image: BlogPostMedia,
    description: [
      "Cómo fue mi experiencia trabajando para una empresa multinacional en un proyecto regional.",

      "Inicialmente, si no has leído el artículo de mi experiencia como desarrollador para la empresa, acá te dejo el link para que lo veas antes:",

      "Acá irá el link cuando esté actualizado el blog 😬",

      "Como mencioné en ese artículo, mi experiencia trabajando para esta empresa fue curiosa, inicialmente se me contacto evitando en la medida de lo posible brindarme mayores informaciones, sabía que mi trabajo consistía en unificar información, pero nada en detalle.",

      "Fue bastante curioso trabajar con una empresa ayudando directamente al sector de RR.HH en el entorno legal, es muy diferente a lo que había hecho con anterioridad, había mucho en juego y los procesos se llevaban de maneras muy diversas. También fue la vez con la que más datos he trabajado y donde todos debían estar bien manejados y optimizados.",

      "El resultado de este trabajo me hizo sentir realizado, lograr que a través de programación un proceso que es realmente tedioso y tardío se convierta en cosa de un par de clics, es algo que realmente me parece reconfortante, comparar el hecho de que antes para obtener la información de un empleado de la regional se demoraban horas (literalmente) y ahora se pueda conseguir en un par de segundos, digitando su nombre y dando un clic es algo que me emociona.",

      "Sinceramente, consideraba que iba a ser un proceso más difícil; sin embargo, por mis conocimientos previos en programación no me tomó tanto tiempo adecuarme a utilizar VBA.",

      "Hice la herramienta relativamente de manera sencilla, quizá hecho en falta utilizar un poco de mejores prácticas, pero fue un trabajo que me pareció reconfortante y que cuando lo terminé me sentí orgulloso de él.",

      "¡Gracias a la empresa en cuestión!",
      "Ojalá que se preparen con más cuidado para sus próximas auditorias 🤣",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/28/2023",
  },
  {
    id: "f9cac5ffb2f5476b909abcd56e6fe641",
    type: PostTypes.opinion,
    title: "The Commit Show de BettaTech y su charla con MiduDev",
    mediaType: "video",
    media: "https://www.youtube.com/embed/fL83GTilWjw",
    image: PersonImage,
    description: [
      "Como programador, llevo siguiendo el contenido de Midudev desde hace años, es uno de mis referentes tecnológicos y con la cual he aprendido mucho.",
      "Durante la charla en The Commit Show de BettaTech, Midu habla de muchos temas referentes al ámbito de la tecnología y programación en general, habla de quién es, de su experiencia y cómo es su perspectiva sobre la actualidad y futuro del mundo del desarrollo.",
      "Uno de los temas más relevantes tratados en esta charla, es el hecho de que cuando un programador está buscando introducirse en el mercado por primera (o primeras) vez, es muy importante llegar a una empresa la cual te ofrezca mentorías, es decir, que tengas a una persona que pueda hacer de guía en tu proceso, siendo esta parte una de las que más se aprende. De hecho, él define que 'Es mucho más importante que el sueldo en un inicio'.",
      "Si bien es verdad que la carencia de este mentor hace que el programador desarrolle autosuficiencia, en algunos casos esto tiende a convertirse en una carga mental que afecta la salud y que, a final de cuentas, no vale la pena.",
      "En la charla se tratan otros temas muy importantes a tener en cuenta en el mundo del desarrollo, salarios y quizá lo más importante, ser senior, ¿Qué significa realmente?",
      "Es una charla que en mi opinión está totalmente recomendada y que proporciona un panorama amplio del entorno de la programación.",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/03/2023",
  },
  {
    id: "89ad3aea22014a68963c69621baf1ea2",
    type: PostTypes.project,
    title: "Creé una aplicación del juego de piedra, papel o tijera",
    mediaType: "image",
    image: PersonImage,
    description: [
      "Creé una aplicación web inspirada en el popular juego de piedra, papel o tijera para poner a prueba mis conocimientos en mis tiempos libres de la universidad y de mis trabajos freelance.",
      "Inicialmente, quería practicar mis habilidades de frontend y me topé con este reto en *frontend mentor*, únicamente estaba enfocado en desarrollar el apartado visual, sin embargo, en mi caso lo que hice fue llevarlo un paso más allá y darle la lógica necesaria para poder jugar.",
      "Como tal, lo primero fue desarrollar el apartado visual para probar mis habilidades de CSS. Como lo dije anteriormente, me metí en este reto para mejorar mi entendimiento del front, lo que quería era poner a prueba mis conocimientos de vanilla CSS y mejorar en lo que tuviese que hacerlo.",
      "Una vez estuvo terminado el apartado visual, sentí que lo podía podía hacer funcional sin mucho esfuerzo, así que lo que hice fue meterme con el manejo de la lógica. En otras palabras, le metí JS al HTML y CSS.",
      "Realmente fue un proyecto divertido de realizar que me ayudó a mejorar mi código, mis estilos y buenas prácticas.",
      "Para desarrollar el proyecto utilicé las tecnologías: TypeScript como lenguaje de programación, Vite como herramienta de compilación, React como librería principal de desarrollo y CSS vanilla para estilizar la aplicación.",
      "Si quieres ver el juego, acá está: ",
      "https://rps-game-navy.vercel.app/",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/03/2023",
  },
  {
    id: "5e14c5bb00be4450b2376eda189a64fb",
    type: PostTypes.project,
    title: "¡Creé una aplicación de retos matemáticos con tiempo 👨🏻‍🔬⌛!",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "¡Creé un juego de retos de rapidez matemática! Con la finalidad de mejorar el tiempo de respuesta y la asertividad de los estudiantes de mi universidad frente a problemas matemáticos básicos.",
      "La idea surgió de un momento en mis clases de universidad donde querían poner a prueba la fluidez con la que diferentes estudiantes respondíamos a preguntas matemáticas, en lo personal me fue bien (#humildad), pero a mis compañeros no tanto.",
      "Debido a esto, me surgió la idea de crear una aplicación para practicar la rapidez con la que puedes responder a preguntas matemáticas básicas (Relacionadas con las operaciones de suma, resta, multiplicación y división).",
      "Hice que este juego tuviera un sistema de puntuación para ir observando la mejora de los jugadores y que así estos pudieran ir comparando su avance mientras juegan.",
      "Sinceramente es un proyecto que quiero retomar a día de hoy, es algo que me parece interesante y puedo escalarlo un poco más simplemente por entretenimiento.",
      "¡Las puntuaciones se van guardando por persona y quedan disponibles para cuando el jugador decida volver a entrar a jugar!",
      "Si quieres acceder al proyecto, acá está:",
      "link",
      "El stack que utilicé para el desarrollo del juego fue: TypeScript como lenguaje de programación, Vite y Tailwind 😄",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/03/2023",
  },
  {
    id: "5c9ef6fa3e12415ca8a853150643b993",
    type: PostTypes.experience,
    title:
      "¡Trabajé para una multinacional utilizando programación con VBA 🦖!",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "Debido a contactos en mi universidad, una empresa se comunicó conmigo para ayudarles a optimizar sus libros de Excel utilizando programación (VBA) a través de macros.",
      "Inicialmente, para 'Empresa A' (como la llamaré para salvaguardar su privacidad), una empresa internacional muy grande en el país, me contactó específicamente una regional para ayudar con un proceso de transición de plataformas por el que estaban pasando (no lo estaban llevando muy bien).",
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
    id: "930a849815984e8a95d4f54f132aac29",
    type: PostTypes.experience,
    title:
      "¡Creé un mini sistema de ventas, inventarios y nominas utilizando programación en VBA 🧮!",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "Intervine en un bar para mejorar su situación y su gestión. La empresa no contaba con ningún sistema de información, no tenía ni inventarios, ni nominas, ni libros contables, ni libros de proveedores, etc.",

      "Inicialmente mi intervención estuvo enfocada en crear un archivo temporal (un algoritmo) para el manejo de las ventas, inventarios y nominas (esto debido a que la empresa ya había pagado para la realización de un software, entonces solo utilizarían este Excel por un periodo corto de tiempo).",

      "Me encargué de crear los algoritmos necesarios para determinar las pagas de cada mesa, la automatización de los descuentos de inventarios y el registro automático del ingreso de efectivo o el incremento en cuentas por cobrar (cosas contables).",

      "Sí, además de utilizar mis conocimientos como programador, también utilicé mis conocimientos como administrador - contador financiero para ayudarles con sus problemas (que eran bastantes como mencioné anteriormente).",

      "Una vez desarrollé el Excel con las macros para que se encargaran de estas funciones logré observar que es muy común que las cuentas en este tipo de negocios se paguen por separado, por lo que sí bien mi trabajo era funcional y era lo que me habían pedido, decidí personalizarlo aún más para hacerles la vida más fácil.",

      "Así que sí, intervine de muchas maneras en este bar, y el logro más importante que conseguí es que ahora tienen las herramientas necesarias para poder crear lo básico de los registros contables necesarios y responder así ante la DIAN e IyC.",

      "Disfruté mucho realizando este trabajo, tanto como programador como financiero, y sentí que realmente hice un aporte relevante para una empresa.",

      "En cuanto al desarrollo, principalmente se utilizó Excel y sus macros programadas en VBA (después me enteré que también se puede programar en Excel con python 🤦🏻‍♂️, será para la proxima entonces), realmente el desarrollo de este algoritmo no tuvo una mayor complejidad, fue adaptarse a las necesidades del local y escribir código para cumplir con ello.",

      "Les deseo muchos éxitos, y gracias por la oportunidad brindada.",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/26/2023",
  },
  {
    id: "6957b082e06f4ba0a18b377143ce407b",
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
    id: "2bb2193700824b11bcc33c9dc5dd3c65",
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
    id: "3036dd4b2fbb4b0496571af11af2aa6d",
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
      "Acá puedes ver el repo con toda la información:",
      "https://github.com/Sebastian-pz/TDG-2023",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/03/2023",
  },
  {
    id: "a17fbef4cb244ce3b2a107bf7fde4482",
    type: PostTypes.project,
    title: "¡Creamos una red social inspirada en Twitter (X) 🦆!",
    mediaType: "video",
    media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: PersonImage,
    description: [
      "Para finales del año 2022 les propuse a mis amigos programadores Matias Straface y Mesila Hellrigl hacer una red social inspirada en el entonces Twitter y los primeros días del 2023 nos pusimos manos en ello.",
      "El nombre es directamente una parodia para hacer alusión a que es una copia de Twitter (decidimos nombrarlo Ducker 🦆).",
      "Con los conocimientos que teníamos hasta ese momento realmente no se nos complicó avanzar rápidamente en el proyecto, de hecho, estaba avanzando mucho más rápido de lo que esperábamos.",
      "En un abrir y cerrar de ojos ya habíamos terminado la mayor parte de del backend (en serio, en un par de días de pair programming estaba casi un 90% listo), eso fue la motivación que necesitábamos para meterle aun más determinación a ese proyecto.",
      "Lo siguiente, una vez terminada la API de Ducker, fue meternos directamente con lo visual, queríamos hacerlo muy similar a Twitter; sin embargo, también queríamos experimentar por nuestra cuenta, ver qué podíamos cambiar, qué podíamos llegar a mejorar (desde nuestro punto de vista).",
      "De igual manera que con el back, el front avanzó rápidamente, en cuestión de una semana la mayoría de las vistas estaban hechas, las conexiones con la API estaban listas y ya teníamos funcionando las principales acciones de la red social; realizar Cuaks, dar me gustas, comentar y marcar como favorito.",
      "La siguiente parte que hicimos fue la correspondiente al perfil, el poder personalizar su perfil con foto, nombre, descripción, localización, intereses y demás. Esta parte tampoco significó un mayor reto para el Team Ducker, para este momento ya nos encontrábamos muy cómodos trabajando con el proyecto.",
      "Ya de ahí en adelante fue ir realizando detalles, mejorando apartados visuales y corrigiendo bugs (que sorprendentemente no fueron muchos).",
      "Ah, claro, el Stack es el de siempre: TypeScript, JavaScript, NodeJS, React, SASS, Express, JWT, MongoDB, Google Auth Library, Cors y otros.",
      "Quiero agradecer a mis compañeros de Team Ducker Mati y Meli, primero que todo por sumarse al proyecto, segundo porque al momento de transicionar al front, mis habilidades con el CSS no estaban tan trabajadas como sí lo están ahora, me tuvieron toda la paciencia del mundo y me fueron explicando poco a poco, y tercero, por ser tan buena onda y hacer de este proyecto un trabajo muy ameno y divertido.",
    ],

    author: "Sebastian Pérez",
    creationDate: "11/27/2023",
  },
];

const defaultPost = posts[0];

export function getPost(id: number | string) {
  return posts.find((post, index) => post.id === id) || defaultPost;
}

export function getPosts(limit = 5) {
  return posts.slice(1, limit);
}

export function getMainPost() {
  return posts[0];
}

export function getFilteredPosts(filter: PostTypes, limit = 5) {
  const filteredPosts = posts.filter((post) => post.type === filter);
  if (!filteredPosts.length) return getPosts(limit);
  return filteredPosts;
}

export function getRandomPost() {
  const post = posts[Math.floor(Math.random() * posts.length)];
  return post.id;
}

/*

Utilizar funciones con nombres dentro del hook useEffect de react suena un poco... raro ¿no? Pues no, o al menos no lo es para Cory House.
LINK: 
*/
