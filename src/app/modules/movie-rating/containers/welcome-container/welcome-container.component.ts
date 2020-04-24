import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { Subscription, Observable } from "rxjs";
import { Language } from "../../models/language.model";
import { Genre } from "../../models/genre.model";
import {
  LoadGenres,
  LoadLanguages,
  UpdateMoviesFiler,
} from "../../store/movies/movie.action";
import { getGenres, getLanguages } from "../../store/movies/movie.selectors";

@Component({
  selector: "app-welcome-container",
  templateUrl: "./welcome-container.component.html",
  styleUrls: ["./welcome-container.component.sass"],
})
export class WelcomeContainerComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  languages$: Observable<Language[]>;
  genres$: Observable<Genre[]>;

  formData = {
    language: "en",
    genre: "",
  };

  constructor(private router: Router, private store: Store<AppState>) {}

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
    this.router.navigate(["/movie-rating/compare-movies"]);
  }

  loadObjectsFromStore(): void {
    this.genres$ = this.store.pipe(select(getGenres));
    this.languages$ = this.store.pipe(select(getLanguages));
  }
}
