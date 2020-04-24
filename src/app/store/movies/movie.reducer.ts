import { MovieActions, MovieActionTypes } from './movie.action'
import { Genre } from 'src/app/models/genre.model';
import { Language } from 'src/app/models/language.model';
import { MoviesFilter } from 'src/app/models/movies-filter';
import { Movie } from 'src/app/models/movie.model';

export interface MovieStateInterface {
  movies: Movie[];
  genres: Genre[];
  languages: Language[];
  moviesFilter: MoviesFilter;
}

const initialState: MovieStateInterface = {
  movies: [],
  genres: [],
  languages: [],
  moviesFilter: {
    language: 'en',
    genre: '',
    pageNo: 1,
  }
}

export function movieReducer(state = initialState, action: MovieActions) {

  switch (action.type) {
    case MovieActionTypes.UPDATE_MOVIE_FILTERS:
      return {
        ...state,
        moviesFilter: {
          ...state.moviesFilter,
          ...action.payload
        }
      };

    case MovieActionTypes.LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, ...action.payload]
      };

    case MovieActionTypes.UPDATE_MOVIE_VOTES:
      return {
        ...state,
        movies: state.movies.map((movie, index) => {
          if (index !== action.payload.movieIndex) {
            // Don't modify the movie
            return movie;
          }
          // Update movie votes for the movieIndex
          return {
            ...movie,
            vote_count: action.payload.votes
          };
        })
      };

    case MovieActionTypes.LOAD_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload
      };

    case MovieActionTypes.LOAD_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: action.payload
      };

    default:
      return state;
  }

}
