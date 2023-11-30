import React from "react";
import Link from "next/link";
import Image from "next/image";

import PDFIcon from "../../../../public/svg/pdf.svg";

export default function CV() {
  return (
    <section className="flex flex-col justify-center items-center text-xl font-semibold border-slate-300 border rounded-3xl m-3">
      <Link href="/">
        <Image
          src={PDFIcon.src}
          alt="PDF Icon"
          width="120"
          height="120"
          className="m-auto"
        />
        Descarga mi CV
      </Link>
    </section>
  );
}
