import { combineReducers } from "redux";
import authUser from "./auth/reducer";
import api from "./api/reducer";

const reducers = combineReducers({
  authUser,
  api,
});

export default reducers;
