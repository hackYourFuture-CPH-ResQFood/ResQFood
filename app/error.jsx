"use client";

import Link from "next/link";
import styles from "./error.module.css";

export default function Error({ reset }) {
  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.title}>Something went wrong</h1>
        <p className={styles.message}>We couldn’t load this page right now.</p>
        <div className={styles.actions}>
          <button className={styles.button} type="button" onClick={reset}>
            Try again
          </button>

          <Link className={styles.link} href="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
