//action creators
export const storeValue = (payload) => {
  //action
  return {
    type: "STORE_VALUE",
    payload,
  };
};

export const fetchCurrencies = (payload) => {
  return {
    type: "FETCH_CURRENICES",
    payload,
  };
};

export const storeCurrencies = (payload) => {
  return {
    type: "STORE_CURRENCIES",
    payload,
  };
};
