import { musicBrainzActionTypes } from "../constants/musicBrainz-Action-types";

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
