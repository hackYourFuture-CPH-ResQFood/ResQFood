import { Logo } from "@/components/ui/Logo/Logo";
import styles from "./InfoList.module.css";

const infoItems = [
  {
    text: "Salling Group and ResQFood have partnered to reduce food waste.",
  },
  {
    text: "Every day, over 10,000 discounted food products are available in local stores.",
  },
  {
    text: "Find offers near you and help rescue perfectly good food before it goes to waste.",
  },
];
export default function InfoList({ items = infoItems }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <p key={item.text}>
          <Logo markOnly size="sm" className={styles.logo} />
          {item.text}
        </p>
      ))}
    </div>
  );
}
