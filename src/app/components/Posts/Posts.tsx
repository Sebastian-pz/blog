import { getPosts } from "@/utilities/const";
import Post from "@/components/Post/Post";
import { useLocale } from "next-intl";

export default function Posts() {
  const localeActive = useLocale();
  const posts = getPosts(localeActive, 10);

  return (
    <>
      {posts.map((post, index) => {
        const [introductionParagraph] = post.description;
        return (
          <Post
            post={post}
            introductionParagraph={introductionParagraph}
            key={index}
          />
        );
      })}
    </>
  );
}
