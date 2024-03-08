import { getRandomPost } from "@/utilities/const";

export default [
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
];
