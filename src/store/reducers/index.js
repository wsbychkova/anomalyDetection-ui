import { combineReducers } from 'redux';
import machineLearningReducer from './machineLearning.reducer';

/**
 * Root reducer combines all reducers of the app
 */
const rootReducer = combineReducers({
  machineLearning: machineLearningReducer,
});

export default rootReducer;
