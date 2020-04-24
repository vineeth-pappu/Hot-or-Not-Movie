import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompareMoviesContainerComponent } from './containers/compare-movies-container/compare-movies-container.component';
import { LeaderboardContainerComponent } from './containers/leaderboard-container/leaderboard-container.component';
import { WelcomeContainerComponent } from './containers/welcome-container/welcome-container.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeContainerComponent
  },
  {
    path: 'movie-rating',
    component: CompareMoviesContainerComponent
  },
  {
    path: 'leaderboard',
    component: LeaderboardContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
