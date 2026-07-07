import StoreCard from "@/components/storeCard/StoreCard";
import ProductSection from "@/components/product/ProductSection/ProductSection";
import { getFoodWasteByStoreId } from "@/services/foodWasteService";
import BackLink from "@/components/ui/BackLink/BackLink";
import dataFormatter from "@/components/storeList/dataFormatter.helper";
import styles from "./page.module.css";

export default async function StoreDetailsPage({ params }) {
  const { id } = await params;
  const storeData = await getFoodWasteByStoreId(id);
  const formattedStore = dataFormatter(storeData.store);
  if (!formattedStore) {
    notFound();
  }
  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <BackLink />
      </div>

      <StoreCard
        name={formattedStore.name}
        id={formattedStore.brand}
        address={formattedStore.address}
        distance={formattedStore.distance}
        openHours={formattedStore.workingHours}
        status={formattedStore.status}
        deals={storeData.clearances.length}
        variant="flat"
      />
      <ProductSection clearances={storeData.clearances} />
    </main>
  );
}
