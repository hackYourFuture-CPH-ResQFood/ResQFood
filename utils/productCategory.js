export const getMainCategoryDa = (item) => {
  return (
    item.product?.categories?.da?.split(">")[0]?.trim() || "Ukategoriseret"
  );
};

export const getMainCategoryEn = (item) => {
  return item.product?.categories?.en?.split(">")[0]?.trim() || "Uncategorized";
};

export const getCategoryValue = (item) => {
  return `${getMainCategoryDa(item)}|${getMainCategoryEn(item)}`;
};
export const getCategoryLabel = (item) => {
  return `${getMainCategoryDa(item)} / ${getMainCategoryEn(item)}`;
};
export const getUniqueByValue = (items) => {
  return items.filter((item, index) => {
    const firstIndex = items.findIndex((otherItem) => {
      return otherItem.value === item.value;
    });

    return firstIndex === index;
  });
};
