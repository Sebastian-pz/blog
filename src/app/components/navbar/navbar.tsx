import Link from "next/link";
import React from "react";

const LINK_LIST = [
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
    path: "/post/0",
    styles: "",
  },
];

export default function Navbar() {
  return (
    <div className="flex w-auto h-24 border border-b-2 border-gray-200 mb-4 justify-center items-center">
      {LINK_LIST.map((route, index) => {
        const { label, path, styles } = route;
        return (
          <Link href={path} key={index} className={`m-2 ${styles}`}>
            {label}
          </Link>
        );
      })}
    </div>
  );
}
