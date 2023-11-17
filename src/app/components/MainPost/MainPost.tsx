import { getMainPost } from "@/app/utils/const";
import Link from "next/link";

export default function MainPost() {
  const mainPost = getMainPost();

  return (
    <div className="home__mainPost text-center border-b-2 border-slate-200 pb-6">
      <h2 className="text-3xl font-bold mb-3">
        <Link href="/post/0">{mainPost.title}</Link>
      </h2>
      <img
        src={mainPost.image.src}
        alt=""
        className="h-2/4 mb-3 max-h-[350px] m-auto"
      />
      <p>{mainPost.description[0]}</p>
    </div>
  );
}
