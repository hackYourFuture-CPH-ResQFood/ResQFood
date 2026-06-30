"use client";

import styles from "./ProductGrid.module.css";

import ProductCard from "../product/ProductCard";
import Skeleton from "@/components/ui/Skeleton/Skeleton";

export default function ProductGrid({
  clearances,
  loading,
  error,
  emptyMessage,
}) {
  if (error) {
    return (
      <p className={styles.emptyMessage}>
        Something went wrong. Please try again.
      </p>
    );
  }

  if (loading) {
    return (
      <div className={styles.ProductGrid}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton
            key={i}
            height="auto"
            radius="md"
            style={{ aspectRatio: "3 / 4" }}
          />
        ))}
      </div>
    );
  }

  if (!clearances || clearances.length === 0) {
    return (
      <p className={styles.emptyMessage}>
        {emptyMessage || "No deals right now. Check back later."}
      </p>
    );
  }
  return (
    <div className={styles.ProductGrid}>
      {clearances?.map((clearance) => (
        <ProductCard
          key={clearance.offer.ean}
          product={clearance.product}
          offer={clearance.offer}
        />
      ))}
    </div>
  );
}
