import miniDucker from '@/public/project/mini-Ducker.webp'
import miniRPSGame from '@/public/project/mini-rpsGame.webp'
import miniBlog from '@/public/project/mini-blog.webp'

export interface Project {
  title: string
  description: string
  dates: string
  link: string
  src?: string
}

interface ProjectRecord {
  title: { es: string; en: string }
  dates: { es: string; en: string }
  link: string
  src?: string
  description: { es: string; en: string }
}

const PROJECTS: ProjectRecord[] = [
  {
    title: { es: 'Ducker', en: 'Ducker' },
    dates: { es: 'Enero 2023 – Febrero 2023', en: 'January 2023 – February 2023' },
    link: 'https://github.com/search?q=owner%3ASebastian-pz+ducker&type=repositories',
    src: miniDucker.src,
    description: {
      es: 'Una red social inspirada en Twitter, hecha en equipo. El backend y las vistas principales salieron en un par de semanas de pair programming.',
      en: 'A social network inspired by Twitter, built with friends. The API and the main screens came together in a couple of weeks of pair programming.',
    },
  },
  {
    title: { es: 'Piedra, papel o tijera', en: 'Rock Paper Scissors' },
    dates: { es: '2023', en: '2023' },
    link: 'https://rps-game-navy.vercel.app/',
    src: miniRPSGame.src,
    description: {
      es: 'El juego de piedra, papel o tijera. Empezó como un ejercicio de CSS y terminó con la lógica para jugar.',
      en: 'Rock, paper, scissors. It started as a CSS exercise and ended with enough logic to play.',
    },
  },
  {
    title: { es: 'Este blog', en: 'This blog' },
    dates: { es: 'Desde noviembre 2023', en: 'Since November 2023' },
    link: 'https://www.sebastian-perez-dev.com',
    src: miniBlog.src,
    description: {
      es: 'Este sitio. Next.js, artículos en español e inglés, y el lugar donde dejo lo que voy aprendiendo.',
      en: 'This site. Next.js, articles in Spanish and English, and the place where I keep what I learn.',
    },
  },
  {
    title: { es: 'Math Challenge', en: 'Math Challenge' },
    dates: { es: '2023', en: '2023' },
    link: '',
    description: {
      es: 'Retos de aritmética con tiempo, para practicar la rapidez con sumas, restas, multiplicaciones y divisiones.',
      en: 'Timed arithmetic drills for addition, subtraction, multiplication, and division.',
    },
  },
  {
    title: { es: 'RockStar Place', en: 'RockStar Place' },
    dates: { es: '2023', en: '2023' },
    link: 'https://github.com/Sebastian-pz/PF-RockStar_Place',
    description: {
      es: 'Una aplicación para que los bares encuentren bandas.',
      en: 'An app for bars to find bands.',
    },
  },
  {
    title: { es: 'Tetris', en: 'Tetris' },
    dates: { es: '2023', en: '2023' },
    link: 'https://github.com/Sebastian-pz/tetris',
    description: {
      es: 'Un Tetris sencillo, a partir de un ejercicio de Midudev.',
      en: 'A small Tetris, starting from a Midudev exercise.',
    },
  },
]

export function getProjects(locale: string): Project[] {
  const language = locale === 'es' ? 'es' : 'en'
  return PROJECTS.map((project) => ({
    title: project.title[language],
    dates: project.dates[language],
    link: project.link,
    src: project.src,
    description: project.description[language],
  }))
}
