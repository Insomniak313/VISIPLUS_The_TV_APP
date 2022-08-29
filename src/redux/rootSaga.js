import { all } from 'redux-saga/effects'
import movieSagas from './movie/Sagas'

export default function* rootSaga() {
  yield all([
    ...movieSagas,
  ])
}
