import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { LOGIN_USER, LOGOUT_USER, LOGIN_USER_SUCCESS } from "../actions";

import { loginUserSuccess, loginUserError } from "./actions";

import axios from "../../config/axios";

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginWithPass);
}

export function* watchLoginSuccess() {
  yield takeLatest(LOGIN_USER_SUCCESS, postLoginWorker);
}

function* postLoginWorker(props) {
  // window.location.href = "/";
  // payload.history.push("/");
}

const loginWithPassAsync = async () => {
  if (!window.ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  if (accounts[0]) {
    return accounts[0];
  }
};

function* loginWithPass({ payload }) {
  try {
    const loginUser = yield call(loginWithPassAsync);
    console.log("hereeee", loginUser);
    if (loginUser) {
      yield put({ type: LOGIN_USER_SUCCESS, payload: loginUser });
      // yield put(loginUserSuccess(loginUser));
    } else {
      yield put(loginUserError(loginUser.message));
    }
  } catch (error) {
    yield put(loginUserError(error));
  }
}

export function* watchRegisterUser() {
  // yield takeEvery(REGISTER_USER, registerWithEmailPassword);
}

const registerWithEmailPasswordAsync = async (email, password) =>
  // await auth
  //   .createUserWithEmailAndPassword(email, password)
  //   .then((user) => user)
  //   .catch((error) => error);

  function* registerWithEmailPassword({ payload }) {
    // const { email, password } = payload.user;
    // const { history } = payload;
    // try {
    //   const registerUser = yield call(
    //     registerWithEmailPasswordAsync,
    //     email,
    //     password
    //   );
    //   if (!registerUser.message) {
    //     const item = { uid: registerUser.user.uid, ...currentUser };
    //     setCurrentUser(item);
    //     yield put(registerUserSuccess(item));
    //     history.push(adminRoot);
    //   } else {
    //     yield put(registerUserError(registerUser.message));
    //   }
    // } catch (error) {
    //   yield put(registerUserError(error));
    // }
  };

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logout);
}

const logoutAsync = async (history) => {
  // await auth
  //   .signOut()
  //   .then((user) => user)
  //   .catch((error) => error);
  // history.push(adminRoot);
};

function* logout({ payload }) {
  // const { history } = payload;
  // setCurrentUser();
  // yield call(logoutAsync, history);
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLoginSuccess),
    fork(watchLogoutUser),
    fork(watchRegisterUser),
  ]);
}
