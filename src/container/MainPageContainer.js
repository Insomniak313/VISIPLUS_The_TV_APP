import MainPage from "../component/MainPage"
import {connect} from "react-redux"
import {clearMovies, receiveMovie} from "../redux/movie/Actions"

const mapStateToProps = (state) => ({
  movies: state.movie.movies
})

const mapDispatchToProps = (dispatch) => ({
  receiveMovie: (movie) => dispatch(receiveMovie(movie)),
  clearMovies: () => dispatch(clearMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
