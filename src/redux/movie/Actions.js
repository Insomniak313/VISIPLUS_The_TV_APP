import {FETCH_MOVIES, RECEIVE_MOVIES} from "./ActionTypes"

export const fetchMovies = (searchTerm) => ({
  type: FETCH_MOVIES,
  searchTerm
})

export const receiveMovies = (movies) => ({
  type: RECEIVE_MOVIES,
  movies
})
