import { GET_SVM_DATA, GET_RANDOM_FOREST_DATA } from './api.actions';
import { Axios, Api } from '../../core';


export const getSvmData = () => async dispatch => {
    try {
        const response = await Axios.get(Api.covid.getSvmData)
        dispatch({
            type: GET_SVM_DATA,
            payload: response.data
        })
    } catch (error) {
        console.log("error", error);
    }
};

export const getRandomForestData = () => async dispatch => {
    try {
        const response = await Axios.get(Api.covid.getRandomForestData)
        console.log('response :>> ', response);
        dispatch({
            type: GET_RANDOM_FOREST_DATA,
            payload: response.data
        })
    } catch (error) {
        console.log("error", error);
    }
};

// export const getMatrixData = () => async (dispatch) => {
//     dispatch(actions.GET_MATRIX_DATA.request());
//     try {
//       const response = await Axios.get(Api.api.getMatrixData);
//       dispatch(actions.GET_MATRIX_DATA.success(response.data));
//     } catch (err) {
//       dispatch(actions.GET_MATRIX_DATA.failure(err));
//     }
//   };
  