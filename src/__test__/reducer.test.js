import Reducer from "./../components/CurrencyCon/reducer";

describe("Currency converter reducer", () => {
  test("Initialvalue of reducer", () => {
    expect(Reducer(undefined, { type: "INIT", payload: undefined })).toEqual({
      value: "",
      currencies: [],
    });
  });
});
