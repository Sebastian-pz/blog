import { useLocale, useTranslations } from "next-intl";
import PersonalizedLink from "./PersonalizedLink";

export default function PostNavigation() {
  const t = useTranslations("postNavigation");
  const activeLocale = useLocale();

  return (
    <>
      <h2 className="text-center mt-6 text-lg font-bold">{t("title")}</h2>
      <div className="h-6 mt-3 flex justify-center text-white">
        <PersonalizedLink
          href={`/${activeLocale}/experience`}
          label={t("experience")}
        />
        <PersonalizedLink
          href={`/${activeLocale}/project`}
          label={t("opinion")}
        />
        <PersonalizedLink
          href={`/${activeLocale}/opinion`}
          label={t("projects")}
        />
      </div>
    </>
  );
}
