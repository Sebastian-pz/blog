import Link from "next/link";

interface propsComponent {
  link: string;
  label: string;
}

export default function Tag({ label, link }: propsComponent) {
  return (
    <Link
      href={link}
      className="rounded-full bg-background px-4 py-1 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      prefetch={false}
    >
      {label}
    </Link>
  );
}
