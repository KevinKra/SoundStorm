export const primaryTracks = (state = [], action) => {
  switch (action.type) {
    case "LOAD_PRIMARY_TRACKS":
      return action.tracks;
    default:
      return state;
  }
};

export const currentPlaylist = (state = [], action) => {
  switch (action.type) {
    case "LOAD_SOMETHING":
      return action.payload;
    default:
      return state;
  }
};
