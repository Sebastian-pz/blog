"use client";

import { useEffect, useState } from "react";
import { postInterface } from "../../utils/interfaces";
import { getPost } from "../../utils/const";

interface paramsInterface {
  params: {
    id: number;
  };
}

export default function Page({ params }: paramsInterface) {
  const { id } = params;
  console.log(id);

  const [post, setPost] = useState<postInterface | undefined>(undefined);

  useEffect(() => {
    if (!post) setPost(getPost(id || 0));
  }, [post]);

  console.log(post);

  if (post) {
    return (
      <div className="m-auto w-3/5">
        <h1 className="text-3xl mb-3">{post.title}</h1>
        <p className="text-sm text-gray-500">{post.author}</p>
        <p className="text-sm text-gray-500">{`Created at: ${post.creationDate}`}</p>
        <img
          src={post.image.src}
          alt="post main image"
          className="w-[80%] ml-auto mr-auto mb-10 max-h-[600px] overflow-hidden"
        />
        <section className="">
          {post.description.map((text, index) => {
            return (
              <p key={index} className="leading-9 mb-7">
                {text}
              </p>
            );
          })}
        </section>
      </div>
    );
  }

  return <div>Loading post</div>;
}
