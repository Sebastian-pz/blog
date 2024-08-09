import Image from "next/image";

import Svg from "@/components/svg/Svg";
import Projects from "@/components/Project/Projects";
import Experiences from "@/components/Experience/Experiences";
import ExtendedInfo from "@/components/ExtendedInfo/ExtendedInfo";

import profileImage from "@/public/profileImage.webp";
import GitHubIcon from "@/public/svg/github.svg";
import LinkedInIcon from "@/public/svg/linkedin.svg";
import DownloadIcon from "@/public/svg/download.svg";
import { useTranslations } from "next-intl";

export default function MainPage() {
  const t = useTranslations("about");

  const CV_ROUTE = t("cvRoute");

  return (
    <main className="m-auto  w-[95%] mt-10 rounded-xl md:w-[80%] xl:w-[65%]">
      <div className="flex flex-col gap-10 lg:flex-row justify-between items-center p-6 lg:px-12">
        <div className="flex ">
          <section className="flex items-center">
            <Image
              src={profileImage.src}
              alt="profile image Sebastian Perez"
              width="500"
              height="500"
              className="rounded-full  h-[110px] w-[110px] sm:h-[175px] sm:w-[175px] md:h-[200px] md:w-[200px] border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border-black"
            />
            <section className="ml-2 md:ml-6">
              <h1 className="font-bold text-2xl mb-6 shadow-[4.0px_4.0px_rgba(0,0,0)] border-2 border-black bg-[#a8fca1] -rotate-6 px-2 p-2 md:px-4">
                Sebastian Pérez
              </h1>
              <p className="hidden md:inline">{t("role")}</p>
              <p>spezuluaga@gmail.com</p>
            </section>
          </section>
        </div>
        <section className="flex justify-center items-center">
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
          <a
            download={"CV-SebastianPerez.pdf"}
            href={CV_ROUTE}
            className="flex flex-col border-2 hover:font-bold border-black hover:bg-[#fbfd84] p-3 duration-500 mb-2 mx-3 bg-[#fcfdb9] hover:scale-110"
          >
            <Image
              src={DownloadIcon.src}
              alt={`Icon for download CV`}
              width="24"
              height="24"
              className="mx-auto"
            />
            {t("cv")}
          </a>
        </section>
      </div>

      <div className="border-b border-primary-color-800 mb-9"></div>
      <ExtendedInfo />
      <Experiences />
      <Projects />
    </main>
  );
}
