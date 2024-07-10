import "./page.css";

// Componentes
import MainPost from "@/components/MainPost/MainPost";
import Posts from "@/components/Posts/Posts";
import MainInfo from "@/components/MainInfo/MainInfo";
import PostNavigation from "@/components/PostsNavigation/PostNavigation";
import { useTranslations } from "next-intl";

export default function Home() {
  useTranslations("index");
  return (
    <main className="home flex justify-center gap-x-4">
      <section className="lg:w-3/4 md:w-2/3">
        <MainPost />
        <PostNavigation />
        <Posts />
      </section>
      <section className="lg:w-1/4 hidden lg:block mt-10 ml-4">
        <MainInfo />
      </section>
    </main>
  );
}
