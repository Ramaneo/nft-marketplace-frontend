import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import axios from "../../config/axios";

import { FETCH } from "../actions";

function* fetchFromApi(props) {
  // try {
  //   const response = yield call(getPricesRequest);
  //   axios.request(props.payload.config).then(res=>)
  //   yield put(getPricesSuccess(response));
  // } catch (error) {
  //   yield put(getPricesError(error));
  // }
}

export function* watchFetch() {
  yield takeEvery(FETCH, fetchFromApi);
}

export default function* rootSaga() {
  // yield all([fork(watchFetch)]);
}
