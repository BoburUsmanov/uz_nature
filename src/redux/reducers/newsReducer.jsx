import {NEWSS} from '../actions/types';

const initialState = {
    news: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case NEWSS:
            return {
                ...state,
                news: action.payload
            }  
        default:
            return state
    }
}