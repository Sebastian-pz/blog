const Routes: Array<IRoute> = [
  {
    label: "home",
    path: "/",
    styles: "",
  },
  {
    label: "about",
    path: "/about",
    styles: "",
  },
  {
    label: "social",
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
