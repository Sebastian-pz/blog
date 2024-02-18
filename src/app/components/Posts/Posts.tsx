import { getPosts } from "@/utilities/const";
import Post from "@/components/Post/Post";

export default function Posts() {
  const posts = getPosts(30);

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
