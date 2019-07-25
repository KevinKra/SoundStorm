import API_KEY from "./apiKey";

export const fetchGenres = async (genreType, count) => {
  const response = await fetch(
    `https://api.jamendo.com/v3.0/tracks/?client_id=${API_KEY}&format=jsonpretty&limit=${count}&fuzzytags=${genreType}&include=musicinfo&groupby=artist_id`
  );
  const parsed = await response.json();
  //clean data
  parsed.results.forEach(song => {
    return delete song.waveform, delete song.license_ccurl, delete song.prourl;
  });
  return parsed.results;
};
