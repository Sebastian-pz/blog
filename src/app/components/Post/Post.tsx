import { postInterface } from "@/app/utils/interfaces";
import { useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

interface propsComponent {
  post: postInterface;
}

export default function Post({ post }: propsComponent) {
  const localeActive = useLocale();
  const { creationDate, title, description, id, image } = post;

  function summary(text: string, limit: number) {
    if (text.length > limit) return text.slice(0, limit) + "...";
    return text;
  }

  return (
    <article className="group">
      <Link
        href={`/${localeActive}/post/${id}`}
        className="block h-48 overflow-hidden rounded-lg"
        prefetch={false}
      >
        <Image
          src={image}
          alt={`Post about ${title}`}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="mt-4 space-y-2">
        <h2 className="text-2xl font-bold">
          <Link
            href={`/${localeActive}/post/${id}`}
            className="hover:underline"
            prefetch={false}
          >
            {title}
          </Link>
        </h2>
        <p className="text-muted-foreground">
          {summary(description[0] as string, 120)}
        </p>
      </div>
    </article>
  );
}
