import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body className="w-full h-full text-center">
        <section className="m-auto">
          <h1 className="text-2xl font-bold">Opss... Not found</h1>
          <Link href={"/es"}>Volver</Link>
        </section>
      </body>
    </html>
  );
}
