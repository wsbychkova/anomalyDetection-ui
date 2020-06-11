import { combineReducers } from 'redux';
import covidReducer from './covid.reducer';
import matrixReducer from './matrix.reducer';
import calculationReducer from './calculation.reducer';
import machineLearningReducer from './machineLearning.reducer';

/**
 * Root reducer combines all reducers of the app
 */
const rootReducer = combineReducers({
  covid: covidReducer,
  matrix: matrixReducer,
  calculation: calculationReducer,
  machineLearning: machineLearningReducer,
});

export default rootReducer;
