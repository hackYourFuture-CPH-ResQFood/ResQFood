import { Logo } from "@/components/ui/Logo/Logo";
import styles from "./InfoList.module.css";

const infoItems = [
  {
    id: "products",
    text: (
      <>
        <strong>Every day, over 10,000</strong> discounted food products are
        available in local stores.
      </>
    ),
  },
  {
    id: "partnership",
    text: (
      <>
        <strong>Salling Group and ResQFood</strong> have partnered to reduce
        food waste.
      </>
    ),
  },
  {
    id: "offers",
    text: (
      <>
        <strong>Find offers near you</strong> and help rescue perfectly good
        food before it goes to waste.
      </>
    ),
  },
];
export default function InfoList({ items = infoItems }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {items.map((item) => (
          <div className={styles.item} key={item.id}>
            <Logo markOnly size="sm" className={styles.logo} />
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>

      <hr className={styles.divider} />
    </div>
  );
}
