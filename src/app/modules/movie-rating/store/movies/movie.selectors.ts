import { createSelector, Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";

export const selectMovieState = (state: AppState) => state.movies;

export const getGenres = createSelector(
  selectMovieState,
  (state) => state.genres
);

export const getLanguages = createSelector(
  selectMovieState,
  (state) => state.languages
);

export const getMoviesFilter = createSelector(
  selectMovieState,
  (state) => state.moviesFilter
);

export const getMovies = createSelector(
  selectMovieState,
  (state) => state.movies
);

export const getMoviesLeaderboard = createSelector(
  selectMovieState,
  (state) => state.leaderboard
);
