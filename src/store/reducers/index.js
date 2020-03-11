import { combineReducers } from 'redux';
import covidReducer from './covid.reducer';

/**
 * Root reducer combines all reducers of the app
 */
const rootReducer = combineReducers({
  covid: covidReducer
});

export default rootReducer;
