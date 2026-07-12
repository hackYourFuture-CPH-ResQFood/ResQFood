import { Logo } from "@/components/ui/Logo/Logo";
import styles from "./FrontpageBanner.module.css";
import Image from "next/image";
import leafIcon from "./assets/leaf.png";

export default function FrontpageBanner() {
  return (
    <div className={styles.banner}>
      <div className={`${styles.rectangle} ${styles.leftRectangle}`}>
        <Logo className={styles.logo} />
      </div>

      <div className={styles.centerPartnership}>
        <Image
          className={styles.centerLeaf}
          src={leafIcon}
          alt=""
          aria-hidden="true"
        />
        <span className={styles.partnershipText}>in partnership with</span>
      </div>

      <div className={`${styles.rectangle} ${styles.rightRectangle}`}>
        <p className={styles.sallingText}>
          sa<span className={styles.sallingUnderlined}>ll</span>ing
        </p>
        <p className={styles.groupText}>group</p>
      </div>
    </div>
  );
}
