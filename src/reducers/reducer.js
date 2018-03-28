import { actionTypes } from '../actions/actions';

const INITIAL_STATE = {
  actualPage: 'home',
  data: [],
  cinemaSelect: '',
  movies:[],
  movieSelect: '',
  movieData: {},
  totalAmount: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.NAVIGATION_TO:
      return { 
        ...state ,
        actualPage: action.page ,        
        cinemaSelect: action.id ? action.id : '' ,
        movieSelect: action.idmovie ? action.idmovie : ''
      };
    case actionTypes.GET_DATA:
      return { 
        ...state,
        data: action.payload 
      };
    case actionTypes.GET_DATA_MOVIES:
      return { 
        ...state,
        movies: action.payload 
      };
    case actionTypes.GET_DATA_MOVIE:
      return { 
        ...state,
        movieData: action.payload 
      };
    default:
      return state;
  }
}