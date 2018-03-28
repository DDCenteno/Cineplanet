import { actionTypes } from '../actions/actions';

const INITIAL_STATE = {
  actualPage: 'home',
  data: [],
  movieSelect: [],
  totalAmount: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.NAVIGATION_TO:
      return { 
        ...state,
        actualPage: action.page 
      };
    case actionTypes.GET_DATA:
      return { 
        ...state,
        data: action.payload 
      }
    default:
      return state;
  }
}