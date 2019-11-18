import {INTERVIEWS} from '../actions/types';

const initialState = {
    interviews: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case INTERVIEWS:
            return {
                ...state,
                interviews: action.payload
            }  
        default:
            return state
    }
}