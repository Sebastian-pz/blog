import { useTranslations } from "next-intl";

import Tags from "@/app/components/Tags/Tags";

export default function page() {
  const t = useTranslations("emptyPosts");

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <article className="w-full md:w-1/2 -mt-56 text-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl lg:mb-4 font-bold">
          {t("title")}
        </h1>
        <p className="lg:text-lg">{t("description")}</p>

        <div className="w-5/6 md:w-72 lg:w-[600px] m-auto mt-14">
          <Tags />
        </div>
      </article>
    </div>
  );
}
