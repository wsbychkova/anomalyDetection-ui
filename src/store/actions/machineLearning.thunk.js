import { GET_MACHINE_LEARNING_DATA } from './api.actions';
import { Axios, Api } from '../../core';
import * as actions from './api.actions';


export const getMachineLearningData = () => async dispatch => {
    
    try {
        const response = await Axios.get(Api.covid.getMachineLearningData)
        dispatch({
            type: GET_MACHINE_LEARNING_DATA,
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
  