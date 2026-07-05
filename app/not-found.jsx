import Link from "next/link";
export default function NotFound() {
  return (
    <main>
      <section>
        <h1>Page not found</h1>
        <p>We couldn’t find the page you’re looking for.</p>
        <Link href="/">Back to home</Link>
      </section>
    </main>
  );
}
