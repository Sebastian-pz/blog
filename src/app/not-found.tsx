import Link from "next/link";
import "./global.css";

export default function NotFound() {
  return (
    <html>
      <body className="notFound">
        <section className="notFound__content">
          <h1>404 - Page Not Found</h1>
          <p>
            Oops, it looks like the page you were looking for doesn't exist.
            Don't worry, you can head back to the blog's homepage and continue
            exploring.
          </p>
          <Link className="" href="/en">
            Go to Blog
          </Link>
        </section>
      </body>
    </html>
  );
}
