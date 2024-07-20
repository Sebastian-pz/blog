import Link from "next/link";
import { useLocale } from "next-intl";
import { postInterface } from "@/app/utils/interfaces";

interface propsComponent {
  post: postInterface;
}

export default function MainPost({ post: mainPost }: propsComponent) {
  const localeActive = useLocale();

  return (
    <div className="home__mainPost text-center border-b-2 border-primary-color-900 pb-6">
      <h2 className="text-3xl font-bold mb-3 hover:text-primary-color-600">
        <Link href={`/${localeActive}/post/${mainPost.id}`}>
          {mainPost.title}
        </Link>
      </h2>
      <img
        src={mainPost.image.src}
        alt={`image about ${mainPost.title}`}
        className="h-2/4 mb-3 w-2/3 min-h-[350px] min-w-[350px] m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        width={600}
        height={600}
      />
      <p>{mainPost.description[0]}</p>
    </div>
  );
}
