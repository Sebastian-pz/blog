import React from "react";

interface propsComponent {
  title: string;
  description: string;
  dates?: string;
  link?: string;
  tools?: string;
}

export default function ProjectCard({
  title,
  description,
  dates,
  link,
}: propsComponent) {
  return (
    <article
      className="
      shadow-[0px_100px_80px_rgba(0,_0,_0,_0.07),_0px_41.8px_33.42px_rgba(0,_0,_0,_0.05),_0px_22.3px_17.87px_rgba(0,_0,_0,_0.04),_0px_12.5px_10.02px_rgba(0,_0,_0,_0.04),_0px_6.7px_5.32px_rgba(0,_0,_0,_0.03),_0px_2.8px_2.21px_rgba(0,_0,_0,_0.02)]
    bg-white w-[200px] h-[300px] xl:w-[275px] xl:h-[320] m-3 p-2 md:p-4 lg:p-6 hover:scale-110 duration-1000"
    >
      <img
        src=""
        alt={`Imagen de ${title}`}
        className="w-[50px] h-[50px] sm:h-[100px] sm:w-[100px] lg:w-[200px] m-auto border mt-6 mb-2"
      />
      {link ? (
        <h2 className="font-medium">
          <a href={link}>{title}</a>
        </h2>
      ) : (
        <h2 className="font-medium">{title}</h2>
      )}

      <p className="text-xs text-slate-600">{description}</p>
    </article>
  );
}
