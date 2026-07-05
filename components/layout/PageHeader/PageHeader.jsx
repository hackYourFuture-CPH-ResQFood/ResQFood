import { Logo } from "@/components/ui/Logo/Logo";
import styles from "./PageHeader.module.css";

/**
 * We add back here
 */
export default function PageHeader({ back }) {
  return (
    <div className={styles.header}>
      <Logo />
    </div>
  );
}
