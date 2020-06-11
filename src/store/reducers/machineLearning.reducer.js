import { GET_MACHINE_LEARNING_DATA } from '../actions/api.actions';

export const defaultState = {
  data: {
    resultData: [],
    msg: {}
  }
};

export default (state = defaultState, {type, payload}) => {
    switch(type) {
        case GET_MACHINE_LEARNING_DATA:
            return {...state, data: payload};
        default: 
            return state; 
    }
}
