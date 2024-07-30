import Link from "next/link";

export default function FeaturePost() {
  return (
    <Link
      href="#"
      className="flex items-start gap-4 hover:underline"
      prefetch={false}
    >
      <img
        src="/placeholder.svg"
        alt="Blog post cover image"
        width={80}
        height={60}
        className="h-20 w-20 rounded-lg object-cover"
      />
      <div>
        <h3 className="text-lg font-bold">
          Mastering the Art of Minimalist Design
        </h3>
        <p className="text-muted-foreground">August 24, 2023</p>
      </div>
    </Link>
  );
}
