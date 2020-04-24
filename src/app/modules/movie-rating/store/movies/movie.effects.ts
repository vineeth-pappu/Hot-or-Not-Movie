import { Injectable } from "@angular/core";
import { Actions, Effect, ofType, createEffect } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { MovieActionTypes, MovieActions, LoadMovies } from "./movie.action";
import { EMPTY } from "rxjs";
import { MovieService } from "../../services/movie.service";

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadMovies>(MovieActionTypes.LOAD_MOVIES),
      mergeMap((action) =>
        this.movieService.discoverMovies(action.payload).pipe(
          map((res) => {
            return {
              type: MovieActionTypes.LOAD_MOVIES_SUCCESS,
              payload: res.results,
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadGenres$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActionTypes.LOAD_GENRES),
      mergeMap(() =>
        this.movieService.getGenres().pipe(
          map(({ genres }) => {
            return {
              type: MovieActionTypes.LOAD_GENRES_SUCCESS,
              payload: genres,
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadLanguages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActionTypes.LOAD_LANGUAGES),
      mergeMap(() =>
        this.movieService.getAvailableLanguages().pipe(
          map((languages) => {
            return {
              type: MovieActionTypes.LOAD_LANGUAGES_SUCCESS,
              payload: languages,
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
