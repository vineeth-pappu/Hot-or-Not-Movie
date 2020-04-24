import {
  MovieStateInterface,
  MOVIE_FEATURE_STATE_NAME,
} from "./modules/movie-rating/store/movies/movie.reducer";

export interface AppState {
  [MOVIE_FEATURE_STATE_NAME]: MovieStateInterface;
}

export const AppStore = {};
