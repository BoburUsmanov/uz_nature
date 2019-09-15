import {COMITET } from '../actions/types';

const initialState = {
   persons:[]
}


export default function (state = initialState, action) {
    switch (action.type) {
        case COMITET:
            return {
                ...state,
                persons: action.payload
            }    
        default:
            return state
    }
}