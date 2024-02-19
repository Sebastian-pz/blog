import Link from "next/link";
import React from "react";
import LINK_LIST from "./Constants";

export default function Navbar() {
  return (
    <div className="flex p-2 bg-[#e1e7ff95] border border-border-color justify-center items-center w-full">
      {LINK_LIST.map((route, index) => {
        const { label, path, styles } = route;
        return (
          <Link
            href={path}
            key={index}
            className={`m-2 ${styles} hover:text-primary-color hover:font-semibold  md:text-lg md:mx-6`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
