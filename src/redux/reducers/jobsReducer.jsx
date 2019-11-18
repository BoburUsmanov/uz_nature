import {JOBS} from '../actions/types';

const initialState = {
    jobs: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case JOBS:
            return {
                ...state,
                interviews: action.payload
            }  
        default:
            return state
    }
}