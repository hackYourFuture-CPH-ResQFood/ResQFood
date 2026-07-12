import {
  getCategoryLabel,
  getCategoryValue,
  getUniqueByValue,
} from "@/utils/productCategory";

export const ALL_CATEGORIES = "All";

export function getProductCategories(products = []) {
  const categories = products.map((item) => {
    const value = getCategoryValue(item);
    const label = getCategoryLabel(item);

    return { value, label };
  });

  return getUniqueByValue(categories);
}

export function filterProductsByCategory(products = [], selectedCategory) {
  const filteredProducts =
    selectedCategory === ALL_CATEGORIES
      ? products
      : products.filter((item) => getCategoryValue(item) === selectedCategory);

  return filteredProducts;
}
