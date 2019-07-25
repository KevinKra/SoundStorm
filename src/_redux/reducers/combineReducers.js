import * as reducers from "./index";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  primaryTracks: reducers.primaryTracks,
  currentPlaylist: reducers.currentPlaylist
});
