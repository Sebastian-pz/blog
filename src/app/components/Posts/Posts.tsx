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
            className="home__post border-b-2 border-slate-200 pt-9 pb-9"
          >
            <div className="m-auto">
              <img
                src={post.image.src}
                alt={`post image about ${introductionParagraph}`}
                className="home__post__image"
              />
            </div>
            <div className="home__post__info">
              {/* Using API */}
              {/* <Link className="" href={`/post/${post.id}`}>
                {post.title}
              </Link> */}
              <Link className="" href={`/post/${index + 1}`}>
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
