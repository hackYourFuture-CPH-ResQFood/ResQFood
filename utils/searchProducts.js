const normalizeText = (text) => {
  return String(text ?? "")
    .toLowerCase()
    .trim();
};

export const searchProducts = (products = [], searchTerm = "") => {
  const normalizedSearch = normalizeText(searchTerm);
  if (!normalizedSearch) {
    return products;
  }
  const searchWords = normalizedSearch.split(/\s+/);

  return products.filter((item) => {
    const description = normalizeText(item.product?.description);
    const categoryEn = normalizeText(item.product?.categories?.en);
    const categoryDa = normalizeText(item.product?.categories?.da);
    const searchedText = `${description} ${categoryEn} ${categoryDa}`;

    return searchWords.every((word) => searchedText.includes(word));
  });
};
