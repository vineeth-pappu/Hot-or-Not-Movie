import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/movie-rating",
    pathMatch: "full",
  },
  {
    path: "movie-rating",
    loadChildren: () =>
      import("./modules/movie-rating/movie-rating.module").then(
        (m) => m.MovieRatingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
