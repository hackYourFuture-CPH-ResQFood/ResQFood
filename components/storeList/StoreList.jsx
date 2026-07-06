"use client";

import { useState } from "react";
import styles from "./StoreList.module.css";
import StoreCard from "../storeCard/StoreCard";
import dataFormatter from "./dataFormatter.helper";
import ProductCard from "../product/ProductCard";
import Carousel from "../ui/Carousel/Carousel";
import Link from "next/link";
import Filter from "@/components/filter/Filter";
import {
  getCategoryLabel,
  getCategoryValue,
  getUniqueByValue,
} from "@/utils/productCategory";

export default function StoreList({ data = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allProducts = data.flatMap((storeResult) => storeResult.clearances);

  const categories = allProducts.map((item) => {
    const value = getCategoryValue(item);
    const label = getCategoryLabel(item);

    return { value, label };
  });

  const uniqueCategories = getUniqueByValue(categories);

  const filteredStores = data
    .map((storeResult) => {
      const filteredClearances =
        selectedCategory === "All"
          ? storeResult.clearances
          : storeResult.clearances.filter(
              (item) => getCategoryValue(item) === selectedCategory
            );

      return {
        ...storeResult,
        clearances: filteredClearances,
      };
    })
    .filter((storeResult) => storeResult.clearances.length > 0);

  return (
    <>
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={uniqueCategories}
      />

      <p>
        Showing {filteredStores.length} of {data.length} stores
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
                  variant="flat"
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
    </>
  );
}