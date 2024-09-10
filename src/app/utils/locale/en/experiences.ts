import { ExperienceI } from '../common'

const EXPERIENCES: Array<ExperienceI> = [
  {
    title: 'Fullstack Web Developer at BB-Bar. Colombia',
    description:
      'As a Fullstack web developer, I worked on creating a management system, focused on creating solutions in accounting, logistics, sales and more. Responsible for the entire lifecycle of the application.',
    responsibilities: [
      'Developed a management system automating inventory checks, expense tracking, accounting stats and sales monitoring, reducing manual operations by over 80% and minimizing human errors.',
      'Optimized inventory management by providing real-time insights on stock levels, daily performance, and sales trends, allowing employees to perform actions in a few clicks, improving decision-making efficiency.',
      'Streamlined daily operations by automating bill calculations and split payments, reducing processing time by 70% and improving customer satisfaction during high-traffic events.',
      'Developed a management system automatically linked to the balance sheet and income statement to facilitate accounting processes, optimizing costs and legal processes.',
    ],
    dates: 'November 2023 - July 2024',
    link: '/post/1d0d966b84354712b92c359cc28a06c2',
    stack:
      'TypeScript, React, NodeJS, NextJS, NestJS, PostgreSQL, Docker, Tailwind, TanStackQuery',
  },
  {
    title: 'Fullstack Web Developer at Nutrición Vital',
    description:
      'As a full stack web developer, I worked on building an end-to-end points-based e-commerce system with a multidisciplinary team.',
    responsibilities: [
      'Built an e-commerce platform for a point-based system, growing user adoption from 18 to 120+ in four months, with online sales contributing to 40% of the total revenue.',
      'Implemented a payment solution integrating MercadoPago with a custom web-scraping algorithm (O(log n) complexity) to ensure seamless transactions.',
      'Automated customer communications using NodeMailer and SMS verification, enhancing customer engagement and reducing cart abandonment rates.',
      'Integrated a secure user authentication system to manage customer data and transactions, ensuring compliance with industry standards and improving user trust.',
    ],
    dates: 'June 2023 - September 2023',
    link: '/post/6957b082e06f4ba0a18b377143ce407b',
    stack: 'TypeScript, React, NodeJS, Express, PostgreSQL, MongoDB, Bootstrap',
  },
  {
    title: 'Fullstack Web Developer at Universidad Católica Argentina',
    description:
      'As a fullstack developer, I worked on the development of academic applications for the UCA, mainly for the law school.',
    responsibilities: [
      'Led the development of academic applications supporting 1500+ students per semester, with up to 250 simultaneous users, using frontend caching to reduce server load and improve response times.',
      'Pioneered good practices in testing, documentation, and caching, enhancing application performance and reducing backend requests.',
      'Collaborated closely with faculty and students to gather feedback and iteratively improve the application, aligning development with the university’s academic goals.',
    ],
    dates: 'January 2023 - June 2023',
    link: '/post/2bb2193700824b11bcc33c9dc5dd3c65',
    stack: 'TypeScript, React, NodeJS, Express, PostgreSQL, TanStackQuery',
  },
]

export default EXPERIENCES
