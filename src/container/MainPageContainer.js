import MainPage from "../component/MainPage"
import {connect} from "react-redux"
import {fetchMovies} from "../redux/movie/Actions"

const mapStateToProps = (state) => ({
  movies: state.movie.movies
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (searchTerm) => dispatch(fetchMovies(searchTerm)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
