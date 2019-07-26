import * as reducers from "./index";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  primaryTracks: reducers.primaryTracks,
  currentSong: reducers.currentSong,
  currentPlaylist: reducers.currentPlaylist,
  currentSongIndex: reducers.currentSongIndex
});
