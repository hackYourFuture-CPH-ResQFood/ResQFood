import BackLink from "@/components/ui/BackLink/BackLink";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className="pageContentContainer">
        <div className="pageTopBar">
          <BackLink href="/" label="Back to home" />
        </div>

        <section className={styles.content}>
          <h1 className={styles.title}>Page not found</h1>

          <p className={styles.message}>
            We couldn’t find the page you’re looking for.
          </p>
        </section>
      </div>
    </main>
  );
}
