import styles from "./Footer.module.css";
import { Heart } from "lucide-react";
import Icon from "@/components/ui/Icon/Icon";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        <span>&copy; 2026</span>
        <span>Made with</span>
        <Icon
          icon={Heart}
          size="xs"
          color="green"
          filled
          shape="none"
          className={styles.heartIcon}
        />
        <span>by the M2A2 team</span>
      </p>
    </footer>
  );
}
