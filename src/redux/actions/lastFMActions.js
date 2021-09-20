import lastFMApi from "../../apis/lastFMApi";
import { lastFMActionTypes } from "../constants/action-types";

export const fetchArtists = (searchText) => async (dispatch) => {
  try {
    const response = await lastFMApi.get("/", {
      params: { artist: searchText },
    });
    dispatch({
      type: lastFMActionTypes.FETCH_ARTISTS,
      payload: response.data.results.artistmatches.artist,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setShortList = (list) => {
  return {
    type: lastFMActionTypes.SET_SHORT_LIST,
    payload: list,
  };
};
export const removeShortList = (list) => {
  return {
    type: lastFMActionTypes.REMOVE_SHORT_LIST,
    payload: list,
  };
};
