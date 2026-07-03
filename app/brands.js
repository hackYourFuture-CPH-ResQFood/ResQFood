export const BRANDS = [
  { id: "netto", name: "Netto" },
  { id: "foetex", name: "føtex" },
  { id: "bilka", name: "Bilka" },
];

export const getStoreName = (key) =>
  BRANDS.find((item) => item.id === key)?.name || key;
