import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
} from "../actions";

const INIT_STATE = {
  // currentUser: isAuthGuardActive ? currentUser : getCurrentUser(),
  loading: false,
  error: "",
  userAddress: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userAddress: action.payload,
        error: "",
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };
    case LOGOUT_USER:
      return { ...state, currentUser: null, error: "" };
    default:
      return { ...state };
  }
};
