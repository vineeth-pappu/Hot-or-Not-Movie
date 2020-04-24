import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';
import { MovieActionTypes, MovieActions, LoadMovies } from './movie.action';
import { EMPTY } from 'rxjs';

@Injectable()
export class MovieEffects {

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) { }

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType<LoadMovies>(MovieActionTypes.LOAD_MOVIES),
    mergeMap((action) => this.appService.discoverMovies(action.payload)
      .pipe(
        map(res => {
          return { type: MovieActionTypes.LOAD_MOVIES_SUCCESS, payload: res.results };
        }),
        catchError(() => EMPTY)
      ))
  )
  );


  loadGenres$ = createEffect(() => this.actions$.pipe(
    ofType(MovieActionTypes.LOAD_GENRES),
    mergeMap(() => this.appService.getGenres()
      .pipe(
        map(({ genres }) => {
          return { type: MovieActionTypes.LOAD_GENRES_SUCCESS, payload: genres };
        }),
        catchError(() => EMPTY)
      ))
  )
  );



  loadLanguages$ = createEffect(() => this.actions$.pipe(
    ofType(MovieActionTypes.LOAD_LANGUAGES),
    mergeMap(() => this.appService.getAvailableLanguages()
      .pipe(
        map(languages => {
          return { type: MovieActionTypes.LOAD_LANGUAGES_SUCCESS, payload: languages };
        }),
        catchError(() => EMPTY)
      ))
  )
  );


}
