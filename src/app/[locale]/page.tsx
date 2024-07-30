import "./page.css";
// import { useLocale, useTranslations } from "next-intl";
// import { getPosts } from "../utils/const";

// Componentes
import PostsSection from "@/components/PostsSection/PostsSection";
import HeaderSection from "@/components/HeaderSection/HeaderSection";

export default function Home() {
  // useTranslations("index");
  // const localeActive = useLocale();
  // const [mainPost, ...posts] = getPosts(localeActive);

  return (
    <div className="bg-background text-foreground">
      <HeaderSection />
      <PostsSection />
    </div>
  );
}
