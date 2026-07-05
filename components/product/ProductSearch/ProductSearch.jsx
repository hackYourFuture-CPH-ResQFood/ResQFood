"use client";

import SearchInput from "@/components/ui/SearchInput/SearchInput";
import { searchProducts } from "@/utils/searchProducts";

export default function ProductSearch({ products = [], onProductSearch }) {
  const handleSearch = (searchTerm) => {
    const filteredProducts = searchProducts(products, searchTerm);

    onProductSearch?.(filteredProducts);
  };
  return (
    <SearchInput
      onSearch={handleSearch}
      placeholder="Search products"
      aria-label="Search products"
    />
  );
}
