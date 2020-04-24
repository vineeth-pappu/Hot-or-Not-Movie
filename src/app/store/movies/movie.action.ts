import { Action } from '@ngrx/store';
import { Language } from 'src/app/models/language.model';
import { Genre } from 'src/app/models/genre.model';
import { GetMoviesRequest } from 'src/app/models/request/get-movies.request';
import { Movie } from 'src/app/models/movie.model';
import { MoviesFilter } from 'src/app/models/movies-filter';

export enum MovieActionTypes {
  LOAD_MOVIES = '[Movies] Load Movies',
  LOAD_MOVIES_SUCCESS = '[Movies] Load Movies Success',
  LOAD_GENRES = '[Movies] Load Genres',
  LOAD_GENRES_SUCCESS = '[Movies] Load Genres Success',
  LOAD_LANGUAGES = '[Movies] Load Languages',
  LOAD_LANGUAGES_SUCCESS = '[Movies] Load Languages Success',
  UPDATE_MOVIE_FILTERS = '[Movies] Update Movies Filter',
  UPDATE_MOVIE_VOTES = '[Movies] Update Movie Votes',
}

export class UpdateMoviesFiler implements Action {
  readonly type = MovieActionTypes.UPDATE_MOVIE_FILTERS;

  constructor(public payload: MoviesFilter) { }
}

export class LoadMovies implements Action {
  readonly type = MovieActionTypes.LOAD_MOVIES;

  constructor(public payload: GetMoviesRequest) { }
}

export class LoadMoviesSuccess implements Action {
  readonly type = MovieActionTypes.LOAD_MOVIES_SUCCESS;

  constructor(public payload: Movie[]) { }
}

export class LoadGenres implements Action {
  readonly type = MovieActionTypes.LOAD_GENRES;

  constructor() { }
}

export class LoadGenresSuccess implements Action {
  readonly type = MovieActionTypes.LOAD_GENRES_SUCCESS;

  constructor(public payload: Genre[]) { }
}

export class LoadLanguages implements Action {
  readonly type = MovieActionTypes.LOAD_LANGUAGES;

  constructor() { }
}

export class LoadLanguagesSuccess implements Action {
  readonly type = MovieActionTypes.LOAD_LANGUAGES_SUCCESS;

  constructor(public payload: Language[]) { }
}

export class UpdateMovieVotes implements Action {
  readonly type = MovieActionTypes.UPDATE_MOVIE_VOTES;

  constructor(public payload: { movieIndex: number; votes: number; }) { }
}

export type MovieActions = LoadMovies
  | UpdateMoviesFiler
  | LoadMovies
  | LoadMoviesSuccess
  | UpdateMovieVotes
  | LoadGenres
  | LoadGenresSuccess
  | LoadLanguages
  | LoadLanguagesSuccess;
