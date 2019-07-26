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
    case "PLAY_SONG":
      const playingSong = { ...action.song };
      playingSong.playing = true;
      return playingSong;
    case "PAUSE_SONG":
      const pausedSong = { ...action.song };
      pausedSong.playing = false;
      return pausedSong;
    default:
      return state;
  }
};

export const currentPlaylist = (state = [], action) => {
  switch (action.type) {
    case "LOAD_PLAYLIST":
      const updatedPlaylist = action.playlist.map(track => {
        return { ...track, playing: false };
      });
      return updatedPlaylist;
    default:
      return state;
  }
};

export const currentSongIndex = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_INDEX":
      if (action.currentIndex < action.playlistLength) {
        return state + 1;
      } else {
        return (state = 0);
      }
    case "DECREMENT_INDEX":
      if (action.currentIndex > 0) {
        return state - 1;
      } else {
        return (state = action.playlistLength);
      }
    case "RESET_INDEX":
      return (state = 0);
    default:
      return state;
  }
};
