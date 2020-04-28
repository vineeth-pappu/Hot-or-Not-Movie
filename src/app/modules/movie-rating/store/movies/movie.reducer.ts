import { MovieActions, MovieActionTypes } from "./movie.action";
import { initialState } from "./movie.state";

export const MOVIE_FEATURE_STATE_NAME = "movies";

export function movieReducer(state = initialState, action: MovieActions) {
  switch (action.type) {
    case MovieActionTypes.UPDATE_MOVIE_FILTERS:
      return {
        ...state,
        moviesFilter: {
          ...state.moviesFilter,
          ...action.payload,
        },
      };

    case MovieActionTypes.LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
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
            vote_count: action.payload.votes,
          };
        }),
      };

    case MovieActionTypes.LOAD_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };

    case MovieActionTypes.LOAD_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: action.payload,
      };

    case MovieActionTypes.RESET_MOVIES:
      return {
        ...state,
        movies: [],
      };

    case MovieActionTypes.SUBMIT_MOVIES_TO_LEADERBOARD:
      return {
        ...state,
        leaderboard: action.payload
          .map((m) => m)
          .sort((a, b) => {
            if (a.vote_count < b.vote_count) {
              return 1;
            }
            if (a.vote_count > b.vote_count) {
              return -1;
            }
            return 0;
          }),
      };

    default:
      return state;
  }
}
