import Link from "next/link";
import React from "react";
import Image from "next/image";

interface PropsComponent {
  svg: any;
  label: string;
  link?: string;
}

export default function Svg({ svg, label, link }: PropsComponent) {
  if (!link)
    return (
      <div className="flex flex-col ">
        <Image
          src={svg.src}
          alt={`Icon for ${label}`}
          width="24"
          height="24"
          className="mx-auto"
        />
        {label}
      </div>
    );

  return (
    <Link
      href={link}
      target="_blank"
      className="flex flex-col hover:bg-[#3c57c240] rounded-lg duration-500 mb-2 p-1"
    >
      <Image
        src={svg.src}
        alt={`Icon for ${label}`}
        width="24"
        height="24"
        className="mx-auto"
      />
      {label}
    </Link>
  );
}
