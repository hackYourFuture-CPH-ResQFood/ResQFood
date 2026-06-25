
import Image from "next/image";
import styles from "./ProductCard.module.css";

export default function ProductCard({ offer, product }) {
    function daysLeft() {
        const end = new Date(offer.endTime);
        const now = new Date();
        // should I round up or down?
        const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
        return diff > 0 ? `${diff} day${diff === 1 ? '' : 's'} left` : "Ends today";
    }

    const isExpired = new Date(offer.endTime) < new Date();

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
                    <span className={isExpired ? styles.expired : styles.expiration}>
                        {isExpired ? "Expired" : daysLeft()}
                    </span>
                    {/* Discount badge will be replaced when badges be ready */}
                    <span className={styles.discountBadge}>
                        -{Math.round(offer.percentDiscount)}%
                    </span>
                </div>
            </div>
        </article>
    );
}