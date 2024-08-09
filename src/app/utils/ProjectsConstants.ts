import miniDucker from '@/public/project/mini-Ducker.webp'
import miniRPSGame from '@/public/project/mini-rpsGame.webp'
import miniBlog from '@/public/project/mini-blog.webp'

interface projectInterface {
  title: string
  description: string
  dates: string
  link: string
  src?: string
}

const PROJECTS: Array<projectInterface> = [
  {
    title: 'Ducker',
    description: 'Junto con mis compañeros creamos una copia de Twitter (X)',
    dates: 'Enero 2023 - Febrero 2023',
    link: 'https://github.com/search?q=owner%3ASebastian-pz+ducker&type=repositories',
    src: miniDucker.src,
  },
  {
    title: 'Rock Paper Scissors game',
    description: 'El típico juego de piedra, papel o tijera.',
    dates: 'Enero 2023 - Julio 2023',
    link: 'https://rps-game-navy.vercel.app/',
    src: miniRPSGame.src,
  },
  {
    title: 'Mi blog',
    description: 'Trabajo como desarrollador web para un aplicativo e-commerce',
    dates: 'Enero 2023 - Julio 2023',
    link: 'https://blog-sebastian-perez.vercel.app/blog',
    src: miniBlog.src,
  },
  {
    title: 'Math Challenge',
    description:
      'Un juego de retos matemáticos para poner a prueba tu rapidez mental.',
    dates: 'Enero 2023 - Julio 2023',
    link: '/',
    src: '',
  },
  {
    title: 'RockStar Place',
    description: 'Creamos una aplicación para que los bares contrate bandas.',
    dates: 'Enero 2023 - Julio 2023',
    link: 'https://github.com/Sebastian-pz/PF-RockStar_Place',
    src: '',
  },
  {
    title: 'Tetris Game',
    description: 'El juego básico de Tetris, inspirado en MiduDev.',
    dates: 'Enero 2023 - Julio 2023',
    link: 'https://github.com/Sebastian-pz/tetris',
    src: '',
  },
]

export default PROJECTS
