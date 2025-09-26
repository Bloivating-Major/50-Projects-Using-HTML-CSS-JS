const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

export default function formatCurrency(amount) {
    amount = amount / 100;
    return formatter.format(amount);
}
