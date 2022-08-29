import { put, takeEvery } from 'redux-saga/effects'
import {FETCH_MOVIES} from "./ActionTypes"
import {receiveMovies} from "./Actions"
import {search} from "../../service/api"

export function* fetchMoviesSaga({searchTerm}) {
	const movies = yield search(searchTerm).then(({data}) => data)
	yield put(receiveMovies(movies))
}

export default [
	takeEvery(FETCH_MOVIES, fetchMoviesSaga),
]
