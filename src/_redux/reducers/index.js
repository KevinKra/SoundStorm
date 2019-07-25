export const primaryTracks = (state = [], action) => {
  switch (action.type) {
    case "LOAD_PRIMARY_TRACKS":
      return action.tracks;
    default:
      return state;
  }
};

export const currentSong = (state = {}, action) => {
  switch (action.type) {
    case "PLAY_TARGET_SONG":
      return action.song;
    default:
      return state;
  }
};

export const currentPlaylist = (state = [], action) => {
  switch (action.type) {
    case "LOAD_PLAYLIST":
      return action.playlist;
    default:
      return state;
  }
};
