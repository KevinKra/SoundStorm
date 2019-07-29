import { fetchGenres, fetchRelatedSongs } from "./apiCalls";
import { mockFetchData } from "../mockData/index";
import API_KEY from "./apiKey";

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
