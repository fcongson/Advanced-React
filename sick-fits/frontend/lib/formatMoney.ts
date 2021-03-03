export const formatMoney = (amount = 0) => {
  const formatter = Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    minimumFractionDigits: amount % 100 === 0 ? 0 : 2, // hide decimals when the amnount is a whole number
  });

  return formatter.format(amount / 100);
};
