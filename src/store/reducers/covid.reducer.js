import { GET_COVID } from '../actions/covid.actions';

export const defaultState = {
  data: []
};

export default (state = defaultState, {type, payload}) => {
    switch(type) {
        case GET_COVID:
            return {...state, data: payload};
        default: 
            return state; 
    }
}
