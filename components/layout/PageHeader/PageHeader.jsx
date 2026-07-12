import Link from "next/link";
import { Logo } from "@/components/ui/Logo/Logo";
import styles from "./PageHeader.module.css";

export default function PageHeader() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <Logo size="lg" />
      </Link>
    </div>
  );
}
