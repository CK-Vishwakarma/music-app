import musicBrainzApi from "../../apis/musicBrainzApi";
import { musicBrainzActionTypes } from "../constants/musicBrainz-Action-types";

export const fetchMusicBrainzArtists = (searchText) => async (dispatch) => {
  try {
    const response = await musicBrainzApi.get(
      `?query=release:${searchText}&fmt=json`
    );
    dispatch({
      type: musicBrainzActionTypes.FETCH_ARTISTS_MB,
      payload: response.data.releases,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setFavourite = (favList) => {
  // console.log("obj", favList);
  return {
    type: musicBrainzActionTypes.SET_FAVOURITE,
    payload: favList,
  };
};
export const removeFavourite = (listId) => {
  return {
    type: musicBrainzActionTypes.REMOVE_FAVOURITE,

    payload: listId,
  };
};
