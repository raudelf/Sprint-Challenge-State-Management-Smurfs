// Actions
import { UPDATE_SMURFS, FETCH_SMURFS, POST_SMURFS, POST_SUCCESS, ERROR } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ''
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS :
            return {
                ...state,
                smurfs: [],
                isFetching: true,
                error: ''
            }
        case UPDATE_SMURFS :
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case POST_SMURFS :
            return {
                ...state,
                isPosting: true,
                error: ''
            }
        case POST_SUCCESS :
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
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