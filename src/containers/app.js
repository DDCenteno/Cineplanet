import { connect } from 'react-redux';
import axios from 'axios';
import { navigationTo , getDataCinemas} from '../actions/actions';
import App from '../components/App';

const mapStateToProps = (state) => {
  const { actualPage, data } = state.AppReducer;
  return {
    actualPage: actualPage,
    data: data
  }
};


const mapDispatchToProps = (dispatch) => ({
  navigateTo: (page) => {
    dispatch(navigationTo(page))
  },
  getData: (payload) => {
    axios.get('https://rocky-everglades-64772.herokuapp.com/api/product')   
            .then( response  => { 
                dispatch(getDataCinemas(response.data))
            }) 
  }
})

export default connect( mapStateToProps, mapDispatchToProps)(App);