import { getPostsByType } from "@/app/utils/const";
import FeaturePost from "./FeaturePost/FeaturePost";
import { PostTypes } from "@/app/utils/interfaces";
import { useLocale, useTranslations } from "next-intl";

export default function FeaturePosts() {
  const t = useTranslations("featurePosts");
  const localeActive = useLocale();
  const posts = getPostsByType(localeActive, PostTypes.experience).slice(0, 2);

  return (
    <div className="rounded-lg border bg-muted p-6">
      <h2 className="text-2xl font-bold">{t("title")}</h2>
      <div className="mt-4 space-y-4">
        {posts.map(({ creationDate, title, image, id }, i) => {
          return (
            <FeaturePost
              id={id as string}
              date={creationDate}
              image={image}
              title={title}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
