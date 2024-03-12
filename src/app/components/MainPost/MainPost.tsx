import Link from "next/link";
import { getMainPost } from "@/utilities/const";

export default function MainPost() {
  const mainPost = getMainPost();

  return (
    <div className="home__mainPost text-center border-b-2 border-slate-200 pb-6">
      <h2 className="text-3xl font-bold mb-3 hover:text-primary-color-600">
        <Link href="/post/0">{mainPost.title}</Link>
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
