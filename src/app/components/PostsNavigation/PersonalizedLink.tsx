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
      className="bg-lime-600 mx-3 rounded-md border flex justify-center items-center p-2 py-4 font-semibold hover:bg-lime-700"
    >
      {label}
    </Link>
  );
}
