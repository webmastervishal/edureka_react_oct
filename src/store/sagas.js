import { all } from "redux-saga/effects";
import currencySaga from "./../components/CurrencyCon/saga";

export default function* rootSagas() {
  yield all([currencySaga()]);
}
