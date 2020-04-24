import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/movies/movie.effects';
import { CompareMoviesContainerComponent } from './containers/compare-movies-container/compare-movies-container.component';
import { LeaderboardContainerComponent } from './containers/leaderboard-container/leaderboard-container.component';
import { AppStore } from './app.state';
import { WelcomeContainerComponent } from './containers/welcome-container/welcome-container.component';
import { MovieContainerComponent } from './containers/movie-container/movie-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    LogoComponent,
    AvatarComponent,
    CompareMoviesContainerComponent,
    LeaderboardContainerComponent,
    WelcomeContainerComponent,
    MovieContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(AppStore),
    EffectsModule.forRoot([MovieEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
