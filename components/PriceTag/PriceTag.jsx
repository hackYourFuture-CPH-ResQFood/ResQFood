import { formatCurrency } from "@/utils/formatCurrency.js";
import styles from "./PriceTag.module.css";

export default function PriceTag({ originalPrice, discountPrice, currency }) {
  if (originalPrice == null) return null;

  // normalize price values before comparing
  const original = Number(originalPrice);
  if (!Number.isFinite(original)) return null;

  const discount = Number(discountPrice);
  const hasDiscount = Number.isFinite(discount) && discount < original;

  if (hasDiscount) {
    return (
      <div className={styles.priceTag}>
        <span className={styles.discountPrice}>
          {formatCurrency(discount, currency)}
        </span>
        <span className={styles.originalPrice}>
          <del>{formatCurrency(original, currency)}</del>
        </span>
      </div>
    );
  }
  return (
    <span className={styles.discountPrice}>
      {formatCurrency(original, currency)}
    </span>
  );
}
