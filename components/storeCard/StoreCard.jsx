import styles from "./StoreCard.module.css";
import StoreAvatar from "../ui/StoreAvatar/StoreAvatar";
import Icon from "../ui/Icon/Icon";
import { Route } from "lucide-react";
import Badge from "../ui/Badge/Badge";
import Link from "next/link";

export default function StoreCard({
  name,
  id,
  brand,
  address,
  distance,
  openHours,
  status,
  deals,
  variant = "storesPage",
}) {
  const storeCardLayout = (
    <div className={`${styles.storeCard} ${styles[variant]}`}>
      <div className={styles.storeDetails}>
        <StoreAvatar brand={brand} size="md" />
      </div>
      <div className={styles.storeInfo}>
        <p className={styles.storeName}>{name}</p>
        <div className={styles.location}>
          <p className={styles.storeAddress}>{address}</p>

          {distance && (
            <div className={`${styles.distance}`}>
              <Icon
                icon={Route}
                label="distance"
                size="xs"
                shape="none"
                className={styles.distanceIcon}
              />
              <p className={styles.distanceInfo}>{distance}</p>
            </div>
          )}
        </div>
        <div className={styles.workingDetails}>
          <div className={`${styles.circle} ${styles[status]}`}></div>
          <p className={styles.openHours}>{openHours}</p>
        </div>
      </div>
      <div className={styles.offerDetails}>
        <Badge className="deals" variant="deals" size="lg">
          <div className={styles.offerContainer}>
            <p className={styles.offers}>{deals}</p>
            <p className={styles.offersText}>
              {deals === 1 ? "deal" : "deals"}
            </p>
          </div>
        </Badge>
      </div>
    </div>
  );
  return (
    <>
      {variant === "storesPage" ? (
        <Link className={styles.link} href={`/storeDetailPage/${id}`}>
          {storeCardLayout}
        </Link>
      ) : (
        storeCardLayout
      )}
    </>
  );
}
