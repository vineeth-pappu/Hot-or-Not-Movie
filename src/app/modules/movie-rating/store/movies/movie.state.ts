import { Movie } from "../../models/movie.model";
import { Genre } from "../../models/genre.model";
import { Language } from "../../models/language.model";
import { MoviesFilter } from "../../models/movies-filter";

export interface MovieStateInterface {
  movies: Movie[];
  genres: Genre[];
  languages: Language[];
  moviesFilter: MoviesFilter;
  leaderboard: Movie[];
}

export const initialState: MovieStateInterface = {
  movies: [],
  genres: [],
  languages: [],
  moviesFilter: {
    language: "en",
    genre: "",
    pageNo: 1,
  },
  leaderboard: [],
};
