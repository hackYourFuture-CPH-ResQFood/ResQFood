import { Logo } from "../Logo/Logo";
import styles from "./PageHeader.module.css";

/**
 * We add back here
 */
export default function PageHeader({ back }) {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}
