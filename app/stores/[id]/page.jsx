import { notFound } from "next/navigation";
import StoreCard from "@/components/storeCard/StoreCard";
import ProductSection from "@/components/product/ProductSection/ProductSection";
import { getFoodWasteByStoreId } from "@/services/foodWasteService";
import BackLink from "@/components/ui/BackLink/BackLink";
import dataFormatter from "@/components/storeList/dataFormatter.helper";
import styles from "./page.module.css";

export default async function StoreDetailsPage({ params }) {
  const { id } = await params;
  let storeData;

  try {
    storeData = await getFoodWasteByStoreId(id);
  } catch {
    notFound();
  }

  if (!storeData?.store) {
    notFound();
  }
  const formattedStore = dataFormatter(storeData.store);

  if (!formattedStore) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <div className="pageContentContainer">
        <div className="pageTopBar">
          <BackLink />
        </div>
        <div className={styles.storeCard}>
          <StoreCard
            name={formattedStore.name}
            id={formattedStore.brand}
            address={formattedStore.address}
            distance={formattedStore.distance}
            openHours={formattedStore.workingHours}
            status={formattedStore.status}
            deals={storeData.clearances.length}
            variant="inactive"
          />
        </div>
        <ProductSection clearances={storeData.clearances ?? []} storeId={id} />
      </div>
    </main>
  );
}
