import Link from "next/link";
import { postInterface } from "@/utilities/interfaces";

interface PostProps {
  post: postInterface;
  introductionParagraph: string | String;
}

export default function Post({ post, introductionParagraph }: PostProps) {
  return (
    <div className="home__post border-b-2 lg:text-xl border-primary-color-900 pt-9 pb-9">
      <div className="m-auto">
        <img
          src={post.image.src}
          alt={`post image about ${introductionParagraph}`}
          className="home__post__image shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        />
      </div>
      <div className="home__post__info">
        <h2 className="mb-4 font-bold hover:text-primary-color-600">
          <Link className="" href={`/post/${post.id}`}>
            {post.title}
          </Link>
        </h2>
        <p className="text-slate-500 text-xs lg:text-lg">
          {introductionParagraph}
        </p>
      </div>
    </div>
  );
}
