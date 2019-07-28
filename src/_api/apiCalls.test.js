import { fetchGenres, fetchRelatedSongs } from "./apiCalls";
import API_KEY from "./apiKey";

const mockFetchData = {
  results: [
    {
      id: "1197872",
      name: "Perverting The American Dream",
      duration: 238,
      artist_id: "462184",
      artist_name: "The Bourgeois",
      artist_idstr: "The_Bourgeois",
      album_name: "The Bourgeois",
      album_id: "144113",
      position: 1,
      releasedate: "2015-02-16",
      album_image:
        "https://imgjam2.jamendo.com/albums/s144/144113/covers/1.200.jpg",
      audio:
        "https://mp3l.jamendo.com/?trackid=1197872&format=mp31&from=app-d011137e",
      audiodownload: "https://mp3d.jamendo.com/download/track/1197872/mp32/",
      shorturl: "http://jamen.do/t/1197872",
      shareurl: "http://www.jamendo.com/track/1197872",
      image: "https://imgjam2.jamendo.com/albums/s144/144113/covers/1.200.jpg",
      playing: true
    },
    {
      id: "1231231",
      name: "AnotherSong",
      duration: 222,
      artist_id: "452184",
      artist_name: "The Other song",
      artist_idstr: "The_Other_song",
      album_name: "The Other song",
      album_id: "154113",
      position: 1,
      releasedate: "2012-02-16",
      album_image:
        "https://imgjam2.jamendo.com/albums/s144/144113/covers/1.200.jpg",
      audio:
        "https://mp3l.jamendo.com/?trackid=1197872&format=mp31&from=app-d011137e",
      audiodownload: "https://mp3d.jamendo.com/download/track/1197872/mp32/",
      shorturl: "http://jamen.do/t/1197872",
      shareurl: "http://www.jamendo.com/track/1197872",
      image: "https://imgjam2.jamendo.com/albums/s144/144113/covers/1.200.jpg",
      playing: false
    }
  ]
};

describe("fetchGenres", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFetchData)
      })
    );
  });
  it("should invoke 'fetch' with the correct params", () => {
    const path = `https://api.jamendo.com/v3.0/tracks/?client_id=${API_KEY}&format=jsonpretty&limit=2&fuzzytags=rock&include=musicinfo&groupby=artist_id`;
    fetchGenres("rock", 2);
    expect(fetch).toHaveBeenCalledWith(path);
  });
  it("should fetch the appropriate data per request", async () => {
    const results = await fetchGenres("rock", 2);
    expect(results).toHaveLength(2);
  });
  it("should throw an error if response is not ok", async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ ok: false }));
    try {
      await fetchGenres();
    } catch (error) {
      expect(error.message).toBe("");
    }
  });
});

describe("fetchRelatedSongs", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFetchData)
      });
    });
  });
  it("should invoke 'fetch' with the correct params", () => {
    const path = `https://api.jamendo.com/v3.0/tracks/?client_id=${API_KEY}&format=jsonpretty&limit=2&include=musicinfo&tags=rock`;
    fetchRelatedSongs("rock", 2, "1231231");
    expect(fetch).toHaveBeenCalledWith(path);
  });
  it("should fetch the appropriate data per request", async () => {
    const results = await fetchRelatedSongs("rock", 2, "1231231");
    expect(results).toHaveLength(1);
  });
  it("should throw an error if response is not ok", async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ ok: false }));
    try {
      await fetchGenres();
    } catch (error) {
      expect(error.message).toBe("");
    }
  });
});
