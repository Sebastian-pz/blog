import Link from "next/link";
import { getMainPost } from "@/utilities/const";
import { useLocale } from "next-intl";

export default function MainPost() {
  const localeActive = useLocale();
  const mainPost = getMainPost(localeActive);

  return (
    <div className="home__mainPost text-center border-b-2 border-primary-color-900 pb-6">
      <h2 className="text-3xl font-bold mb-3 hover:text-primary-color-600">
        <Link href={`/${localeActive}/post/${mainPost.id}`}>
          {mainPost.title}
        </Link>
      </h2>
      <img
        src={mainPost.image.src}
        alt=""
        className="h-2/4 mb-3 max-h-[350px] m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      />
      <p>{mainPost.description[0]}</p>
    </div>
  );
}
