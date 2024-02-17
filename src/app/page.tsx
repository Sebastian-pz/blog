import "./page.css";

// En el caso de utilizar los posts Constantes
// import { getPosts } from "./utils/const";

// En el caso de utilizarlo a través de la API
// import { getPosts } from "./services/posts";
// import { postInterface } from "./utils/interfaces";

// Componentes
import MainPost from "@/components/MainPost/MainPost";
import Posts from "@/components/Posts/Posts";
import MainInfo from "@/components/MainInfo/MainInfo";
import PostNavigation from "@/components/PostsNavigation/PostNavigation";

export default async function Home() {
  // API
  // const posts: Array<postInterface> = (await getPosts()).slice(0, 5);

  // Code
  // const posts = getPosts(10);

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
