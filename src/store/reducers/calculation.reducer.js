import { GET_REGRESSION } from '../actions/api.actions';

export const defaultState = {
  data: []
};

export default (state = defaultState, {type, payload}) => {
    switch(type) {
        case GET_REGRESSION:
            return {...state, data: payload};
        default: 
            return state; 
    }
}
