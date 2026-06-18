import { navigationItems } from "../../../app/routes";
import styles from "./Navigation.module.css";

export default function Navigation() {
	return (
		<nav className={styles.navigation} aria-label="Main navigation">
			<ul className={styles.list}>
				{navigationItems.map((item) => (
					<li className={styles.item} key={item.name}>
						<span className={styles.icon}>{item.icon}</span>
						<span>{item.name}</span>
					</li>
				))}
			</ul>
		</nav>
	);
}
