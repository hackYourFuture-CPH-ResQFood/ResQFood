
import StoreCard from "@/components/storeCard/StoreCard";
import ProductDetailCard from "@/components/product/ProductDetailCard";
import styles from "./page.module.css";

const offer = {
  endTime: "2026-07-01T21:00:00",
  stock: 5,
  newPrice: 12,
  originalPrice: 24,
  currency: "DKK",
  percentDiscount: 50,
};

const product = {
  image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73",
  description: "Sourdough bread",
  categories: {
    en: "Bread And Cakes > Bread",
  },
};

export default function ProductDetailPage() {
  return (
      <main className={styles.page}>
          <div className={styles.content}>
               <div className={styles.storeWrapper}>
        <StoreCard
          id="netto"
          name="Netto"
          address="Ingerslevs Boulevard 3B"
          openHours="Closing 21:00"
          status="open"
          deals={8}
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