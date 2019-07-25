export const primaryTracks = (state = [], action) => {
  switch (action.type) {
    case "LOAD_PRIMARY_TRACKS":
      return action.tracks;
    default:
      return state;
  }
};

export const currentSong = (state = [], action) => {
  switch (action.type) {
    case "LOAD_TARGET_SONG":
      return action.song;
    case "PLAY_SONG":
      const playingSong = { ...action.song };
      playingSong.playing = true;
      return playingSong;
    case "PAUSE_SONG":
      const pausedSong = { ...action.song };
      pausedSong.playing = false;
      return pausedSong;
    case "NEXT_SONG":
      return state;
    default:
      return state;
  }
};
