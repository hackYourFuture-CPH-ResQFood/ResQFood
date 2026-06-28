
import Image from "next/image";
import Badge from "../ui/Badge/Badge";
import Icon from "../ui/Icon/Icon";
import { Clock} from "lucide-react";
import { Package } from 'lucide-react'
import { getExpiryLabel, isExpired } from "@/utils/expiry";
import styles from "./ProductDetailCard.module.css";

export default function ProductDetailCard({ offer, product }) {
    const expired = isExpired(offer.endTime);
    const topLevelCategory = product?.categories?.en?.split(">")?.[0]?.trim() || "Uncategorized";
    const stock = offer.stock;
    const stockRange =
        stock > 5 ? "more than 5 left" :
        stock > 1 ? "1-5 left" :
        "Out of Stock";

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

                <Badge variant="deals" size="sm" className={styles.discountBadge}>
                    -{Math.round(offer.percentDiscount)}%
                </Badge>
            </div>

            <div className={styles.cardBody}>
                <h2 className={styles.productName}>{product.description}</h2>
                <p className={styles.productCategory}>{topLevelCategory}</p>
                {/* price-tag will be replaced when be ready */}
                <p className={styles.productPrice}>
                    <span className={styles.newPrice}>
                        {offer.newPrice} {offer.currency}
                    </span>
                    <span className={styles.originalPrice}>
                        {offer.originalPrice} {offer.currency}
                    </span>
                </p>

                <div className={styles.expireAndStock}>
                     <span className={expired ? styles.expired : styles.expiration}>
                        <Icon
                            icon={Clock}
                            size="sm"
                            shape="none"
                            strokeWidth={1.8}
                            className={styles.infoIcon}
                            style={{ color: "inherit" }}
                        />
                        {expired ? "Expired" : getExpiryLabel(offer.endTime)} 
                     </span>
                    <p className={styles.stockAmount}>
                        <Icon
                            icon={Package}
                            size="sm"
                            shape="none"
                            strokeWidth={1.8}
                            className={styles.infoIcon}
                            style={{ color: "inherit" }}
                        />
                        <span>{stockRange}</span>
                    </p>

                </div>
                <p className={styles.disclaimer}>* Amount left may vary</p>

            </div>
        </article>
    );
}