import { postInterface, PostTypes } from '@/utilities/interfaces'

// ----| Images | ---
import useEffectImg from '@/public/blog/useEffect.webp'
import tddImg from '@/public/blog/tdd-post.webp'
import theCommitShowImg from '@/public/blog/thecommitshow.webp'
import firstTimeVisualBasic from '@/public/blog/firstTimeVisualBasic.webp'
import rockPaperScissorsGame from '@/public/blog/rock-paper-scissors.webp'
import fastMaths from '@/public/blog/fastMaths.webp'
import barVB from '@/public/blog/bar-vb.webp'
import degreeImg from '@/public/blog/degree.webp'
import duckerImg from '@/public/blog/ducker.webp'
import UnderConstruction from '@/public/blog/UnderConstruction.webp'
import nutricionVitalImg from '@/public/blog/NutricionVital.webp'
import chatBotImg from '@/public/blog/ChatBot.webp'
import blogImg from '@/public/blog/Blog.webp'
import opinionAboutVB from '@/public/blog/opinionAboutVB.webp'
import CallStack from '@/public/blog/CallStack.webp'

import TAGS from '../../Tags/Tags'

const author = 'Sebastian Pérez'

export const posts: Array<postInterface> = [
  {
    id: '1d0d966b84354712b92c359cc28a06c2',
    type: PostTypes.experience,
    title:
      'Como fullstack developer trabajé en la creación de un Management System completo.',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/fL83GTilWjw",
    image: UnderConstruction,
    description: [
      'Creé una aplicación web FullStack que se encarga de gestionar las ventas, costos, gastos e inventarios de un bar, logrando de este modo facilitar los procesos de la tienda.',

      'Inicialmente, en noviembre, debido a una persona en común se me contactó para preguntarme acerca de unos determinados procesos administrativos del bar en cuestión, durante mis observaciones se me comentó el hecho de que estaban creando un software específico para el tema de manejo de ventas (como lo mencioné en un post anterior en el blog). ',

      'Como el software ya estaba siendo construido, mi participación en el proceso se limitó únicamente en crear un Excel que sirviera para solventar el problema de gestión en ventas e inventarios momentáneamente, sin embargo, a finales de noviembre, inicios de diciembre me hicieron llegar la información restante del proyecto.',

      'La idea que tenia el bar era que les crearan un software propio para la gestión única del local, sin embargo, les estaban vendiendo la licencia de un programa ya hecho, además de esto, les estaban cobrando una cuota mensual significativamente alta (no sé si mencionarlo específicamente esté bien), ya ahí las cosas venían mal, les estaban cobrando la aplicación y la licencia mensual, lo que se convertía en una suma grande de dinero.',

      "Además de esto, al momento de realizar la 'entrega', la persona en cuestión les dijo que para poder ejecutar la aplicación iban a necesitar instalar Windows en su computador (Utilizan una Mac Book Pro en el negocio), todo esto llevó a que el dueño del negocio no se sintiera cómodo con esto.",

      'Para no hacerlo muy largo, después de esa charla con el chico del otro software se me habló y justo al lunes siguiente me puse manos a la obra para comenzar con el proyecto.',

      'Las tecnologías utilizadas para este proyecto fueron principalmente TypeScript, NodeJS, React, Vite, Tailwind, Express, MongoDB, PostgreSQL, NestJS y NextJS.',
    ],

    author,
    creationDate: '07/16/2024',
    tags: [
      TAGS.experience,
      TAGS.fullstack,
      TAGS.nestjs,
      TAGS.nextjs,
      TAGS.CI_CD,
    ],
  },
  {
    author,
    creationDate: '08/10/2024',
    description: [
      'El otro día, mientras navegaba por YouTube, me topé con un video que hablaba de cómo funciona JavaScript por debajo de la mesa. La verdad es un tema que ya había estudiado y entendido con anterioridad, pero por reforzar conocimientos quise entrar a ver el contenido, y me llevé con la sorpresa de que este video lo explicaba de forma tan clara y sencilla que me encantó.',
      '|subtitle|¿Por qué entender el CallStack es importante? (el problema de el hilo único).',
      'Ahora, ¿por qué es importante entender el call stack? Principalmente porque JS funciona con un solo hilo, a diferencia de otros lenguajes como C# o Java que pueden hacer uso de multi hilos para la ejecución de sus algoritmos.',
      'Imagina que JavaScript es un chef con una sola mano 👨‍🍳. Puede hacer muchas cosas deliciosas, pero solo puede hacer una a la vez. Si se pone a cortar cebolla para una tortilla, mientras tanto no puede estar batiendo huevos para el postre.',
      'Entender que como JS es single threaded, cuando un proceso toma mucho tiempo se está congelando la aplicación, es tiempo muerto que todo se queda parado.',
      'Entonces, si un proceso se vuelve muy pesado y tarda mucho en ejecutarse, ¡todo se paraliza! Es como si el chef se quedara picando cebolla eternamente y el resto de la cocina se detuviera por completo.',
      '|subtitle|Recursos adicionales para entender un poco mejor qué es el callstack',
      'La explicación de Lydia Hallie es bastante buena y la ayuda gráfica hace que todo sea mucho más fácil de entender, pero si quieres aprender un poco más o aún no te quedó del todo claro, aquí hay otros recursos que puedes explorar.',
      '|linkIntroduction|Otra muy buena explicación, pero en español: ',
      '|link|https://www.youtube.com/watch?v=ygA5U7Wgsg8',
      '|linkIntroduction|Entender más en profundidad JavaScript, 33 conceptos muy importantes (el concepto 1 habla del callstack):',
      '|link|https://github.com/leonardomso/33-js-concepts ',
    ],
    id: '3806f8aa09ae45fb978096e651733e47',
    image: CallStack,
    mediaType: 'video',
    tags: [TAGS.opinion, TAGS.tools],
    title: '¿Cómo funciona el CallStack en JavaScript?',
    type: PostTypes.opinion,
    media: 'https://www.youtube.com/embed/eiC58R16hb8?si=yLZCFhwKV5ZWu1ZO',
  },
  {
    author,
    creationDate: '07/23/2024',
    description: [
      'Hace poco, un amigo me contactó para un pequeño trabajo en una startup. Necesitaban un chatbot, y aunque nunca había creado uno, la curiosidad pudo más que el miedo (¡menos mal que mis jefes me dieron libertad!).',
      "Así que me sumergí en el mundo de la IA con Python como compañero de viaje. Dos bibliotecas fueron mis aliadas: una para la 'mente' del chatbot, procesando el lenguaje y respondiendo, y la otra para darle 'vida', levantarlo y conectarlo.",
      'Lo que me dejó alucinado fue la capacidad de la IA para aprender. ¡Simplemente entrené un algoritmo con información de la empresa y este fue capaz de responder preguntas de clientes! 🤯',
      'Claro, el bot aún es básico. La información era limitada y la conexión con bases de datos es el siguiente desafío. Pero ver cómo con tan pocas líneas de código la IA daba vida a un chatbot, interpretando y respondiendo, me dejó con la boca abierta.',
      '¿Qué tan lejos se puede llegar utilizando IAs? No sé, simplemente wow.',
    ],
    id: 'f66d239b17b14cdda4889da32608cad4',
    image: chatBotImg,
    mediaType: 'image',
    title: 'La IA me dejó boquiabierto: Mi primera experiencia con Chatbots 🤖',
    type: PostTypes.opinion,
    tags: [TAGS.opinion, TAGS.experience, TAGS.backend],
  },
  {
    author,
    creationDate: '07/08/2024',
    id: 'bcaa1e968b6a43daaea2f4638025fac8',
    image: tddImg,
    mediaType: 'image',
    type: PostTypes.opinion,
    title: 'El desarrollo de software utilizando TDD',
    description: [
      'Este es un mini post de mi apreciación personal sobre trabajar siguiendo la TDD, pero antes de hablar sobre ello hay que hablar acerca de qué es eso:',
      '|subtitle| ¿Qué es TDD?',
      'Test-Driven Development es una práctica de programación que consiste en escribir primero los Tests (generalmente unitarios), después escribir el código que haga que las pruebas pasen satisfactoriamente y, por último, refactorizar el código escrito. (Herranz, J. 2023)',
      '|image|https://images.spiceworks.com/wp-content/uploads/2022/09/29095630/How-TDD-Works.png',
      'Imagen obtenida de: SpiceWorks.com',

      '|subtitle| Mi opinión sobre trabajar con Test Driven Development',
      'Hace relativamente poco estuve trabajando en un proyecto utilizando la metodología TDD y se me hizo una idea del porqué esta metodología es tan amada-odiada entre la comunidad.',
      "Conozco de primera mano la opinión de 'que pereza hacer tests, si cuando hago mi código sé que funciona'. Y lo entiendo, pero, al menos desde mi perspectiva, los tests no están hechos para uno mismo, están hechos para ayudar a tu compañero (o a ti) que en un futuro tenga que 'tocar' el código y saber que lo está haciendo bien, que no está rompiendo nada.",
      'La principal labor del Test-Driven Development no es ayudarte al desarrollar el código (que sí lo hace), si no, más bien, garantizar que las futuras modificaciones que se realicen no afecten al funcionamiento general de la aplicación, es un seguro de que un cambio no va a romper todo.',
      'Por poner un ejemplo, digamos que tú trabajaste sobre una funcionalidad para agendar usuarios en un calendario y sí, funciona perfecto, pero el día de mañana te mandan a realizar un cambio sobre el esquema de usuario y ambas funcionalidades funcionan perfectamente por separado, pero al momento de subirlo te das cuenta de que no está compilando, quizá ese cambio en usuario afecto al proceso de agendamiento, quizá una propiedad, quizá un estado, no sé cualquier cosa, TDD te ayuda a prever esto.',
      "Trabajar a través de TDD significa más tiempo de desarrollo, cuestionar 'el código funciona de todas formas' y lidiar con la presión de entregar, pero ayuda a desarrollar código más sólido, escalable, y logra facilitar el trabajo a tus compañeros (o a ti mismo en el futuro) evitando bugs de por medio.",
      'Sí, es más código, pero vale la pena.',
      '|note|Nota: Cabe aclarar que utilizar o no TDD es un concepto propio de cada proyecto, hay proyectos en los que les será útil y habrá proyectos en los que no. No es una regla de oro tener que utilizarlo siempre.',
      '',

      'Herranz, Jose Ignacio. (Abril 13 de 2023). TDD como metodología de diseño de software, recuperado de: https://www.paradigmadigital.com/dev/tdd-como-metodologia-de-diseno-de-software/',
    ],
    tags: [TAGS.testing, TAGS.CI_CD, TAGS.cleanCode, TAGS.opinion],
  },
  {
    id: 'fc2aaada30594ed9a39fa1928d267655',
    type: PostTypes.opinion,
    title: 'Buenas prácticas en los useEffect de React por un experto',
    mediaType: 'image',
    image: useEffectImg,
    description: [
      'Utilizar funciones con nombres dentro del hook useEffect de react suena un poco... raro ¿no? Pues no, o al menos no lo es para Cory House.',
      'Hace relativamente poco vi una publicación en X que hablaba de utilizar funciones con nombre dentro del hook useEffect en React (sí, como primer parámetro). Me pareció interesante la idea, así que me adentré en el hilo para ver qué tenían que decir al respecto.',
      'Es una manera de mejorar la legibilidad del código, haciendo más simple entender qué es lo que hace un useEffect que tengamos en nuestra aplicación, y sí, viéndolo desde este lado tiene sentido, sin embargo, no terminó de convencer a algunos que argumentaban que estaban haciendo más complicado el desarrollo.',
      'Por un lado, tenemos la parte de la legibilidad (que sí, es más legible desde mi perspectiva), sin embargo, también tenemos que tener en cuenta el tema de las convenciones, es mucho más común ver que este hook es utilizado pasando como parámetro simplemente un arrow function, así que entiendo el choque de opiniones que puede generar este tema.',
      'Otras personas dicen que todo se soluciona con un simple comentario que explique qué hace el useEffect en cuestión, es decir, comentario VS ponerle nombre a la función, a lo que el autor del post nos comenta lo siguiente:',
      "✅ El código tiende a mantenerse actualizado, mientras que los comentarios suelen quedar obsoletos. Por tanto, los comentarios 'mienten' con más frecuencia que el código.",
      '✅ Las funciones nombradas mejoran el seguimiento de la pila (stack trace), lo que mejora la depuración y el registro de errores.',
      '✅ Los comentarios no deben reemplazar el nombre de una función; deben aumentar el nombre de la función en casos excepcionales en los que el nombre por sí solo no sea suficiente.',
      'También están las personas que se quejan de que ahora los useEffect gracias a este cambio se vuelven demasiado complejos... Eso de encontrarles un nombre correcto es más complicado de lo que parece 🤣.',
      'Por mi parte, creo que prefiero seguir utilizando un arrow function con una función dentro que posteriormente llamaré. Quizá no es la solución más óptima, pero considero que es bastante decente y legible 🤯.',
      'Créditos a Cory House @housecor en X, de donde vi esta publicación.',
      '¿Cuál es tu opinión al respecto? ¿Está bien utilizar funciones nombradas o es mejor utilizar las típicas funciones flecha?',

      'Link a la publicación original:',
      '|link|https://twitter.com/housecor/status/1753777632976461954',
    ],

    author,
    creationDate: '02/17/2024',
    tags: [TAGS.cleanCode, TAGS.opinion],
  },
  {
    id: '7a46a12b32e4461e911ef2e941303a33',
    type: PostTypes.project,
    title: '¡El blog está casi listo 🚀👨🏻‍🚀!',
    mediaType: 'image',
    image: blogImg,
    description: [
      'Enfocado principalmente en las publicaciones tecnológicas y actualizaciones sobre mis proyectos ya está casi completa, quedan pocas cosas que ultimar, pero los detalles y el funcionamiento general de la aplicación ya está completo. ',

      'La creación de la aplicación inició la primera semana de noviembre 2023 y se fue desarrollando poco a poco, después de terminado mi periodo académico en la universidad el proyecto ya estaba casi en su totalidad completo, de hecho, solo faltaba ultimar detalles en cuanto a los estilos.',

      'Inicialmente no se tenía una estimación del tiempo de desarrollo que tomaría este blog, de hecho, el estar tan cerca de los periodos de exámenes finales hacía que realizar presupuestos fuese algo incierto.',

      'Finalmente, a día de hoy 16 de noviembre de 2023, el proyecto ya se encuentra prácticamente terminado.',

      'Las tecnologías utilizadas para este proyecto fueron principalmente TypeScript, NextJS - React, Tailwind para los estilos y ESLint con standard para mejorar el código.',
    ],

    author,
    creationDate: '11/16/2023',
    tags: [TAGS.project, TAGS.fullstack, TAGS.nextjs, TAGS.CI_CD],
  },
  {
    id: '3ae67a3496d74fdfa5c16f6cbef1ed73',
    type: PostTypes.opinion,
    title:
      '¿Cómo fue trabajar con Visual Basic por primera vez en la regional de una multinacional?',
    mediaType: 'image',
    image: opinionAboutVB,
    description: [
      '¿Cómo crees que fue mi experiencia trabajando para una empresa multinacional, en un proyecto regional con un lenguaje de programación que jamas había utilizado y con mucha privacidad de por medio?',

      'Inicialmente, si no has leído el artículo de mi experiencia como desarrollador para la empresa, acá te dejo el link para que lo veas antes:',

      'Acá irá el link cuando esté actualizado el blog 😬',

      'Como mencioné en ese artículo, mi experiencia trabajando para esta empresa fue curiosa, inicialmente se me contacto evitando en la medida de lo posible brindarme mayores informaciones, sabía que mi trabajo consistía en unificar información, pero nada en detalle.',

      'Fue bastante curioso trabajar con una empresa ayudando directamente al sector de RR.HH (en el entorno legal), es muy diferente a lo que había hecho con anterioridad. Había mucho en juego y los procesos se llevaban de maneras muy diversas. También fue la vez con la que más datos he trabajado y donde todos debían estar manejados al detalle y optimizados.',

      'El resultado de este trabajo me hizo sentir realizado, lograr que a través de programación un proceso que es realmente tedioso y tardío se convierta en cosa de un par de clics, es algo que realmente me parece reconfortante, comparar el hecho de que antes para obtener la información de un empleado de la regional se demoraban horas (literalmente) y ahora se puede conseguir en un par de segundos, digitando su nombre, cédula o correo y dando un clic es algo que me emociona.',

      'Sinceramente, consideraba que iba a ser un proceso más difícil; sin embargo, por mis conocimientos previos en programación no me tomó tanto tiempo adecuarme a utilizar VBA.',

      'Hice la herramienta relativamente de manera sencilla, quizá hecho en falta utilizar un poco de mejores prácticas, pero fue un trabajo que me pareció reconfortante y que cuando lo terminé me sentí orgulloso de él.',

      '|subtitle|Mini reflexión personal',

      'Lo ultimo que quiero decir es que a veces asumir nuevos retos puede dar un poco de miedo, pero al menos en el mundo de la programación vale totalmente la pena. Como comenté anteriormente entré a este proyecto sin saber nada acerca de Visual Basic y al final se logró sacar adelante con mucho aprendizaje de por medio. Estoy muy contento de lo que logré ahí.',

      '¡Gracias a la empresa en cuestión!',
      'Ojalá que se preparen con más cuidado para sus próximas auditorias 🤣',
    ],

    author,
    creationDate: '11/28/2023',
    tags: [TAGS.opinion, TAGS.experience, TAGS.tools, TAGS.cleanCode],
  },
  {
    id: 'f9cac5ffb2f5476b909abcd56e6fe641',
    type: PostTypes.opinion,
    title: 'The Commit Show de BettaTech y su charla con MiduDev',
    mediaType: 'video',
    media: 'https://www.youtube.com/embed/fL83GTilWjw',
    image: theCommitShowImg,
    description: [
      'Como programador, llevo siguiendo el contenido de Midudev desde hace años, es uno de mis referentes tecnológicos y con la cual he aprendido mucho.',
      'Durante la charla en The Commit Show de BettaTech, Midu habla de muchos temas referentes al ámbito de la tecnología y programación en general, habla de quién es, de su experiencia y cómo es su perspectiva sobre la actualidad y futuro del mundo del desarrollo.',
      "Uno de los temas más relevantes tratados en esta charla, es el hecho de que cuando un programador está buscando introducirse en el mercado por primera (o primeras) vez, es muy importante llegar a una empresa la cual te ofrezca mentorías, es decir, que tengas a una persona que pueda hacer de guía en tu proceso, siendo esta parte una de las que más se aprende. De hecho, él define que 'Es mucho más importante que el sueldo en un inicio'.",
      'Si bien es verdad que la carencia de este mentor hace que el programador desarrolle autosuficiencia, en algunos casos esto tiende a convertirse en una carga mental que afecta la salud y que, a final de cuentas, no vale la pena.',
      'En la charla se tratan otros temas muy importantes a tener en cuenta en el mundo del desarrollo, salarios y quizá lo más importante, ser senior, ¿Qué significa realmente?',
      'Es una charla que en mi opinión está totalmente recomendada y que proporciona un panorama amplio del entorno de la programación.',
    ],

    author,
    creationDate: '11/03/2023',
    tags: [TAGS.opinion],
  },
  {
    id: '89ad3aea22014a68963c69621baf1ea2',
    type: PostTypes.project,
    title: 'Creé una aplicación del juego de piedra, papel o tijera',
    mediaType: 'image',
    image: rockPaperScissorsGame,
    description: [
      'Creé una aplicación web inspirada en el popular juego de piedra, papel o tijera para poner a prueba mis conocimientos en mis tiempos libres de la universidad y de mis trabajos freelance.',
      'Inicialmente, quería practicar mis habilidades de frontend y me topé con este reto en *frontend mentor*, únicamente estaba enfocado en desarrollar el apartado visual, sin embargo, en mi caso lo que hice fue llevarlo un paso más allá y darle la lógica necesaria para poder jugar.',
      'Como tal, lo primero fue desarrollar el apartado visual para probar mis habilidades de CSS. Como lo dije anteriormente, me metí en este reto para mejorar mi entendimiento del front, lo que quería era poner a prueba mis conocimientos de vanilla CSS y mejorar en lo que tuviese que hacerlo.',
      'Una vez estuvo terminado el apartado visual, sentí que lo podía podía hacer funcional sin mucho esfuerzo, así que lo que hice fue meterme con el manejo de la lógica. En otras palabras, le metí JS al HTML y CSS.',
      'Realmente fue un proyecto divertido de realizar que me ayudó a mejorar mi código, mis estilos y buenas prácticas.',
      'Para desarrollar el proyecto utilicé las tecnologías: TypeScript como lenguaje de programación, Vite como herramienta de compilación, React como librería principal de desarrollo y CSS vanilla para estilizar la aplicación.',
      'Si quieres ver el juego, acá está: ',
      '|link|https://rps-game-navy.vercel.app/',
    ],

    author,
    creationDate: '11/03/2023',
    tags: [TAGS.project, TAGS.frontend, TAGS.react],
  },
  {
    id: '5e14c5bb00be4450b2376eda189a64fb',
    type: PostTypes.project,
    title: '¡Creé una aplicación de retos matemáticos con tiempo 👨🏻‍🔬⌛!',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: fastMaths,
    description: [
      '¡Creé un juego de retos de rapidez matemática! Con la finalidad de mejorar el tiempo de respuesta y la asertividad de los estudiantes de mi universidad frente a problemas matemáticos básicos.',
      'La idea surgió de un momento en mis clases de universidad donde querían poner a prueba la fluidez con la que diferentes estudiantes respondíamos a preguntas matemáticas, en lo personal me fue bien (#humildad), pero a mis compañeros no tanto.',
      'Debido a esto, me surgió la idea de crear una aplicación para practicar la rapidez con la que puedes responder a preguntas matemáticas básicas (Relacionadas con las operaciones de suma, resta, multiplicación y división).',
      'Hice que este juego tuviera un sistema de puntuación para ir observando la mejora de los jugadores y que así estos pudieran ir comparando su avance mientras juegan.',
      'Sinceramente es un proyecto que quiero retomar a día de hoy, es algo que me parece interesante y puedo escalarlo un poco más simplemente por entretenimiento.',
      '¡Las puntuaciones se van guardando por persona y quedan disponibles para cuando el jugador decida volver a entrar a jugar!',
      'Si quieres acceder al proyecto, acá está:',
      'link',
      'El stack que utilicé para el desarrollo del juego fue: TypeScript como lenguaje de programación, Vite y Tailwind 😄',
    ],

    author,
    creationDate: '11/03/2023',
    tags: [TAGS.project, TAGS.frontend, TAGS.react],
  },
  {
    id: '5c9ef6fa3e12415ca8a853150643b993',
    type: PostTypes.experience,
    title:
      '¡Trabajé para una multinacional utilizando programación (Visual Basic for Apps) 🦖!',
    mediaType: 'image',
    image: firstTimeVisualBasic,
    description: [
      'Debido a contactos en mi universidad, una empresa se comunicó conmigo para ayudarles con un problema que tenían sobre la validación de unos perfiles en Excel.',

      "Inicialmente, para 'Empresa A' (como la llamaré para salvaguardar su privacidad), una empresa internacional muy grande en el país, me contactó específicamente una regional para ayudar con un proceso de transición de plataformas por el que estaban pasando (no lo estaban llevando muy bien y era un proceso que se tenía que llevar a cabo de manera urgente).",

      'Su problema de manera general era que había mucha información dispersa en muchas partes, muchos archivos y muchas plataformas.',

      'Mi función entonces fue unificar la información de diferentes Excels y plataformas de manera automática, juntando la información de los empleados y utilizando diferentes algoritmos con VBA (Visual Basic for Applications) para confirmar si ellos cumplían con los requerimientos del cargo que ocupaban.',

      "En el caso de que un empleado NO cumpliera con el perfil del cargo, lo que hacía era alertar al responsable de recursos humanos y lo ponía en una lista de personas que no eran 'válidas'. De ahí se notificaba a cada jefe de sección para que se encargara de mandar al empleado a completar su perfil si el caso así lo requería.",

      'En el mejor de los casos, cuando el empleado sí cumpliera con el perfil, se añadía a la lista de los que están en orden o al corriente con la empresa y no era necesario realizar ninguna intervención.',

      'De estas dos listas, también se sacaban estadísticas que permitían definir diversos temas de interés, por ejemplo cuáles eran los sectores más afectados, cuáles eran los requisitos más críticos, qué roles estaban en mayor riesgo, y demás.',

      'Una vez esto se validaba (empleado vs perfil de cargo) se juntaba la información y se almacenaban los archivos completos en una carpeta de OneDrive y en la nueva plataforma, de modo que toda la información de cada empleado quedaba disponible en un solo lugar.',

      'En general no era difícil, solo que eran demasiados archivos que revisar uno a uno, de ahí el por qué necesitaban automatizar ese proceso.',

      'Después de haber desarrollado todo el algoritmo para la empresa, se logró una optimización de los tiempos de consulta de información en más de un 99%. Pasando de demorar más de 1 hora por empleado a tardar lo de un par de clics (pues antes era buscar Excel por Excel y plataforma por plataforma).',

      'De esto, cabe resaltar que la empresa intervenida tenía problemas en cuanto al cumplimiento de sus perfiles y gracias al desarrollo del programa se logró ir mejorando progresivamente este punto y así poder responder de mejor manera a sus procesos de auditorias.',
    ],

    author,
    creationDate: '11/26/2023',
    tags: [TAGS.experience, TAGS.cleanCode, TAGS.tools],
  },
  {
    id: '930a849815984e8a95d4f54f132aac29',
    type: PostTypes.experience,
    title:
      'Creé un sistema de ventas, inventarios y nominas utilizando programación en Visual Basic for Apps 🧮',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: barVB,
    description: [
      'Intervine en un bar para mejorar su situación y su gestión. La empresa no contaba con ningún sistema de información, no tenía ni inventarios, ni nominas, ni libros contables, ni libros de proveedores, etc.',

      'Inicialmente mi intervención estuvo enfocada en crear un archivo temporal (un algoritmo) para el manejo de las ventas, inventarios y nominas (esto debido a que la empresa ya había pagado para la realización de un software, entonces solo utilizarían este Excel por un periodo corto de tiempo).',

      'Me encargué de crear los algoritmos necesarios para determinar las pagas de cada mesa, la automatización de los descuentos de inventarios y el registro automático del ingreso de efectivo o el incremento en cuentas por cobrar (cosas contables).',

      'Sí, además de utilizar mis conocimientos como programador, también utilicé mis conocimientos como administrador - contador financiero para ayudarles con sus problemas (que eran bastantes como mencioné anteriormente).',

      'Una vez desarrollé el Excel con las macros para que se encargaran de estas funciones logré observar que es muy común que las cuentas en este tipo de negocios se paguen por separado, por lo que sí bien mi trabajo era funcional y era lo que me habían pedido, decidí personalizarlo aún más para hacerles la vida más fácil.',

      'Así que sí, intervine de muchas maneras en este bar, y el logro más importante que conseguí es que ahora tienen las herramientas necesarias para poder crear lo básico de los registros contables necesarios y responder así ante la DIAN e IyC.',

      'Disfruté mucho realizando este trabajo, tanto como programador como financiero, y sentí que realmente hice un aporte relevante para una empresa.',

      'En cuanto al desarrollo, principalmente se utilizó Excel y sus macros programadas en VBA (después me enteré que también se puede programar en Excel con python 🤦🏻‍♂️, será para la proxima entonces), realmente el desarrollo de este algoritmo no tuvo una mayor complejidad, fue adaptarse a las necesidades del local y escribir código para cumplir con ello.',

      'Les deseo muchos éxitos, y gracias por la oportunidad brindada.',
    ],

    author,
    creationDate: '11/26/2023',
    tags: [TAGS.experience, TAGS.opinion, TAGS.tools],
  },
  {
    id: '6957b082e06f4ba0a18b377143ce407b',
    type: PostTypes.experience,
    title: 'Trabajé como desarrollador fullstack para NutriciónVital 🏪',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: nutricionVitalImg,
    description: [
      'Trabajé como desarrollador fullstack en la creación de una plataforma e-commerce de suplementos alimentarios y de servicio de ventas de planes alimentarios.',

      'Se me contactó para ingresar como fullstack en la creación de una aplicación e-commerce para la empresa argentina Nutrición Vital junto con otros programadores con el mismo rol.',

      'La empresa quería aprovechar su relación con unos gimnasios para vender productos a sus clientes online. Querían ofrecerles la posibilidad de comprar artículos y recibirlos directamente en sus casas. Para lograrlo, decidieron crear una tienda online desde cero con todas las funcionalidades necesarias para este tipo de venta.',

      '|image|/blog/webVitalExample.gif',

      '|note|Gif comprimido y optimizado para mejorar el rendimiento aunque pierde un poco de calidad ',

      'Inicialmente, mis responsabilidades comprendieron la creación y optimización del código y del funcionamiento del aplicativo web.',

      "También, durante el desarrollo de la aplicación tuve que 'meter mano' muy por encima en la arquitectura del proyecto y en las buenas prácticas para hacerlo más prolijo.",

      'Como fullstack intervine en todo el desarrollo de la aplicación, desde las bases de datos, la creación de la API, autenticación, autorización, seguridad y la creación del apartado visual de la aplicación (front).',

      'Durante el desarrollo de este proyecto seguí mejorando mis habilidades con TypeScript, NodeJS, Express, React, Bootstrap, Redux, JWT, MercadoPago, gestor de envíos de emails, MongoDB con mongoose, lógica algorítmica, entre otras.',

      '|image|/blog/webVitalPayExample.gif',

      'Muchas gracias por leer!',
    ],

    author,
    creationDate: '11/27/2023',
    tags: [
      TAGS.experience,
      TAGS.fullstack,
      TAGS.CI_CD,
      TAGS.react,
      TAGS.express,
    ],
  },
  {
    id: '2bb2193700824b11bcc33c9dc5dd3c65',
    type: PostTypes.experience,
    title: 'Trabajé como desarrollador fullstack para la UCA 🎓',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: UnderConstruction,
    description: [
      'En enero de 2023 entré a ser parte de un grupo de programadores que se iban a encargar de desarrollar una aplicación web para la Universidad Católica Argentina (UCA), una aplicación que les serviría para educar a sus estudiantes.',

      'Se me contrató como desarrollador fullstack, encargado de interactuar con frontend y backend, la aplicación en sí era realizar un simulador de unos procesos a los que los estudiantes de derecho se enfrentarían comúnmente cuando salieran al mundo laboral. En pocas palabras nuestro rol fue recrear unos procesos que llevan a cabo los profesionales de derecho en su día a día.',

      'De este modo, los estudiantes se podían ir mentalizando y adecuando de mejor manera a las herramientas y situaciones con los que iban a tener que lidiar en un futuro.',

      'Durante este trabajo, utilicé la modalidad Agile, pair programming, y el stack de Python, NodeJS, TypeScript, express, React, Redux, MaterialUI y demás.',

      'Finalmente, el proyecto se expuso a la universidad y el resultado fue la aprobación. En el semestre 2 (SII-2023) la aplicación entró en producción y empezó a ser utilizada por los estudiantes.',

      '|subtitle|Mis responsabilidades en el proyecto fueron:',

      '✅ Desarrollo de lógica Frontend: Implementé las principales funciones de la lógica en el frontend, asegurando que el código fuera sencillo, escalable y mantenible.',
      '✅ Integración Frontend y API: Conecté el frontend con la API, creando funciones reutilizables y los correspondientes servicios de la aplicación para promover mejores prácticas y facilitar futuras refactorizaciones.',
      '✅ Gestión de sesiones de usuario: Administré las sesiones de usuario con validaciones correspondientes, tanto en el backend como en el frontend, asegurando que cada usuario tuviera acceso a funciones y renderizados específicos según su rol. Implementé un sistema de retokenización y cierre de sesión automático basado en la expiración del token.',
      '✅ Desarrollo de interfaces de usuario: Con ayuda de mis compañeros diseñé interfaces de usuario limpias y acordes a la naturaleza de la aplicación, priorizando la intuición y comodidad de uso para los usuarios.',
      '✅ Manejo de solicitudes y desarrollo backend: Apoyé y desarrollé en conjunto con el equipo de trabajo las responsabilidades de manejar las solicitudes, desarrollar la API, establecer conexiones con la base de datos, manejo de archivos y crear el sistema de inicio de sesión, entre otras tareas.',
      '✅ Optimización del código: Procuré que el código desarrollado fuera óptimo, siguiendo buenas prácticas de programación y manteniéndolo sencillo de entender para facilitar el trabajo en equipo y el mantenimiento futuro.',
      '✅ Colaboración y pair programming: Durante el desarrollo del proyecto participé activamente en pair programming, colaborando con mis compañeros para resolver problemas, compartir conocimientos y mejorar la calidad del código de manera conjunta.',

      'Sin duda alguna, una de las experiencias en las que más he aprendido como programador.',

      'Solo queda decir gracias a la UCA por brindarme esa oportunidad 💚.',
    ],

    author,
    creationDate: '11/27/2023',
    tags: [TAGS.experience, TAGS.fullstack, TAGS.react, TAGS.CI_CD],
  },
  {
    id: '3036dd4b2fbb4b0496571af11af2aa6d',
    type: PostTypes.project,
    title: '¡Hice mi trabajo de grado con programación!',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: degreeImg,
    description: [
      'Mi trabajo de grado fue una de las cosas que más inversión de tiempo me significó este año, quería hacer algo significativo y que no fuera tan común de ver, además de que de alguna manera quería utilizar las herramientas de programación.',

      "Para ello, creé un algoritmo basado en 'clases' utilizando TypeScript que me permitiera analizar el contenido publicado por marcas en las diferentes redes sociales.",

      'En pocas palabras, lo que busqué con este algoritmo era identificar los patrones de comportamiento, patrones de colores, patrones de periodicidad y en general todo lo relacionado a cómo interactúan los usuarios con las marcas de ropa populares en las redes sociales.',

      'Si bien en un inicio el algoritmo estaba ligado a una dependencia que le permitía examinar diferentes cuentas de redes sociales de manera dinámica, esta idea tuvo que ser desechada debido a que no cumplía con las políticas para presentar el trabajo de grado.',

      "Una vez terminado el programa este arroja el resultado de cuál es la gama de colores principales para sus productos, horarios de publicación frecuente, periodicidad de contenido determinado, patrones que pueden significar el 'éxito' o 'fracaso' de una publicación, categorías de posts que generan más interacciones, contenido que utilizan para mejorar la visibilidad de sus redes y demás.",

      'Se convirtió en una herramienta muy completa que ayuda a entender las practicas de las empresas exitosas en las redes sociales.',

      'Para el ejercicio original se tomaron las últimas 150 publicaciones de la empresa que se quiera analizar, a partir de ahí, se divide las publicaciones en categorías (productos, memes o frases) y se le añaden otros datos con la finalidad de categorizar: fecha, hora y colores principales.',

      'Unos ejemplos de las funciones que tiene el algoritmo son:',
      '✅  Sacar las categorías con el mayor número de interacciones.',
      '✅  Sacar los colores con el mayor número de interacciones.',
      '✅  Sacar las publicaciones con mayor número de interacciones.',
      '✅  Cuál es la periodicidad en días con las que se publica cada tipo de contenido.',
      '✅  Desviaciones y Xi².',
      '✅  Cuál es la perdida potencial de utilizar colores no acordes a la categoría.',
      '✅  Identificación de las categorías utilizadas en las estrategias publicitarias.',

      'Gracias a esta herramienta se puede observar cómo funcionan las estrategias de las empresas que ya están instauradas en el mercado e intentar replicarlas en empresas más pequeñas o que apenas se estén instaurando en el mercado.',

      'En general, provee una visión general de las estrategias de contenido que les sirven a las grandes empresas que ya cuentan con un público establecido.',
      'La parte de la creación de los Tests fue la más satisfactoria...',

      'El algoritmo quedó a disposición de nuestro asesor de trabajo de grado para que lo utilizara con los estudiantes.',
      'Acá puedes ver el repo con toda la información:',
      'https://github.com/Sebastian-pz/TDG-2023',
    ],

    author,
    creationDate: '11/03/2023',
    tags: [TAGS.project, TAGS.opinion, TAGS.tools],
  },
  {
    id: 'a17fbef4cb244ce3b2a107bf7fde4482',
    type: PostTypes.project,
    title: '¡Creamos una red social inspirada en Twitter (X) 🦆!',
    mediaType: 'image',
    // media: "https://www.youtube.com/embed/LZVsATLj4Tw",
    image: duckerImg,
    description: [
      'Para finales del año 2022 les propuse a mis amigos programadores Matias Straface y Mesila Hellrigl hacer una red social inspirada en el entonces Twitter y los primeros días del 2023 nos pusimos manos en ello.',
      'El nombre es directamente una parodia para hacer alusión a que es una copia de Twitter (decidimos nombrarlo Ducker 🦆).',
      'Con los conocimientos que teníamos hasta ese momento realmente no se nos complicó avanzar rápidamente en el proyecto, de hecho, estaba avanzando mucho más rápido de lo que esperábamos.',
      'En un abrir y cerrar de ojos ya habíamos terminado la mayor parte de del backend (en serio, en un par de días de pair programming estaba casi un 90% listo), eso fue la motivación que necesitábamos para meterle aun más determinación a ese proyecto.',
      'Lo siguiente, una vez terminada la API de Ducker, fue meternos directamente con lo visual, queríamos hacerlo muy similar a Twitter; sin embargo, también queríamos experimentar por nuestra cuenta, ver qué podíamos cambiar, qué podíamos llegar a mejorar (desde nuestro punto de vista).',
      'De igual manera que con el back, el front avanzó rápidamente, en cuestión de una semana la mayoría de las vistas estaban hechas, las conexiones con la API estaban listas y ya teníamos funcionando las principales acciones de la red social; realizar Cuaks, dar me gustas, comentar y marcar como favorito.',
      'La siguiente parte que hicimos fue la correspondiente al perfil, el poder personalizar su perfil con foto, nombre, descripción, localización, intereses y demás. Esta parte tampoco significó un mayor reto para el Team Ducker, para este momento ya nos encontrábamos muy cómodos trabajando con el proyecto.',
      'Ya de ahí en adelante fue ir realizando detalles, mejorando apartados visuales y corrigiendo bugs (que sorprendentemente no fueron muchos).',
      'Ah, claro, el Stack es el de siempre: TypeScript, JavaScript, NodeJS, React, SASS, Express, JWT, MongoDB, Google Auth Library, Cors, WebSockets y otros.',
      'Quiero agradecer a mis compañeros de Team Ducker Mati y Meli, primero que todo por sumarse al proyecto, segundo porque al momento de transicionar al front, mis habilidades con el CSS no estaban tan trabajadas como sí lo están ahora, me tuvieron toda la paciencia del mundo y me fueron explicando poco a poco, y tercero, por ser tan buena onda y hacer de este proyecto un trabajo muy ameno y divertido.',
    ],

    author,
    creationDate: '11/27/2023',
    tags: [TAGS.project, TAGS.fullstack, TAGS.webSockets, TAGS.CI_CD],
  },
]
