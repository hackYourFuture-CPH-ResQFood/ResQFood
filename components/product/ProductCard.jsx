
import Image from "next/image";
import Badge from "../ui/Badge/Badge";
import { getExpiryLabel, isExpired } from "@/utils/expiry";
import styles from "./ProductCard.module.css";

export default function ProductCard({ offer, product }) {
    const expired = isExpired(offer.endTime);

    return (
        <article className={styles.productCard}>
            <div className={styles.imageWrapper}>
                <Image
                    className={styles.productImage}
                    src={product.image}
                    alt={product.description}
                    width={400}
                    height={400}
                    unoptimized
                />
            </div>

            <div className={styles.cardBody}>
                <h2 className={styles.productName}>{product.description}</h2>

                <p className={styles.productPrice}>
                    <span className={styles.newPrice}>
                        {offer.newPrice}{offer.currency}
                    </span>
                    <span className={styles.originalPrice}>
                        {offer.originalPrice}{offer.currency}
                    </span>
                </p>

                <div className={styles.expireAndDiscount}>
                    <span className={expired ? styles.expired : styles.expiration}>
                        {expired ? "Expired" : getExpiryLabel(offer.endTime)}
                    </span>
                    <Badge variant="deals" size="sm" className={styles.discountBadge}>
                        -{Math.round(offer.percentDiscount)}%
                    </Badge>
                </div>
            </div>
        </article>
    );
}