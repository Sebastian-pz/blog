import { getPosts } from "@/app/utils/const";
import React from "react";
import Post from "../Post/Post";

export default function Posts() {
  const posts = getPosts(10);

  return (
    <>
      {posts.map((post, index) => {
        const [introductionParagraph] = post.description;
        return (
          <Post
            post={post}
            introductionParagraph={introductionParagraph}
            key={index}
          />
        );
      })}
    </>
  );
}
