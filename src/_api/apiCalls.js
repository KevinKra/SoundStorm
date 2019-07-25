import API_KEY from "./apiKey";

export const fetchGenres = async genreType => {
  const result = await fetch(
    `https://api.jamendo.com/v3.0/tracks/?client_id=${API_KEY}&format=jsonpretty&limit=5&fuzzytags=${genreType}&include=musicinfo&groupby=artist_id`
  );
  console.log(await result.json());
};
