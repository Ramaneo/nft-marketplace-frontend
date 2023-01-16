import { all } from "redux-saga/effects";
import authSagas from "./auth/saga";
import api from "./api/saga";

export default function* rootSaga(getState) {
  yield all([authSagas(), api]);
}
