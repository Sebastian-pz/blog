import "./page.css";

// Componentes
import MainPost from "@/components/MainPost/MainPost";
import Posts from "@/components/Posts/Posts";
import MainInfo from "@/components/MainInfo/MainInfo";
import PostNavigation from "@/components/PostsNavigation/PostNavigation";
import { useLocale, useTranslations } from "next-intl";
import { getPosts } from "../utils/const";

export default function Home() {
  useTranslations("index");
  const localeActive = useLocale();
  const [mainPost, ...posts] = getPosts(localeActive);

  return (
    <main className="home flex justify-center gap-x-4">
      <section className="lg:w-3/4 md:w-2/3">
        <MainPost post={mainPost} />
        <PostNavigation />
        <Posts posts={posts} />
      </section>
      <section className="lg:w-1/4 hidden lg:block mt-10 ml-4">
        <MainInfo />
      </section>
    </main>
  );
}
