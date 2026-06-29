import styles from "./StoreBlock.module.css";

export default function StoreBlock({ children }) {
  return <div className={`${styles.blockContainer}`}>{children}</div>;
}
