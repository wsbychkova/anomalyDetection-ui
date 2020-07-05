import * as actions from "./api.actions";
import { Axios, Api } from "../../core";

export const getAnomalyDetection = (data) => async (dispatch) => {
  dispatch({ type: actions.getAnomalyDetection.request });
  try {
    const response = await Axios.post(Api.covid.getAnomalyDetection, {
      data: data
    });
    dispatch({
      type: actions.getAnomalyDetection.success,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: actions.getAnomalyDetection.failure,
      payload: error,
    });
  }
};
