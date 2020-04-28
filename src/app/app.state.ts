import { MOVIE_FEATURE_STATE_NAME } from "./modules/movie-rating/store/movies/movie.reducer";
import { MovieStateInterface } from "./modules/movie-rating/store/movies/movie.state";

export interface AppState {
  [MOVIE_FEATURE_STATE_NAME]: MovieStateInterface;
}

export const AppStore = {};
