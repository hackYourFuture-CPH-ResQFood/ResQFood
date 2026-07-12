"use client";

import styles from "./StoreList.module.css";
import StoreCard from "../storeCard/StoreCard";
import dataFormatter from "./dataFormatter.helper";
import ProductCard from "../product/ProductCard";
import Carousel from "../ui/Carousel/Carousel";
import Link from "next/link";
import Filter from "@/components/filter/Filter";
import useStoreFiltering from "@/hooks/useStoreFiltering";

export default function StoreList({ data = [] }) {
  const { selectedCategory, setSelectedCategory, categories, filteredStores } =
    useStoreFiltering(data);

  return (
    <div className={styles.storeListInfo}>
      <div className={styles.filterContainer}>
        <Filter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />
      </div>
      <p className={styles.storesCount}>
        Showing <span className={styles.green}>{filteredStores.length}</span> of{" "}
        {data.length} stores
      </p>

      {filteredStores.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        filteredStores.map((item) => {
          const formattedStore = dataFormatter(item.store);

          if (!formattedStore) return null;

          const deals = item.clearances.length;

          return (
            <div key={item.store.id} className={styles.storeBlock}>
              <Link className={styles.link} href={`/stores/${item.store.id}`}>
                <StoreCard
                  name={formattedStore.name}
                  id={formattedStore.brand}
                  address={formattedStore.address}
                  distance={formattedStore.distance}
                  openHours={formattedStore.workingHours}
                  status={formattedStore.status}
                  deals={deals}
                  variant="active"
                />
              </Link>

              <div className={styles.divider}></div>

              <Carousel className={styles.productCarousel}>
                {item.clearances.map((deal) => (
                  <div key={deal.offer.ean}>
                    <Link
                      className={styles.link}
                      href={`/stores/${item.store.id}/product/${deal.offer.ean}`}
                    >
                      <ProductCard offer={deal.offer} product={deal.product} />
                    </Link>
                  </div>
                ))}
              </Carousel>
            </div>
          );
        })
      )}
    </div>
  );
}
