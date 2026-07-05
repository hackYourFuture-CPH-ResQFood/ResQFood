"use client";

import { useState } from "react";
import Filter from "@/components/filter/Filter";
import ProductCard from "@/components/product/ProductCard";
import {
  getCategoryLabel,
  getCategoryValue,
  getUniqueByValue,
} from "@/utils/productCategory";

export default function ProductFilter({ products = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = products.map((item) => {
    const value = getCategoryValue(item);
    const label = getCategoryLabel(item);

    return { value, label };
  });

  const uniqueCategories = getUniqueByValue(categories);
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => getCategoryValue(item) === selectedCategory);

  return (
    <>
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={uniqueCategories}
      />

      <p>
        Showing {filteredProducts.length} of {products.length} products
      </p>

      <section>
        {filteredProducts.map((item, index) => (
          <ProductCard
            key={`${item.product?.ean || "product"}-${index}`}
            product={item.product}
            offer={item.offer}
          />
        ))}
      </section>
    </>
  );
}
