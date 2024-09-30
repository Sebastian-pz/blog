import { ExperienceI } from '../common'

const EXPERIENCES: Array<ExperienceI> = [
  {
    title: 'Fullstack web developer en BB-Bar',
    description:
      'Como desarrollador web Fullstack, trabajé en la creación de un sistema de gestión, enfocado en crear soluciones en contabilidad, logística, ventas y más. Responsable de todo el ciclo de vida de la aplicación.',
    responsibilities: [
      'Desarrollé un sistema de gestión que automatizaba los controles de inventario, el seguimiento de gastos, las estadísticas contables y el monitoreo de ventas, reduciendo las operaciones manuales en más del 80% y minimizando los errores humanos.',
      'Optimicé la gestión de inventario al brindar información en tiempo real sobre los niveles de existencias, el rendimiento diario y las tendencias de ventas, lo que permitió a los empleados realizar acciones con unos pocos clics, mejorando la eficiencia en la toma de decisiones.',
      'Agilicé las operaciones diarias al automatizar los cálculos de facturas y los pagos fraccionados, lo que redujo el tiempo de procesamiento en un 70% y mejoró la satisfacción del cliente durante eventos de alto tráfico.',
      'Desarrollé un sistema de gestión vinculado automáticamente al balance general y al estado de resultados para facilitar los procesos contables, optimizando los costos y los procesos legales.',
    ],
    dates: 'Noviembre 2023 - Julio 2024',
    link: '/post/1d0d966b84354712b92c359cc28a06c2',
    stack:
      'TypeScript, React, NodeJS, NextJS, NestJS, PostgreSQL, Docker, Tailwind, TanStackQuery',
  },
  {
    title: 'Fullstack web developer en Nutrición Vital',
    description:
      'Como desarrollador web full stack, trabajé en la creación de un sistema de comercio electrónico de punto a punto con un equipo multidisciplinario.',
    responsibilities: [
      'Creé una plataforma de comercio electrónico para un sistema basado en puntos, aumentando la adopción de usuarios de 18 a más de 120 en cuatro meses, con ventas en línea que contribuyeron al 40% de los ingresos totales.',
      'Implementé una solución de pago que integra MercadoPago con un algoritmo de web-scraping personalizado (complejidad O(log n)) para garantizar transacciones sin inconvenientes.',
      'Automaticé las comunicaciones con los clientes mediante NodeMailer y verificación por SMS, mejorando la participación del cliente y reduciendo las tasas de abandono del carrito de compras.',
      'Integré un sistema de autenticación de usuario seguro para administrar los datos y las transacciones de los clientes, garantizando el cumplimiento de los estándares de la industria y mejorando la confianza de los usuarios.',
    ],
    dates: 'Junio 2023 - Noviembre 2023',
    link: '/post/6957b082e06f4ba0a18b377143ce407b',
    stack: 'TypeScript, React, NodeJS, Express, PostgreSQL, MongoDB, Bootstrap',
  },
  {
    title: 'Fullstack web developer en la UCA',
    description:
      'Como desarrollador fullstack trabajé en el desarrollo de aplicaciones académicas para la UCA, principalmente para la facultad de derecho.',
    responsibilities: [
      'Lideré el desarrollo de aplicaciones académicas que brindan soporte a más de 1500 estudiantes por semestre, con hasta 250 usuarios simultáneos, utilizando el almacenamiento en caché del frontend para reducir la carga del servidor y mejorar los tiempos de respuesta.',
      'Fui pionero en buenas prácticas en pruebas, documentación y almacenamiento en caché, mejorando el rendimiento de las aplicaciones y reduciendo las solicitudes del backend.',
      'Colaboré estrechamente con profesores y estudiantes para recopilar comentarios y mejorar iterativamente la aplicación, alineando el desarrollo con los objetivos académicos de la universidad.',
    ],
    dates: 'Enero 2023 - Junio 2023',
    link: '/post/2bb2193700824b11bcc33c9dc5dd3c65',
    stack: 'TypeScript, React, NodeJS, Express, PostgreSQL, TanStackQuery',
  },
]

export default EXPERIENCES
