import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { WelcomeContainerComponent } from "./containers/welcome-container/welcome-container.component";
import { CompareMoviesContainerComponent } from "./containers/compare-movies-container/compare-movies-container.component";
import { LeaderboardContainerComponent } from "./containers/leaderboard-container/leaderboard-container.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeContainerComponent,
  },
  {
    path: "compare-movies",
    component: CompareMoviesContainerComponent,
  },
  {
    path: "leaderboard",
    component: LeaderboardContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRatingRoutingModule {}
