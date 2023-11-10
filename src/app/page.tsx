import "./page.css";
// import { posts } from "./utils/const";
import Link from "next/link";

import { getPosts } from "./services/posts";
import { postInterface } from "./utils/interfaces";

export default async function Home() {
  const posts: Array<postInterface> = (await getPosts()).slice(0, 5);

  return (
    <main className="home">
      <section className="">
        {posts.map((post, index) => {
          const [introductionParagraph] = post.description;
          return (
            <div
              key={index}
              className="home__post border-b-2 border-slate-100 pt-9 pb-9"
            >
              <div className="m-auto">
                <img
                  src={post.image.src}
                  alt="post image"
                  className="home__post__image"
                />
              </div>
              <div className="home__post__info">
                <Link className="" href={`/post/${index}`}>
                  {post.title}
                </Link>
                <p className="text-slate-500 text-xs">
                  {introductionParagraph}
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <section className="">
        <h2 className="text-xl ">Información sobre el proyecto</h2>
        <p className="text-sm  text-slate-700 mt-3">
          En este blog me enfoco en compartir las últimas actualizaciones sobre
          mis proyectos, consejos de programación e información relevante de la
          industria. ¡Vamos a codificar, aprender y crecer juntos! 💡👨‍💻
        </p>
        <p className="text-sm text-slate-700 mt-3">
          Si tienes alguna sugerencia ¡No dudes en contactarme!
        </p>
      </section>
    </main>
  );
}
