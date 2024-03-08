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
    bg-white w-4/5 h-[200px] xl:w-[275px] xl:h-[320] m-3 hover:scale-110 duration-1000"
    >
      <img
        src=""
        alt={`Imagen de ${title}`}
        className="h-1/2 w-full border-b"
        loading="lazy"
      />
      {link ? (
        <h2 className="px-2 md:px-4 mt-2 font-medium hover:text-secondary-color">
          <a href={link}>{title}</a>
        </h2>
      ) : (
        <h2 className="px-2 md:px-4 mt-2 font-medium hover:text-secondary-color">
          {title}
        </h2>
      )}
      <p className="px-2 md:px-4 text-sm text-slate-600">{description}</p>
    </article>
  );
}
