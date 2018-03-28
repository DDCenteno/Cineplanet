import { connect } from 'react-redux';
import axios from 'axios';
import { navigationTo , getDataMovies } from '../actions/actions';
import CineMovie from '../components/CineMovie';

const mapStateToProps = (state) => {
  const { data, cinemaSelect } = state.AppReducer;
  return {
    data: data,
    cinemaSelect: cinemaSelect
  }
};

const mapDispatchToProps = (dispatch) => ({
  navigateTo: (page, id , idmovie) => {
    dispatch(navigationTo(page, id , idmovie))
  },
  getMovies: (payload) => {
    axios.get('https://rocky-everglades-64772.herokuapp.com/api/movie')   
            .then( response  => { 
                dispatch(getDataMovies(response.data))
            }) 
  }
})

export default connect( mapStateToProps, mapDispatchToProps)(CineMovie);