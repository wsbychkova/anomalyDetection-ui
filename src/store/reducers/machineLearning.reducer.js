import { GET_MACHINE_LEARNING } from '../actions/api.actions';

export const defaultState = {
  data: []
};

export default (state = defaultState, {type, payload}) => {
    switch(type) {
        case GET_MACHINE_LEARNING:
            return {...state, data: payload};
        default: 
            return state; 
    }
}
