import Link from "next/link";
import React from "react";
import LINK_LIST from "./Constants";

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
