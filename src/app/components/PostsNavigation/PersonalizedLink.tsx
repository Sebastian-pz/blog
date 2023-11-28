import Link from "next/link";

interface PersonalizedLinkProps {
  href: string;
  label: string;
}

export default function PersonalizedLink({
  href,
  label,
}: PersonalizedLinkProps) {
  return (
    <Link
      href={href}
      className="h-[30px] bg-lime-300 mx-3 rounded-md px-2 font-semibold hover:bg-lime-400"
    >
      {label}
    </Link>
  );
}
