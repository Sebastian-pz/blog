import FilteredPosts from "@/components/FilteredPosts/FilteredPosts";
import { getPostsByType } from "@/utilities/const";
import { PostTypes } from "@/utilities/interfaces";
import { useLocale, useTranslations } from "next-intl";

export default function page() {
  const localeActive = useLocale();
  const posts = getPostsByType(localeActive, PostTypes.opinion);

  const t = useTranslations("filteredPostsOpinion");

  return (
    <FilteredPosts
      posts={posts}
      title={t("title")}
      description={t("description")}
    />
  );
}
