"use client";

import { useState } from "react";
import Filter from "@/components/filter/Filter";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import {
  filterProductsByCategory,
  getProductCategories,
} from "@/utils/filterProduct";

export default function ProductSection({ clearances = [], storeId }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const uniqueCategories = getProductCategories(clearances);

  const filteredClearances = filterProductsByCategory(
    clearances,
    selectedCategory,
  );

  return (
    <>
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={uniqueCategories}
      />

      <ProductGrid clearances={filteredClearances} storeId={storeId} />
    </>
  );
}
