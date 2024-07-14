import Link from "next/link";
import { postInterface } from "@/utilities/interfaces";
import { useLocale } from "next-intl";

interface PostProps {
  post: postInterface;
  introductionParagraph: string | String;
}

export default function Post({ post, introductionParagraph }: PostProps) {
  const activeLocale = useLocale();

  return (
    <article className="home__post border-b lg:text-xl border-border-color py-9">
      <div className="m-auto">
        <img
          src={post.image.src}
          alt={`post image about ${introductionParagraph}`}
          className="home__post__image shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        />
      </div>
      <div className="home__post__info">
        <h2 className="mb-4 md:text-lg font-bold hover:text-primary-color-600">
          <Link className="" href={`/${activeLocale}/post/${post.id}`}>
            {post.title}
          </Link>
        </h2>
        <p className="text-slate-500 text-xs md:text-lg lg:text-lg">
          {introductionParagraph}
        </p>
      </div>
    </article>
  );
}
