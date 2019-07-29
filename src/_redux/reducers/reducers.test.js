import {
  primaryTracks,
  currentSong,
  currentPlaylist,
  currentSongIndex
} from "./index";
import { mockFetchData, mockSong } from "../../mockData";

describe("primaryTracks", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = primaryTracks(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should return an array of primary tracks", () => {
    const loadPrimaryTracksAction = {
      type: "LOAD_PRIMARY_TRACKS",
      tracks: mockFetchData
    };
    const expected = mockFetchData;
    const results = primaryTracks([], loadPrimaryTracksAction);
    expect(results).toEqual(expected);
  });
});

describe("currentSong", () => {
  it("should return the initial state", () => {
    const expected = {};
    const result = currentSong(undefined, {});
    expect(result).toEqual(expected);
  });
  it("should return a song with the playing value set to true", () => {
    const playTargetSongAction = {
      type: "PLAY_TARGET_SONG",
      song: mockSong
    };
    const expected = mockSong;
    const results = currentSong({}, playTargetSongAction);
    expect(results).toEqual(expected);
    expect(expected.playing).toEqual(true);
  });
  it("should return the current song with its playing value to true when playing", () => {
    const playSongAction = {
      type: "PLAY_SONG",
      song: mockSong
    };
    const expected = mockSong;
    const results = currentSong({}, playSongAction);
    expect(results).toEqual(expected);
    expect(expected.playing).toEqual(true);
  });
  it("should return the current song with its playing value to false when paused", () => {
    const pauseSongAction = {
      type: "PAUSE_SONG",
      song: mockSong
    };
    mockSong.playing = false;
    const expected = mockSong;
    const results = currentSong({}, pauseSongAction);
    expect(results).toEqual(expected);
    expect(expected.playing).toEqual(false);
  });
});

describe("currentPlaylist", () => {
  it("should return the initial state", () => {
    const expected = {};
    const result = currentSong(undefined, {});
    expect(result).toEqual(expected);
  });
  it("should map through the playlist and set all playing properties to false", () => {
    const loadPlaylistAction = {
      type: "LOAD_PLAYLIST",
      playlist: mockFetchData.results
    };
    const expected = mockFetchData.results.map(result => {
      return { ...result, playing: false };
    });
    const results = currentPlaylist([], loadPlaylistAction);
    expect(results).toEqual(expected);
  });
});

describe("currentSongIndex", () => {
  it("should return the initial state", () => {
    const expected = 0;
    const result = currentSongIndex(undefined, {});
    expect(result).toEqual(expected);
  });
  it("should increment the index if playlistLength is greater than current Index", () => {
    const incrementAction = {
      type: "INCREMENT_INDEX",
      currentIndex: 1,
      playlistLength: 2
    };
    const expected = "1";
    const results = currentSongIndex([], incrementAction);
    expect(results).toEqual(expected);
  });
  it("should return the 0 if playlistLength is less than current Index", () => {
    const incrementAction = {
      type: "INCREMENT_INDEX",
      currentIndex: 2,
      playlistLength: 1
    };
    const expected = 0;
    const results = currentSongIndex([], incrementAction);
    expect(results).toEqual(expected);
  });
  it("should decrement the index if currentIndex is greater than 0", () => {
    const decrementAction = {
      type: "DECREMENT_INDEX",
      currentIndex: 1
    };
    const expected = -1;
    const results = currentSongIndex([], decrementAction);
    expect(results).toEqual(expected);
  });
  it("should set state to equal the length of the playlist if current index is 0 or lower", () => {
    const decrementAction = {
      type: "DECREMENT_INDEX",
      currentIndex: 0,
      playlistLength: 1
    };
    const expected = decrementAction.playlistLength;
    const results = currentSongIndex([], decrementAction);
    expect(results).toEqual(expected);
  });
  it("should reset the state back to 0", () => {
    const resetAction = {
      type: "RESET_INDEX"
    };
    const expected = 0;
    const results = currentSongIndex([], resetAction);
    expect(results).toEqual(expected);
  });
});
