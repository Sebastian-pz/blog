import "./page.css";
import { posts } from "./utils/const";
import Link from "next/link";

export default function Home() {
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
        <h2 className="text-xl border border-b-2">Contenido destacado</h2>
        <p className="text-sm text-slate-700">
          Learn how about we're helping people stay connected, engaged and
          productive today - At work, at school, at home, and at play{" "}
        </p>
      </section>
    </main>
  );
}
