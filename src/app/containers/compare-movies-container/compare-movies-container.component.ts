import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { environment } from 'src/environments/environment';
import { AppState } from 'src/app/app.state';
import { Store, select } from '@ngrx/store';
import { getMoviesFilter, getMovies } from 'src/app/store/movies/movie.selectors';
import { LoadMovies, UpdateMovieVotes, UpdateMoviesFiler } from 'src/app/store/movies/movie.action';
import { GetMoviesRequest } from 'src/app/models/request/get-movies.request';
import { Movie } from 'src/app/models/movie.model';
import { Router } from '@angular/router';
import { MoviesFilter } from 'src/app/models/movies-filter';
import { Subscription } from 'rxjs';

export const FIRST_MOVIE_INDEX = 0;
export const SECOND_MOVIE_INDEX = 1;

export enum MovieSlots {
  LEFT_SLOT = 'LEFT_SLOT',
  RIGHT_SLOT = 'RIGHT_SLOT'
}

@Component({
  selector: 'app-compare-movies-container',
  templateUrl: './compare-movies-container.component.html',
  styleUrls: ['./compare-movies-container.component.sass']
})
export class CompareMoviesContainerComponent implements OnInit, OnDestroy {

  movies: Movie[] = [];
  MovieSlots = MovieSlots;

  LEFT_SLOT_MOVIE_INDEX = FIRST_MOVIE_INDEX;
  RIGHT_SLOT_MOVIE_INDEX = SECOND_MOVIE_INDEX;

  lastMovieReviewedIndex = SECOND_MOVIE_INDEX;

  moviesFilter: MoviesFilter;

  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.store.pipe(select(getMoviesFilter)).subscribe(
        moviesFilter => this.moviesFilter = moviesFilter
      )
    );

    this.subscriptions.add(
      this.store.pipe(select(getMovies)).subscribe(
        movies => this.movies = movies
      )
    );

    this.loadMovies();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadMovies(): void {
    const req: GetMoviesRequest = {
      with_genres: this.moviesFilter.genre,
      page: this.moviesFilter.pageNo,
      language: this.moviesFilter.language
    };

    this.store.dispatch(new LoadMovies(req));
  }


  loadNextPage(): void {
    this.store.dispatch(new UpdateMoviesFiler({ pageNo: this.moviesFilter.pageNo + 1 }));
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
    this.router.navigate(['/leaderboard']);
  }


}