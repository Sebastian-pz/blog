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
      className="bg-primary-color-500 mx-3 rounded-md border flex justify-center items-center p-2 md:p-4 lg:px-6  py-4 lg:text-lg  hover:bg-border-color"
    >
      {label}
    </Link>
  );
}
