// En el caso de utilizar el método de client rendering
// "use client"
// import { useEffect, useState } from "react";
// import { postInterface } from "../../utils/interfaces";

import Link from "next/link";
import { getPost } from "../../utils/const";

import MediaComponent from "@/app/components/Media/MediaComponent";

interface paramsInterface {
  params: {
    id: number;
  };
}

export default function Page({ params }: paramsInterface) {
  // Método con NextJS (server rendering)
  const post = getPost(params.id);

  // Método tradicional con React ->
  /*
    const [post, setPost] = useState<postInterface | undefined>(undefined);
    useEffect(() => {
      if (!post) setPost(getPost(id || 0));
    }, [post]);
    */

  if (post) {
    return (
      <div className="m-auto w-3/4 sm:w-3/5 lg:w-2/5">
        <h1 className="text-3xl font-bold mb-3 mt-6">{post.title}</h1>
        <p className="text-sm text-gray-500">{post.author}</p>
        <p className="text-sm text-gray-500">{`Created at: ${post.creationDate}`}</p>

        <MediaComponent
          mediaType={post.mediaType}
          media={post.media ? post.media : post.image}
          introductionParagraph={post.description[0]}
        />

        {/* <img
          src={post.media.src}
          alt="post main image"
          className="m-auto mb-6 w-[90%] lg:w-3/5"
        /> */}
        <section className="">
          {post.description.map((text, index) => {
            // Me sorprende lo bien optimizado que está el método includes
            if (text.includes("https://")) {
              return (
                <Link
                  href={encodeURI(text.toString())}
                  target="_blank"
                  className="text-lime-700 hover:text-lime-600"
                >
                  {text}
                </Link>
              );
            }

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
