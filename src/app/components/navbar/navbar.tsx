import Link from "next/link";
import React from "react";

const LINK_LIST = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Sign Up",
    path: "/signup",
  },
  {
    label: "Login",
    path: "login",
  },
  {
    label: "Post",
    path: "/post/0",
  },
];

export default function Navbar() {
  return (
    <div className="flex w-auto h-24 border border-b-2 border-gray-100 mb-4 justify-center items-center">
      {LINK_LIST.map((route, index) => {
        const { label, path } = route;
        return (
          <Link href={path} key={index} className="m-2">
            {label}
          </Link>
        );
      })}
    </div>
  );
}
