import { environment } from "src/environments/environment";

const baseUrl = environment.baseUrl;
const apiKey = environment.apiKey;

export const endpoints = {
  availableLanguages: `${baseUrl}configuration/languages?api_key=${apiKey}`,

  allGenres: `${baseUrl}genre/movie/list?api_key=${apiKey}`,

  discoverMovies: `${baseUrl}discover/movie?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false`,
};
