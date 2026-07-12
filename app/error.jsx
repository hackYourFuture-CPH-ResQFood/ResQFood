"use client";

import BackLink from "@/components/ui/BackLink/BackLink";
import styles from "./error.module.css";

export default function Error({ reset }) {
  return (
    <main className={styles.page}>
      <div className="pageContentContainer">
        <div className="pageTopBar">
          <BackLink href="/" label="Back to home" />
        </div>
        <section className={styles.content}>
          <h1 className={styles.title}>Something went wrong</h1>
          <p className={styles.message}>
            We couldn’t load this page right now.
          </p>
          <div className={styles.actions}>
            <button className={styles.button} type="button" onClick={reset}>
              Try again
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
