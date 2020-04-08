
import { GET_REGRESSION } from './api.actions';
import { Axios, Api } from '../../core';

export const getRegression = () => async dispatch => {
    
    try {
        const response = await Axios.get(Api.covid.getRegression)
        dispatch({
            type: GET_REGRESSION,
            payload: response.data
        })
    } catch (error) {
        console.log("error", error);
    }
};