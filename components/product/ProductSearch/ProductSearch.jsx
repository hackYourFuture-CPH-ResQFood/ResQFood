"use client";

import {  useState } from "react";
import SearchInput from "@/components/ui/SearchInput/SearchInput";
import { searchProducts } from "@/utils/productSearch";

export default function ProductSearch({ products = [], onProductSearch }) {
  const [error, setError] = useState("");

  const handleSearch = (searchTerm) => {
    const filteredProducts = searchProducts(products, searchTerm);
    setError("");

    onProductSearch?.(filteredProducts);
  };
  return (
    <SearchInput
      onSearch={handleSearch}
      error={error}
      placeholder="Search products"
      aria-label="Search products"
    />
  );
}
