import { MovieStateInterface, movieReducer } from './store/movies/movie.reducer';

export interface AppState {
  movies: MovieStateInterface;
}

export const AppStore = {
  movies: movieReducer
}
