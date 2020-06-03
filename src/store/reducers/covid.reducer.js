import { GET_COVID, GET_COVID_RUSSIA } from '../actions/api.actions';

export const defaultState = {
  data: [],
  russianData: []
};

export default (state = defaultState, {type, payload}) => {
    switch(type) {
        case GET_COVID:
            return {...state, data: payload};
        case GET_COVID_RUSSIA:
            return {...state, russianData: payload};
        default: 
            return state; 
    }
}
