import Navigation from "../navigation/Navigation";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoPlaceholder}>Logo placeholder</div>
      <Navigation />
    </header>
  );
}
