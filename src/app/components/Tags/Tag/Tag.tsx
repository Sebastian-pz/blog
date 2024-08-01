import Link from "next/link";

interface propsComponent {
  link: string;
  label: string;
}

export default function Tag({ label, link }: propsComponent) {
  return (
    <Link
      href={link}
      className="rounded-full bg-primary-color-100 border border-primary-color-300 px-4 py-1 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:bg-primary-color-200 duration-300"
      prefetch={false}
    >
      {label}
    </Link>
  );
}
