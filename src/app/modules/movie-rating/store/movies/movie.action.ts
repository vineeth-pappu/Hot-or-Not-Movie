import { Action } from "@ngrx/store";
import { MoviesFilter } from "../../models/movies-filter";
import { GetMoviesRequest } from "../../models/request/get-movies.request";
import { Movie } from "../../models/movie.model";
import { Genre } from "../../models/genre.model";
import { Language } from "../../models/language.model";

export enum MovieActionTypes {
  LOAD_MOVIES = "[Movies] Load Movies",
  LOAD_MOVIES_SUCCESS = "[Movies] Load Movies Success",
  LOAD_GENRES = "[Movies] Load Genres",
  LOAD_GENRES_SUCCESS = "[Movies] Load Genres Success",
  LOAD_LANGUAGES = "[Movies] Load Languages",
  LOAD_LANGUAGES_SUCCESS = "[Movies] Load Languages Success",
  UPDATE_MOVIE_FILTERS = "[Movies] Update Movies Filter",
  UPDATE_MOVIE_VOTES = "[Movies] Update Movie Votes",
  RESET_MOVIES = "[Movies] Reset Movies",
}

export class UpdateMoviesFiler implements Action {
  readonly type = MovieActionTypes.UPDATE_MOVIE_FILTERS;

  constructor(public payload: MoviesFilter) {}
}

export class LoadMovies implements Action {
  readonly type = MovieActionTypes.LOAD_MOVIES;

  constructor(public payload: GetMoviesRequest) {}
}

export class LoadMoviesSuccess implements Action {
  readonly type = MovieActionTypes.LOAD_MOVIES_SUCCESS;

  constructor(public payload: Movie[]) {}
}

export class LoadGenres implements Action {
  readonly type = MovieActionTypes.LOAD_GENRES;

  constructor() {}
}

export class LoadGenresSuccess implements Action {
  readonly type = MovieActionTypes.LOAD_GENRES_SUCCESS;

  constructor(public payload: Genre[]) {}
}

export class LoadLanguages implements Action {
  readonly type = MovieActionTypes.LOAD_LANGUAGES;

  constructor() {}
}

export class LoadLanguagesSuccess implements Action {
  readonly type = MovieActionTypes.LOAD_LANGUAGES_SUCCESS;

  constructor(public payload: Language[]) {}
}

export class UpdateMovieVotes implements Action {
  readonly type = MovieActionTypes.UPDATE_MOVIE_VOTES;

  constructor(public payload: { movieIndex: number; votes: number }) {}
}

export class ResetMovies implements Action {
  readonly type = MovieActionTypes.RESET_MOVIES;

  constructor() {}
}

export type MovieActions =
  | LoadMovies
  | UpdateMoviesFiler
  | LoadMovies
  | LoadMoviesSuccess
  | UpdateMovieVotes
  | LoadGenres
  | LoadGenresSuccess
  | LoadLanguages
  | LoadLanguagesSuccess
  | ResetMovies;
