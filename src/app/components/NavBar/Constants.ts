const Routes: Array<IRoute> = [
  {
    label: "Inicio",
    path: "/",
    styles: "",
  },
  {
    label: "Sobre mí",
    path: "/about",
    styles: "",
  },
  {
    label: "Social",
    path: "/social",
    styles: "",
  },
];

interface IRoute {
  label: string;
  path: string;
  styles: string;
}

export default Routes;
