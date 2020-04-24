import { Movie } from '../movie.model';

export interface MoviesResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Movie[]
}
