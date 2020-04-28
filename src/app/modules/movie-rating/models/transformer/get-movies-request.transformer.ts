import { MoviesFilter } from "../movies-filter";

export class GetMoviesRequestTransformer {
  language: string;
  with_genres: string;
  page: number;

  constructor(payload: MoviesFilter) {
    this.language = payload.language;
    this.with_genres = payload.genre;
    this.page = payload.pageNo;
  }
}
