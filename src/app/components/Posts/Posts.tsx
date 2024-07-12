import { postInterface } from "@/app/utils/interfaces";
import Post from "@/components/Post/Post";

interface propsComponent {
  posts: Array<postInterface>;
}

export default function Posts({ posts }: propsComponent) {
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
