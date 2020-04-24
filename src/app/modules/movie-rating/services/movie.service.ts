import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { endpoints } from "../constants/endpoints";
import { Observable } from "rxjs";
import { GenreResponse } from "../models/response/genre.response";
import { Language } from "../models/language.model";
import { MoviesFilter } from "../models/movies-filter";
import { MoviesResponse } from "../models/response/movies.response";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor(private http: HttpClient) {}

  public getAvailableLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(endpoints.availableLanguages);
  }

  public getGenres(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(endpoints.allGenres, {
      params: { language: "en" },
    });
  }

  /**
   * Get movies based on filters (genre, language, page,..)
   * payload: GetMoviesFilter
   */
  public discoverMovies(payload): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(endpoints.discoverMovies, {
      params: { ...payload },
    });
  }
}
