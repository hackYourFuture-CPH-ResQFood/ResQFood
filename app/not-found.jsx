import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.message}>
          We couldn’t find the page you’re looking for.
        </p>
        <Link className={styles.link} href="/">
          Back to home
        </Link>
      </section>
    </main>
  );
}
