import StoreCard from "@/components/storeCard/StoreCard";
import ProductDetailCard from "@/components/product/ProductDetailCard";
import styles from "./page.module.css";
import { getProductByStoreAndEan } from "@/services/foodWasteService";

export default async function ProductDetailPage({ params }) {
  const { storeId, productId } = params;
  const  product  = await getProductByStoreAndEan(storeId, productId);

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <div className={styles.storeWrapper}>
          <StoreCard
            id={store.id}
            name={store.name}
            address={store.address.street}
            openHours={store.openHours}
            status="open"
            deals={1}
            variant="bordered"
          />
        </div>

        <div className={styles.productWrapper}>
          <ProductDetailCard offer={offer} product={product} />
        </div>
      </div>
    </main>
  );
}
