import StoreCard from "@/components/storeCard/StoreCard";
import ProductDetailCard from "@/components/product/ProductDetailCard";
import styles from "./page.module.css";
import foodWaste from "@/app/mockData/foodWaste";

export default function ProductDetailPage() {
  const storeResult = foodWaste[0];
  const clearance = storeResult.clearances[0];
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <div className={styles.storeWrapper}>
          <StoreCard
            id={storeResult.store.id}
            name={storeResult.store.name}
            address={storeResult.store.address.street}
            openHours={storeResult.store.openHours}
            status="open"
            deals={storeResult.clearances.length}
            variant="bordered"
          />
        </div>
        <div className={styles.productWrapper}>
          <ProductDetailCard
            offer={clearance.offer}
            product={clearance.product}
          />
        </div>
      </div>
    </main>
  );
}
