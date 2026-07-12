import { useMemo, useState } from "react";
import { ALL_CATEGORIES, getProductCategories } from "@/utils/filterProduct";

export default function useCategoryFilter(products = []) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);

  const categories = useMemo(() => getProductCategories(products), [products]);

  return {
    selectedCategory,
    setSelectedCategory,
    categories,
  };
}
