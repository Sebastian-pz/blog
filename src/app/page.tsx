import "./page.css";
import womanPhoto from "../../public/woman.png";
import Link from "next/link";

import { getPosts } from "./services/posts";
import { postInterface } from "./utils/interfaces";

export default async function Home() {
  const posts: Array<postInterface> = (await getPosts()).slice(0, 5);

  const [mainPost] = posts;

  console.log(mainPost);

  return (
    <main className="home">
      <section className="">
        <div className="home__mainPost text-center border-b-2 border-slate-200 pb-6">
          <h2 className="text-3xl font-bold mb-3">
            Titulo de la publicación principal
          </h2>
          <img
            src={womanPhoto.src}
            alt=""
            className="h-2/4 mb-3 max-h-[350px] m-auto"
          />
          <p>
            Esta es una descripción genérica de una publicación en el blog,
            estamos buscando probar los estilos en la publicación que se
            encuentra al inicio de todo
          </p>
        </div>

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
                  alt={`post image about ${introductionParagraph}`}
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
