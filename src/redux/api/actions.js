import { FETCH, FETCH_SUCCESS } from '../actions';

export const fetch = () => ({
  type: FETCH,
});

export const fetchSucccess = (items) => ({
  type: FETCH_SUCCESS,
  payload: items,
});
