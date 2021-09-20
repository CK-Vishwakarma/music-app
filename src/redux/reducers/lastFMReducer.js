import { lastFMActionTypes } from "../constants/action-types";

const initialState = {
  artists: [],
};
export const fetchArtistsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case lastFMActionTypes.FETCH_ARTISTS:
      return { ...state, artists: payload };
    default:
      return state;
  }
};

const initialList = {
  list: [],
};

export const setShortListReducer = (state = initialList, { type, payload }) => {
  switch (type) {
    case lastFMActionTypes.SET_SHORT_LIST:
      return { ...state, list: payload };

    case lastFMActionTypes.REMOVE_SHORT_LIST:
      return { ...state, list: state.list.filter((list) => list !== payload) };
    default:
      return state;
  }
};
