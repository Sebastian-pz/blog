export default [
  {
    label: "Home",
    path: "/",
    styles: "",
  },
  {
    label: "About",
    path: "/about",
    styles: "",
  },
  {
    label: "Sign Up",
    path: "/signup",
    styles: "pointer-events-none text-slate-400 ",
  },
  {
    label: "Login",
    path: "login",
    styles: " pointer-events-none text-slate-400 ",
  },
  {
    label: "Post",
    path: `/post/${Math.floor(Math.random() * 4)}`,
    styles: "",
  },
];
