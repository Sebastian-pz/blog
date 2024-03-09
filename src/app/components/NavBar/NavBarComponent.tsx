import Link from "next/link";
import React from "react";
import LINK_LIST from "./Constants";

export default function Navbar() {
  return (
    <div className="flex p-2 bg-primary-color-100 border border-primary-color-800 justify-center items-center w-full">
      {LINK_LIST.map((route, index) => {
        const { label, path, styles } = route;
        return (
          <Link
            href={path}
            key={index}
            className={`${styles} m-2 hover:text-primary-color-500 hover:font-semibold  md:text-lg md:mx-6 `}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
