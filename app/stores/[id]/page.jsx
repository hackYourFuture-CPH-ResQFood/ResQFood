import StoreCard from "@/components/storeCard/StoreCard";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { getFoodWasteByStoreId } from "@/services/foodWasteService";
import BackLink from "@/components/ui/BackLink/BackLink";
import styles from "./page.module.css";

export default async function StoreDetailsPage({ params }) {
  const { id } = await params;
  const storeData = await getFoodWasteByStoreId(id);

  const today = new Date().toISOString().slice(0, 10);
  const todayHours = storeData.store.hours?.find((hour) => hour.date === today);
  const openHours = !todayHours
    ? "Hours unavailable"
    : todayHours.closed
      ? "Closed"
      : `${todayHours.open.slice(11, 16)}-${todayHours.close.slice(11, 16)}`;
  const status = todayHours?.closed ? "closed" : "open";

  return (
    <main className={styles.page}>
      <div className={styles.topBar}>
        <BackLink href="/stores" />
      </div>
      <StoreCard
        name={storeData.store.name}
        id={storeData.store.brand}
        address={`${storeData.store.address.street}, ${storeData.store.address.zip} ${storeData.store.address.city}`}
        distance={null}
        openHours={openHours}
        status={status}
        deals={storeData.clearances.length}
      />
      <ProductGrid clearances={storeData.clearances} />
    </main>
  );
}
