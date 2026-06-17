import Link from "next/link";
import styles from "./Navigation.module.css";


export default function Navigation() {
	return (
		<nav className={styles.navigation} aria-label="Main navigation">
			<ul className={styles.list}>
                <li className={styles.item}>Home</li>
                <li className={styles.item}>Map</li>
                <li className={styles.item}>Stores</li>
                <li className={styles.item}>Favorite</li>
                <li className={styles.item}>Amin</li>
			</ul>
		</nav>
	);
}
