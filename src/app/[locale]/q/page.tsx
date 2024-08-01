"use client";

import Post from "@/app/components/Post/Post";
import { getFilteredPosts, queryFilterI } from "@/app/utils/const";
import { useLocale } from "next-intl";
import { redirect, useSearchParams } from "next/navigation";

const searchParamsOptions = {
  tag: "tag",
  page: "page",
};

export default function page() {
  const searchParams = useSearchParams();
  const activeLocale = useLocale();

  const queryConfig: queryFilterI = {
    page: Number(searchParams.get(searchParamsOptions.page)),
    tag: searchParams.get(searchParamsOptions.tag),
  };

  // [totalPosts] is going to be used for pagination when I have enough posts
  const { posts, totalPosts } = getFilteredPosts(activeLocale, queryConfig);

  if (totalPosts === 0) redirect(`/${activeLocale}/empty-list`);

  return (
    <main className="w-4/5 md:w-3/5 m-auto mt-40 min-h-screen">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => {
          return <Post post={post} key={i} />;
        })}
      </div>
    </main>
  );
}
