import { combineReducers } from "redux";
import { fetchArtistsReducer, setShortListReducer } from "./lastFMReducer";
import { fetchMusicBrainzArtistsReducer } from "./musicBrainzReducer";
const reducers = combineReducers({
  allArtists: fetchArtistsReducer,
  shortList: setShortListReducer,
  musicBrainz: fetchMusicBrainzArtistsReducer,
});

export default reducers;
