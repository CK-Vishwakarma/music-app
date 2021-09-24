import { combineReducers } from "redux";
import { fetchArtistsReducer, setShortListReducer } from "./lastFMReducer";
import {
  fetchMusicBrainzArtistsReducer,
  fetchedFavArtists,
  setFavouriteReducer,
} from "./musicBrainzReducer";
const reducers = combineReducers({
  allArtists: fetchArtistsReducer,
  shortList: setShortListReducer,
  musicBrainz: fetchMusicBrainzArtistsReducer,
  favouriteList: setFavouriteReducer,
  fetchedFavouriteArtists: fetchedFavArtists,
});

export default reducers;
