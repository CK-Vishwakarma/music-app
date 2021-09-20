import musicBrainzApi from "../../apis/musicBrainzApi";
import { musicBrainzActionTypes } from "../constants/musicBrainz-Action-types";

export const fetchMusicBrainzArtists = (searchText) => async (dispatch) => {
  try {
    const response = await musicBrainzApi.get(`?query=release:${searchText}`);
    dispatch({
      type: musicBrainzActionTypes.FETCH_ARTISTS_MB,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
