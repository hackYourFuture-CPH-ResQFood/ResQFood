import { useMemo } from "react";
import useCategoryFilter from "@/hooks/useCategoryFilter";
import { filterProductsByCategory } from "@/utils/filterProduct";

export default function useStoreFiltering(data = []) {
  const allProducts = useMemo(
    () => data.flatMap((storeResult) => storeResult.clearances ?? []),
    [data],
  );

  const { selectedCategory, setSelectedCategory, categories } =
    useCategoryFilter(allProducts);

  const filteredStores = useMemo(
    () =>
      data
        .map((storeResult) => {
          const filteredClearances = filterProductsByCategory(
            storeResult.clearances ?? [],
            selectedCategory,
          );

          return {
            ...storeResult,
            clearances: filteredClearances,
          };
        })
        .filter((storeResult) => storeResult.clearances.length > 0),
    [data, selectedCategory],
  );

  return {
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredStores,
  };
}
