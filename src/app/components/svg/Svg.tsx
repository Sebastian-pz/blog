import Link from "next/link";
import React from "react";
import Image from "next/image";

interface PropsComponent {
  svg: any;
  label: string;
  link: string;
}

export default function Svg({ svg, label, link }: PropsComponent) {
  return (
    <Link href={link} target="_blank" className="flex flex-col ">
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
