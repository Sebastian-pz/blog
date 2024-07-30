import Link from "next/link";
import Tag from "@/app/components/Tags/Tag/Tag";

export default function Tags() {
  return (
    <div className="rounded-lg border bg-muted p-6">
      <h2 className="text-2xl font-bold">Popular Tags</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        <Tag label="Backend" link="/en" />
        <Link
          href="#"
          className="rounded-full bg-background px-4 py-1 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          prefetch={false}
        >
          Minimalism
        </Link>
        <Link
          href="#"
          className="rounded-full bg-background px-4 py-1 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          prefetch={false}
        >
          Brutalism
        </Link>
        <Link
          href="#"
          className="rounded-full bg-background px-4 py-1 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          prefetch={false}
        >
          UI/UX
        </Link>
        <Link
          href="#"
          className="rounded-full bg-background px-4 py-1 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          prefetch={false}
        >
          Storytelling
        </Link>
        <Link
          href="#"
          className="rounded-full bg-background px-4 py-1 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          prefetch={false}
        >
          Negative Space
        </Link>
        <Link
          href="#"
          className="rounded-full bg-background px-4 py-1 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          prefetch={false}
        >
          Accessibility
        </Link>
      </div>
    </div>
  );
}
