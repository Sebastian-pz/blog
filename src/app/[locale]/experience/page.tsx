import { getFilteredPosts } from "@/utilities/const";
import { PostTypes } from "@/utilities/interfaces";
import FilteredPosts from "@/components/FilteredPosts/FilteredPosts";
import { useTranslations } from "next-intl";

export default function page() {
  const posts = getFilteredPosts(PostTypes.experience);

  const t = useTranslations("filteredPostsExperience");

  return (
    <FilteredPosts
      posts={posts}
      title={t("title")}
      description={t("description")}
    />
  );
}
