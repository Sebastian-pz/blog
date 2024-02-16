import { postInterface } from "@/app/utils/interfaces";
import Link from "next/link";

interface PostProps {
  post: postInterface;
  introductionParagraph: string | String;
}

export default function Post({ post, introductionParagraph }: PostProps) {
  return (
    <div className="home__post border-b-2 border-slate-200 pt-9 pb-9">
      <div className="m-auto">
        <img
          src={post.image.src}
          alt={`post image about ${introductionParagraph}`}
          className="home__post__image"
        />
      </div>
      <div className="home__post__info">
        <h2 className="mb-4">
          <Link className="" href={`/post/${post.id}`}>
            {post.title}
          </Link>
        </h2>
        <p className="text-slate-500 text-xs">{introductionParagraph}</p>
      </div>
    </div>
  );
}
