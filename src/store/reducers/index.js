import { combineReducers } from 'redux';
import covidReducer from './covid.reducer';
import matrixReducer from './matrix.reducer';

/**
 * Root reducer combines all reducers of the app
 */
const rootReducer = combineReducers({
  covid: covidReducer,
  matrix: matrixReducer
});

export default rootReducer;
