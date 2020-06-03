import { GET_COVID, GET_COVID_RUSSIA } from './api.actions';
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

export const getCovidRussian = () => async dispatch => {
    
    try {
        const response = await Axios.get(Api.covid.getCovidRussianData)
        dispatch({
            type: GET_COVID_RUSSIA,
            payload: response.data
        })
    } catch (error) {
        console.log("error", error);
    }
};