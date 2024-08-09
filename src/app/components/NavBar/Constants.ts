interface IRoute {
  label: string
  path: string
  styles: string
}

const Routes: Array<IRoute> = [
  {
    label: 'home',
    path: '/',
    styles: '',
  },
  {
    label: 'social',
    path: '/social',
    styles: '',
  },
  {
    label: 'about',
    path: '/about',
    styles: '',
  },
]

export default Routes
