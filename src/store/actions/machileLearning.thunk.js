import { GET_MACHINE_LEARNING } from './api.actions';
import { Axios, Api } from '../../core';

export const getMachineLearning = () => async dispatch => {
    
    try {
        const response = await Axios.get(Api.covid.getMachineLearning)
        dispatch({
            type: GET_MACHINE_LEARNING,
            payload: response.data
        })
    } catch (error) {
        console.log("error", error);
    }
};
