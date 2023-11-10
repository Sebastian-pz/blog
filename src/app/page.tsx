import "./page.css";
// import { posts } from "./utils/const";
import Link from "next/link";

import { getPosts } from "./services/posts";
import { postInterface } from "./utils/interfaces";

export default async function Home() {
  const posts: Array<postInterface> = await getPosts();

  return (
    <main className="m-auto w-3/4 flex">
      <section className="home__mainSection w-3/4 flex flex-col">
        {posts.map((post, index) => {
          return (
            <div key={index} className={`home__post home__post${index} p-2`}>
              <img src={post.image.src} alt="post image" />
              <div className="home__info">
                <Link className="" href={`/post/${index}`}>
                  {post.title}
                </Link>
                <p className="text-slate-500 text-xs">{post.description[0]}</p>
              </div>
            </div>
          );
        })}
      </section>
      <section className="home__sideSection w-1/4">
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
