import { GET_SVM_DATA, GET_RANDOM_FOREST_DATA } from '../actions/api.actions';

export const defaultState = {
  svmData: {
    resultData: [],
    msg: {}
  },
  randomForestData: {
    resultData: [],
    msg: {}
  },
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_SVM_DATA:
      return { ...state, data: payload };
    case GET_RANDOM_FOREST_DATA:
      return { ...state, randomForestData: payload };
    default:
      return state;
  }
}
