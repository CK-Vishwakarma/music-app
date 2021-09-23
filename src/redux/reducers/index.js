import { combineReducers } from "redux";
import { fetchArtistsReducer, setShortListReducer } from "./lastFMReducer";
import {
  fetchMusicBrainzArtistsReducer,
  setFavouriteReducer,
} from "./musicBrainzReducer";
const reducers = combineReducers({
  allArtists: fetchArtistsReducer,
  shortList: setShortListReducer,
  musicBrainz: fetchMusicBrainzArtistsReducer,
  favouriteList: setFavouriteReducer,
});

export default reducers;
