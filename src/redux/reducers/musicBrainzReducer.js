import { musicBrainzActionTypes } from "../constants/musicBrainz-Action-types";
import { favoriteTypes } from "../constants/favoriteList-actionType";

const initialStateMB = {
  artists: [],
};
export const fetchMusicBrainzArtistsReducer = (
  state = initialStateMB,
  { type, payload }
) => {
  switch (type) {
    case musicBrainzActionTypes.FETCH_ARTISTS_MB:
      return { ...state, artists: payload };
    default:
      return state;
  }
};

const initialFavourateState = {
  favouriteList: [],
};

export const setFavouriteReducer = (
  state = initialFavourateState,
  { type, payload }
) => {
  switch (type) {
    case musicBrainzActionTypes.SET_FAVOURITE:
      return { ...state, favouriteList: payload };

    case musicBrainzActionTypes.REMOVE_FAVOURITE:
      return {
        ...state,
        favouriteList: state.favouriteList.filter((FL) => FL.id !== payload),
      };
    default:
      return state;
  }
};
const fetchFavArtistList = {
  favArtists: [],
};
export const fetchedFavArtists = (
  state = fetchFavArtistList,
  { type, payload }
) => {
  switch (type) {
    case favoriteTypes.FETCH_FAVOURITE_ARTISTS:
      return { ...state, favArtists: payload };

    default:
      return state;
  }
};
