import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/app.state";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { Movie } from "../../models/movie.model";
import { getMoviesLeaderboard } from "../../store/movies/movie.selectors";

@Component({
  selector: "app-leaderboard-container",
  templateUrl: "./leaderboard-container.component.html",
  styleUrls: ["./leaderboard-container.component.sass"],
})
export class LeaderboardContainerComponent implements OnInit {
  moviesLeaderboard$: Observable<Movie[]>;

  posterUrl = environment.posterUrl;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.moviesLeaderboard$ = this.store.pipe(
      select(getMoviesLeaderboard),
      tap((movies) => {
        if (!movies.length) {
          this.router.navigate(["/"]);
        }
      })
    );
  }
}
