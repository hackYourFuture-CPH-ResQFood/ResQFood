import Link from "next/link";

import { navigationItems } from "../../../app/routes";
import styles from "./Navigation.module.css";

export default function Navigation() {
	return (
		<nav className={styles.navigation} aria-label="Main navigation">
			<ul className={styles.list}>
				{navigationItems.map((item) => (
					<li key={item.name}>
						<Link className={styles.item} href={item.href}>
							<span className={styles.icon}>{item.icon}</span>
							<span>{item.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
