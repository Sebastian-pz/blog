import "./page.css";

// Componentes
import MainPost from "@/components/MainPost/MainPost";
import Posts from "@/components/Posts/Posts";
import MainInfo from "@/components/MainInfo/MainInfo";
import PostNavigation from "@/components/PostsNavigation/PostNavigation";

export default async function Home() {
  return (
    <main className="home">
      <section className="">
        <MainPost />
        <PostNavigation />
        <Posts />
      </section>
      <section className="">
        <MainInfo />
      </section>
    </main>
  );
}
