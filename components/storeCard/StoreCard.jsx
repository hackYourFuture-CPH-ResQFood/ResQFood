import styles from "./StoreCard.module.css";
import StoreAvatar from "../ui/StoreAvatar/StoreAvatar";
import Icon from "../ui/Icon/Icon";
import { Route } from "lucide-react";
import Badge from "../ui/Badge/Badge";

export default function StoreCard({ store }) {
  const {
    name,
    storeID,
    address,
    distance,
    statusText,
    statusCssClass,
    offers,
    hasBorder = false,
  } = store;

  return (
    <>
      <div className={`${styles.storeCard} ${hasBorder ? styles.border : ""}`}>
        <div className={styles.storeDetails}>
          <StoreAvatar brand={storeID} size={"md"} />
        </div>
        <div className={styles.storeInfo}>
          <p className={styles.storeName}>{name}</p>
          <div className={styles.location}>
            <p className={styles.storeAddress}>{address}</p>

            {distance && (
              <div className={`${styles.distance} u-flex-center`}>
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
            <div className={`${styles.circle} ${styles[statusCssClass]}`}></div>
            <p className={styles.openHours}>{statusText}</p>
          </div>
        </div>
        <div className={styles.offerDetails}>
          <Badge className="deals" variant="deals" size="lg">
            <div className={styles.offerContainer}>
              <p className={styles.offers}>{offers}</p>
              <p className={styles.offersText}>
                {offers === 1 ? "deal" : "deals"}
              </p>
            </div>
          </Badge>
        </div>
      </div>
    </>
  );
}
