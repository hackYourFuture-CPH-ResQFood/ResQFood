export function formatCurrency(price, currency = "DKK") {
  return new Intl.NumberFormat("da-DK", {
    style: "currency",
    currency,
  }).format(price);
}
export default formatCurrency;
