import {
  getCategoryLabel,
  getCategoryValue,
  getUniqueByValue,
} from "@/utils/productCategory";

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
    selectedCategory === "All"
      ? products
      : products.filter((item) => getCategoryValue(item) === selectedCategory);

  return filteredProducts;
}
