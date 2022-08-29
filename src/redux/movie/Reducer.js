import {CLEAR_MOVIES, RECEIVE_MOVIE} from "./ActionTypes"

export const initialState = {
  movies: []
}

const receiveMovie = (state, movie) => ({
  ...state,
  movies: [...state.movies, movie]
})

const clearMovies = (state) => ({
  ...state,
  movies: []
})

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MOVIE:
      return receiveMovie(state, action.movie)
    case CLEAR_MOVIES:
      return clearMovies(state)
    default:
      return state
  }
}
