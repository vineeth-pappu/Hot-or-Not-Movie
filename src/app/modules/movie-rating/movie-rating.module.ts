import { NgModule } from "@angular/core";
import { CompareMoviesContainerComponent } from "./containers/compare-movies-container/compare-movies-container.component";
import { LeaderboardContainerComponent } from "./containers/leaderboard-container/leaderboard-container.component";
import { WelcomeContainerComponent } from "./containers/welcome-container/welcome-container.component";
import { MovieContainerComponent } from "./containers/movie-container/movie-container.component";
import { MovieRatingRoutingModule } from "./movie-rating-routing.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MovieEffects } from "./store/movies/movie.effects";
import {
  MOVIE_FEATURE_STATE_NAME,
  movieReducer,
} from "./store/movies/movie.reducer";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    CompareMoviesContainerComponent,
    LeaderboardContainerComponent,
    WelcomeContainerComponent,
    MovieContainerComponent,
  ],
  imports: [
    SharedModule,
    MovieRatingRoutingModule,
    StoreModule.forFeature(MOVIE_FEATURE_STATE_NAME, movieReducer),
    EffectsModule.forFeature([MovieEffects]),
  ],
  providers: [],
})
export class MovieRatingModule {}
