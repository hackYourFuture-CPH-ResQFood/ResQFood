"use client";

import Filter from "@/components/filter/Filter";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import useCategoryFilter from "@/hooks/useCategoryFilter";
import { filterProductsByCategory } from "@/utils/filterProduct";
import styles from "./ProductSection.module.css"; 

export default function ProductSection({ clearances = [], storeId }) {
  const { selectedCategory, setSelectedCategory, categories } =
    useCategoryFilter(clearances);

  const filteredClearances = filterProductsByCategory(
    clearances,
    selectedCategory,
  );

  return (
    <div className={styles.productSection}>
      <div className={styles.filterContainer}>
        <Filter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />
      </div>
        <ProductGrid clearances={filteredClearances} storeId={storeId} />
      
    </div>
  );
}
