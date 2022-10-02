const initialState = {
  value: "",
  currencies: [],
};

const Reducer = (state = initialState, action) => {
  //action = {type: "STORE_VALUE", paylaod: ""}
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "STORE_VALUE":
      //update store
      newState.value = action.payload;
      return newState;
    case "STORE_CURRENCIES":
      newState.currencies = action.payload;
      return newState;
    default:
      return state;
  }
};

export default Reducer;
