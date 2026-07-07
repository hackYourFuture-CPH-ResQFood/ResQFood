"use client";

import Filter from "@/components/filter/Filter";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import useCategoryFilter from "@/hooks/useCategoryFilter";
import { filterProductsByCategory } from "@/utils/filterProduct";

export default function ProductSection({ clearances = [], storeId }) {
  const { selectedCategory, setSelectedCategory, categories } =
    useCategoryFilter(clearances);

  const filteredClearances = filterProductsByCategory(
    clearances,
    selectedCategory,
  );

  return (
    <>
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />

      <ProductGrid clearances={filteredClearances} storeId={storeId} />
    </>
  );
}
