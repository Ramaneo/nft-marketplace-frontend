import { FETCH, FETCH_SUCCESS } from '../actions';

const INIT_STATE = {
  loading: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH:
      return { ...state, loading: true };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    default:
      return { ...state };
  }
};
