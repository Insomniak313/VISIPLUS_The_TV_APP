import {Provider} from "react-redux"
import {combineReducers, createStore} from "redux"
import MovieReducer from "./src/redux/movie/Reducer"
import MainPageContainer from "./src/container/MainPageContainer"

const store = createStore(
  combineReducers({
    movie: MovieReducer
  })
)

export default function App() {
  return (
    <Provider store={store}>
      <MainPageContainer />
    </Provider>
  )
}
