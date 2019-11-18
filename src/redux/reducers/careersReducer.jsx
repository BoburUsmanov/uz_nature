import {CAREERS} from '../actions/types';

const initialState = {
    careers: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case CAREERS:
            return {
                ...state,
                careers: action.payload
            }  
        default:
            return state
    }
}