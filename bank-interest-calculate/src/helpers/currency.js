const getVietNameCurrencyFormat = (amount) => {
  const formatted =  Number(amount).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  console.log("getVietNameCurrencyFormat: ", formatted)
  return formatted
};

const currency = { getVietNameCurrencyFormat };

export default currency;
