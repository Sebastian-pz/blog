import { getRandomPost } from "@/utilities/const";

const Routes: Array<IRoute> = [
  {
    label: "Sobre mí",
    path: "/",
    styles: "",
  },
  {
    label: "Blog",
    path: "/blog",
    styles: "",
  },
  // {
  //   label: "About",
  //   path: "/about",
  //   styles: "",
  // },
  {
    label: "Post random",
    path: `/post/${getRandomPost()}`,
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
