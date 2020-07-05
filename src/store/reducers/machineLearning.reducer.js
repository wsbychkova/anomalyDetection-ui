import * as actions from "../actions/api.actions";

export const defaultState = {
  data: null,
  loading: false,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.getAnomalyDetection.request:
      return {
        ...state,
        loading: true,
      };
    case actions.getAnomalyDetection.success:
      console.log('action.payload :>> ', action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case actions.getAnomalyDetection.failure:
      return {
        ...state,
        error: action.error,
        loading: true,
      };
    default:
      return state;
  }
};
