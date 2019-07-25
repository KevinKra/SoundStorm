export const loadPrimaryTracks = tracks => {
  return {
    type: "LOAD_PRIMARY_TRACKS",
    tracks
  };
};

export const loadTargetSong = song => {
  return {
    type: "LOAD_TARGET_SONG",
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
