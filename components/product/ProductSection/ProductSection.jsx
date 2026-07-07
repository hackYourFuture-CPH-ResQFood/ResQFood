"use client";

import { useState } from "react";
import Filter from "@/components/filter/Filter";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import {
  getCategoryLabel,
  getCategoryValue,
  getUniqueByValue,
} from "@/utils/productCategory";

export default function ProductSection({ clearances = [], storeId }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = clearances.map((item) => {
    const value = getCategoryValue(item);
    const label = getCategoryLabel(item);

    return { value, label };
  });

  const uniqueCategories = getUniqueByValue(categories);

  const filteredClearances =
    selectedCategory === "All"
      ? clearances
      : clearances.filter(
          (item) => getCategoryValue(item) === selectedCategory
        );

  return (
    <>
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={uniqueCategories}
      />

      <p>
        Showing {filteredClearances.length} of {clearances.length} products
      </p>

      <ProductGrid
        clearances={filteredClearances}
        storeId={storeId}
      />
    </>
  );
}

