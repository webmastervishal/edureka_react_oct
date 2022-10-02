export const storeValue = (payload) => {
  return {
    type: "STORE_VALUE",
    payload,
  };
};

export const storeCurrencies = (payload) => {
  return {
    type: "STORE_CURRENCIES",
    payload,
  };
};
