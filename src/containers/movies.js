import { navigationTo , getDataMovies, getDataMovie } from '../actions/actions';
import axios from 'axios';
import { connect } from 'react-redux';
import Movies from '../components/Movies'

const mapStateToProps = (state) => {
  const { data, movieSelect, movieData } = state.AppReducer;
  return {
    data: data,
    movieData: movieData,
    movieSelect: movieSelect,    
  }
};

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (page, id , idmovie ) => {
    dispatch(navigationTo(page, id , idmovie))
  },
  getMovie: (idMovie) => {
    axios.get(`https://rocky-everglades-64772.herokuapp.com/api/movie/${idMovie}`)   
            .then( response  => { 
                dispatch(getDataMovie(response.data))
            }) 
  }
})

export default connect( mapStateToProps, mapDispatchToProps)(Movies);