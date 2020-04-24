import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Subscription, Observable } from 'rxjs';
import { LoadGenres, LoadLanguages, UpdateMoviesFiler } from 'src/app/store/movies/movie.action';
import { getGenres, getLanguages } from 'src/app/store/movies/movie.selectors';
import { Language } from 'src/app/models/language.model';
import { Genre } from 'src/app/models/genre.model';

@Component({
  selector: 'app-welcome-container',
  templateUrl: './welcome-container.component.html',
  styleUrls: ['./welcome-container.component.sass']
})
export class WelcomeContainerComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();

  languages$: Observable<Language[]>;
  genres$: Observable<Genre[]>;

  formData = {
    language: 'en',
    genre: ''
  };

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loadObjectsFromStore();
    this.loadLookupData();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadLookupData(): void {
    this.store.dispatch(new LoadGenres());
    this.store.dispatch(new LoadLanguages());
  }

  saveFormData(): void {
    this.store.dispatch(new UpdateMoviesFiler(this.formData));
    this.router.navigate(['/movie-rating']);
  }

  loadObjectsFromStore(): void {
    this.genres$ = this.store.pipe(select(getGenres));
    this.languages$ = this.store.pipe(select(getLanguages));
  }
}

