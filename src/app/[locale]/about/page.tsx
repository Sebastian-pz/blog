import Image from "next/image";

import Svg from "@/components/svg/Svg";
import CV from "@/components/CV/CV";
import Projects from "@/components/Project/Projects";
import Experiences from "@/components/Experience/Experiences";
import ExtendedInfo from "@/components/ExtendedInfo/ExtendedInfo";

import bannerImage from "@/public/banner.webp";
import profileImage from "@/public/profileImage.webp";
import GitHubIcon from "@/public/svg/github.svg";
import LinkedInIcon from "@/public/svg/linkedin.svg";
import CakeIcon from "@/public/svg/cake.svg";
import WorkIcon from "@/public/svg/work.svg";
import { useTranslations } from "next-intl";

export default function MainPage() {
  const t = useTranslations("about");
  return (
    <main className="m-auto border border-primary-color-800 w-[95%] mt-10 rounded-xl md:w-[80%] xl:w-[60%]">
      <Image
        src={bannerImage.src}
        alt="profile banner image"
        width="1280"
        height="600"
        className="rounded-t-xl border-primary-color-800 border-b-2 object-contain"
      />
      <div className="flex justify-center md:justify-between  items-center p-6 lg:px-12">
        <div className="flex items-center justify-center ">
          <Image
            src={profileImage.src}
            alt="profile image Sebastian Perez"
            width="500"
            height="500"
            className="rounded-full  h-[110px] w-[110px] sm:h-[175px] sm:w-[175px] md:h-[200px] md:w-[200px] border shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          />
          <section className="ml-2 md:ml-6">
            <h1 className="font-bold text-2xl mb-3">Sebastian Pérez</h1>
            <p className="hidden md:inline">{t("role")}</p>
            <p className="md:hidden">{t("focused")}</p>
            <p>spezuluaga@gmail.com</p>
          </section>
        </div>
        <a
          href="mailto:spezuluaga@gmail.com"
          className="border bg-primary-color-500 p-2 rounded-lg hidden md:inline   h-10 hover:bg-primary-color-700 text-white"
        >
          {t("callToAction")}
        </a>
      </div>
      <section className="px-3 mb-4 lg:px-12">
        <p>{t("introduction")}</p>
        <p>{t("likeTo")}</p>
      </section>

      <section className="flex justify-evenly border-b border-primary-color-800">
        <abbr title={t("workAvailability")} className="no-underline">
          <Svg
            label={t("workAvailability")}
            link="mailto:spezuluaga@gmail.com"
            svg={WorkIcon}
          />
        </abbr>

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
        <Svg label={t("birthDate")} svg={CakeIcon} />
      </section>

      <ExtendedInfo />
      <section className="mt-4">
        <h1 className="text-2xl text-center text-primary-color-500 font-bold">
          Main skills
        </h1>
        <p className="text-center">
          TypeScript - NodeJS - React - NestJS - NextJS - .Net - express - SQL -
          NoSQL and more
        </p>
      </section>
      <Experiences />
      <Projects />

      <CV />
    </main>
  );
}
