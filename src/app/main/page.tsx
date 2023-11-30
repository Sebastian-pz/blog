import React from "react";
import Image from "next/image";
import bannerImage from "../../../public/banner.webp";
import profileImage from "../../../public/profileImage.webp";
import styles from "../utils/styles";

import Svg from "../components/svg/Svg";
import CV from "../components/CV/CV";
import Experiences from "../components/Experience/Experiences";
import Projects from "../components/Project/Projects";

import GitHubIcon from "../../../public/svg/github.svg";
import LinkedInIcon from "../../../public/svg/linkedin.svg";
import CakeIcon from "../../../public/svg/cake.svg";
import WorkIcon from "../../../public/svg/work.svg";

export default function MainPage() {
  return (
    <div className="m-auto border border-slate-400 w-[95%] rounded-t-xl md:w-[80%] xl:w-[60%]">
      <Image
        src={bannerImage.src}
        alt="profile banner image"
        width="1280"
        height="600"
        className="rounded-t-xl border-b-[6px]"
      />
      <Image
        src={profileImage.src}
        alt="profile image Sebastian Perez"
        width="500"
        height="500"
        className="rounded-full absolute top-[165px] left-[20px] h-[100px] w-[100px] border-[6px]"
      />
      <a
        href="mailto:spezuluaga@gmail.com"
        className={`
        border p-3 rounded-xl ${styles.borders} absolute left-[63%] top-[230px] font-semibold hover:bg-slate-100`}
      >
        ¡Contáctame!
      </a>
      <section className="mt-[60px] mb-4 px-2">
        <h1 className="font-bold text-2xl mb-3">Sebastian Pérez</h1>
        <p>Desarrollador fullstack enfocado en la web 🌎</p>
        <p>
          Programando desde 2020, con experiencia en el desarrollo frontend y
          backend.
        </p>
        <p>
          Me gusta programar cosas 👨🏼‍💻, los animales 🐕, los atardeceres 🌄 y
          demás...
        </p>
      </section>

      <section className="flex justify-evenly border-b-2 border-slate-100">
        <abbr title="Open to work" className="no-underline">
          <Svg
            label="Disponible"
            link="mailto:spezuluaga@gmail.com"
            svg={WorkIcon}
          />
        </abbr>
        <Svg label="29 de Julio" link="/" svg={CakeIcon} />

        <Svg
          label="LinkedIn"
          link="https://www.linkedin.com/in/sebastian-perez-zuluaga/"
          svg={LinkedInIcon}
        />
        <Svg
          label="GitHub"
          link="https://github.com/Sebastian-pz"
          svg={GitHubIcon}
        />
      </section>

      {/* @ts-ignore */}
      <marquee className="bg-[rgba(0,0,0,0.5)] text-white h-8 text-xl mt-4">
        Desarrollo aplicaciones web fullstack con TypeScript, JavaScript,
        NodeJS, Express, React, Tailwind, Bootstrap, CSS Vanila, SQL, NoSQL...
        (actualmente utilizando NextJS)
        {/* @ts-ignore */}
      </marquee>

      <Experiences />
      <Projects />

      <CV />
    </div>
  );
}
