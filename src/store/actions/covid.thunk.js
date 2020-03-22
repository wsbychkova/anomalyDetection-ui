import { GET_COVID } from './api.actions';
import { Axios, Api } from '../../core';

export const getCovid = () => async dispatch => {
    
    try {
        const response = await Axios.get(Api.covid.getCOVIData)
        dispatch({
            type: GET_COVID,
            payload: response.data
        })
    } catch (error) {
        console.log("error", error);
    }
};