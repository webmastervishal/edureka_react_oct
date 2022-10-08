import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import Cookies from "js-cookie";
import { storeCurrencies } from "./actions";

function* fetchApi(path) {
  const res = yield fetch(`https://webmaster-fake-api.herokuapp.com/${path}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + Cookies.get("token"),
    },
  });
  const result = yield res.json();
  return result;
}

//worker saga
function* workerSaga(action) {
  console.log("inside worker saga");
  const result = yield call(fetchApi, "currencies");
  console.log("result", result);
  yield put(storeCurrencies(result));
}

//watcher saga

export default function* watcherSaga() {
  //listen to the action dispatched by the component
  yield takeEvery("FETCH_CURRENICES", workerSaga);
}
