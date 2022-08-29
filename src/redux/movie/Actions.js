import {CLEAR_MOVIES, RECEIVE_MOVIE} from "./ActionTypes"

export const receiveMovie = (movie) => ({
  type: RECEIVE_MOVIE,
  movie
})

export const clearMovies = () => ({
  type: CLEAR_MOVIES,
})
