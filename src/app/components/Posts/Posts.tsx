import { getPosts } from "@/app/utils/const";
import React from "react";
import Link from "next/link";

export default function Posts() {
  const posts = getPosts(10);

  return (
    <>
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
              <p className="text-slate-500 text-xs">{introductionParagraph}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
