import { GET_MATRIX_DATA } from '../actions/api.actions';

export const defaultState = {
  matrixData: []
};

export default (state = defaultState, {type, payload}) => {
    switch(type) {
        case GET_MATRIX_DATA:
            return {...state, matrixData: payload};
        default: 
            return state; 
    }
}
