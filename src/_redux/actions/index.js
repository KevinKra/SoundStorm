export const loadPrimaryTracks = tracks => {
  return {
    type: "LOAD_PRIMARY_TRACKS",
    tracks
  };
};

export const loadCurrentPlaylist = playlist => {
  return {
    type: "LOAD_PLAYLIST",
    playlist
  };
};

export const playTargetSong = song => {
  return {
    type: "PLAY_TARGET_SONG",
    song
  };
};

export const playSong = song => {
  return {
    type: "PLAY_SONG",
    song
  };
};

export const pauseSong = song => {
  return {
    type: "PAUSE_SONG",
    song
  };
};

export const resetIndex = () => {
  return {
    type: "RESET_INDEX"
  };
};

export const incrementIndex = (currentIndex, playlistLength) => {
  return {
    type: "INCREMENT_INDEX",
    currentIndex,
    playlistLength
  };
};

export const decrementIndex = (currentIndex, playlistLength) => {
  return {
    type: "DECREMENT_INDEX",
    currentIndex,
    playlistLength
  };
};
