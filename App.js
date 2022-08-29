import {Provider} from "react-redux"
import {applyMiddleware, combineReducers, createStore} from "redux"
import MovieReducer from "./src/redux/movie/Reducer"
import MainPageContainer from "./src/container/MainPageContainer"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./src/redux/rootSaga"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    movie: MovieReducer
  }),
  applyMiddleware(
    sagaMiddleware
  )
)

sagaMiddleware.run(rootSaga)

export default function App() {
  return (
    <Provider store={store}>
      <MainPageContainer />
    </Provider>
  )
}
