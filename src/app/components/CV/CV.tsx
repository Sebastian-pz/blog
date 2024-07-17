import React from "react";
import Image from "next/image";
import PDFIcon from "@/public/svg/pdf.svg";
import { useTranslations } from "next-intl";
12;
export default function CV() {
  const t = useTranslations("downloadCV");
  const CV_ROUTE = t("link");

  return (
    <section className="w-1/4 min-w-[230px] m-auto flex p-3 flex-col text-center justify-center items-center text-xl font-semibold bg-bg-color border-slate-300 border rounded-3xl my-6">
      <h3 className="my-3">Descarga mi CV</h3>
      <a
        // href="https://drive.google.com/uc?export=download&id=156QEbOE3iUdsADTBpRGtzYTFcAFgUTL268uJt1MS4L4"
        // target="__blank"
        download={"CV-es-SebastianPerez.pdf"}
        href={CV_ROUTE}
      >
        <Image
          src={PDFIcon.src}
          alt="PDF Icon"
          width="120"
          height="120"
          className="m-auto bg-primary-color-200 hover:bg-primary-color-300 rounded-full p-3 duration-100"
        />
      </a>
    </section>
  );
}
