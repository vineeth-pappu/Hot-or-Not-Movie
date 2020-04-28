import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppState } from "src/app/app.state";
import { Store, select } from "@ngrx/store";
import { Router } from "@angular/router";
import { Movie } from "../../models/movie.model";
import {
  MovieSlots,
  FIRST_MOVIE_INDEX,
  SECOND_MOVIE_INDEX,
} from "../../constants/movie-slots.constant";
import { MoviesFilter } from "../../models/movies-filter";
import { Subscription } from "rxjs";
import {
  ResetMovies,
  LoadMovies,
  UpdateMoviesFiler,
} from "../../store/movies/movie.action";
import { getMoviesFilter, getMovies } from "../../store/movies/movie.selectors";
import { GetMoviesRequest } from "../../models/request/get-movies.request";
import { GetMoviesRequestTransformer } from "../../models/transformer/get-movies-request.transformer";

@Component({
  selector: "app-compare-movies-container",
  templateUrl: "./compare-movies-container.component.html",
  styleUrls: ["./compare-movies-container.component.sass"],
})
export class CompareMoviesContainerComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  MovieSlots = MovieSlots;

  LEFT_SLOT_MOVIE_INDEX = FIRST_MOVIE_INDEX;
  RIGHT_SLOT_MOVIE_INDEX = SECOND_MOVIE_INDEX;

  lastMovieReviewedIndex = SECOND_MOVIE_INDEX;

  moviesFilter: MoviesFilter;

  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router, private store: Store<AppState>) {
    store.dispatch(new ResetMovies());
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.store
        .pipe(select(getMoviesFilter))
        .subscribe((moviesFilter) => (this.moviesFilter = moviesFilter))
    );

    this.subscriptions.add(
      this.store
        .pipe(select(getMovies))
        .subscribe((movies) => (this.movies = movies))
    );

    this.loadMovies();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadMovies(): void {
    const req: GetMoviesRequest = new GetMoviesRequestTransformer(
      this.moviesFilter
    );
    this.store.dispatch(new LoadMovies(req));
  }

  loadNextPage(): void {
    this.store.dispatch(
      new UpdateMoviesFiler({ pageNo: this.moviesFilter.pageNo + 1 })
    );
    this.loadMovies();
  }

  getNextMovie(sourceMovieSlot: MovieSlots): void {
    // To show next movie from list & keep track of last movie reviewed
    const nextMovieIndex = ++this.lastMovieReviewedIndex;

    // Check if next index is available in movies array; If not get movies from next page
    if (!this.isMovieAvailable(nextMovieIndex)) {
      this.loadNextPage();
    }

    // Show next movie to review in UI
    this.assignMovieToSlot(sourceMovieSlot, nextMovieIndex);
  }

  assignMovieToSlot(sourceMovieSlot, nextMovieIndex): void {
    // If sourceMovieSlot is LEFT_SLOT : show next movie in slot RIGHT_SLOT
    if (sourceMovieSlot === MovieSlots.LEFT_SLOT) {
      this.RIGHT_SLOT_MOVIE_INDEX = nextMovieIndex;
    }
    // If sourceMovieSlot is RIGHT_SLOT : show next movie in slot LEFT_SLOT
    if (sourceMovieSlot === MovieSlots.RIGHT_SLOT) {
      this.LEFT_SLOT_MOVIE_INDEX = nextMovieIndex;
    }
  }

  isMovieAvailable(movieIndex: number): boolean {
    return this.movies[movieIndex] ? true : false;
  }

  goToLeaderboard(): void {
    this.router.navigate(["/movie-rating/leaderboard"]);
  }
}
