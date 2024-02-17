import { getRandomPost } from "@/utilities/const";

export default [
  {
    label: "Sobre mí",
    path: "/main",
    styles: "",
  },
  {
    label: "Blog",
    path: "/",
    styles: "",
  },
  {
    label: "About",
    path: "/about",
    styles: "",
  },
  {
    label: "Post random",
    path: `/post/${getRandomPost()}`,
    styles: "",
  },
];
