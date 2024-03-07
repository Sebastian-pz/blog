"use client";

import React from "react";
import Image from "next/image";
import PDFIcon from "@/public/svg/pdf.svg";
12;
export default function CV() {
  return (
    <section className="flex flex-col justify-center items-center text-xl font-semibold border-slate-300 border rounded-3xl m-3">
      <h3 className="my-6">Puedes descargar mi CV a continuación</h3>
      <a
        href="https://drive.google.com/uc?export=download&id=1qzGvyiT6o4QuRhAkFRl79q_JWNW2nvDQ"
        target="__blank"
      >
        <Image
          src={PDFIcon.src}
          alt="PDF Icon"
          width="120"
          height="120"
          className="m-auto"
        />
      </a>
    </section>
  );
}
