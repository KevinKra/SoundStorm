import API_KEY from "./apiKey";

export const fetchGenres = async (genreType, count) => {
  try {
    const response = await fetch(
      `https://api.jamendo.com/v3.0/tracks/?client_id=${API_KEY}&format=jsonpretty&limit=${count}&fuzzytags=${genreType}&include=musicinfo&groupby=artist_id`
    );
    const parsed = await response.json();
    //clean data
    parsed.results.forEach(song => {
      delete song.waveform;
      delete song.license_ccurl;
      delete song.prourl;
    });
    return parsed.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchRelatedSongs = async (genres, count, currentSongId) => {
  try {
    const response = await fetch(
      `https://api.jamendo.com/v3.0/tracks/?client_id=${API_KEY}&format=jsonpretty&limit=${count}&include=musicinfo&tags=${genres}`
    );
    const parsed = await response.json();
    parsed.results.forEach(song => {
      delete song.waveform;
    });
    const filteredResults = parsed.results.filter(result => {
      return result.id !== currentSongId;
    });
    return filteredResults;
  } catch (error) {
    console.log(error.message);
  }
};
