// Actions
import { UPDATE_SMURFS, FETCH_SMURFS, ERROR } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS :
            return {
                ...state,
                smurfs: [],
                isFetching: true
            }
        case UPDATE_SMURFS :
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case ERROR :
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    };
};