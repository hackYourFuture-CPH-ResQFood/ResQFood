import { Logo } from "@/components/ui/Logo/Logo"; 
import styles from "./FrontpageBanner.module.css";

export default function FrontpageBanner() {
	return (
		<div className={styles.banner}>
				<div className={`${styles.rectangle} ${styles.leftRectangle}`}>
                    <Logo className={styles.logo} />
				</div>

                <p className={styles.centerLeaf}>Leaf</p>

				{/* <Image className={styles.centerLeaf} src={leafIcon} alt="" aria-hidden="true" /> */}

				<div className={`${styles.rectangle} ${styles.rightRectangle}`}>
                    <p className={styles.sallingText}>sa<span className={styles.sallingUnderlined}>ll</span>ing</p>
                    <p className={styles.groupText}>group</p>
				</div>
		</div>
	);
}
