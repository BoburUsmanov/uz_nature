import {ALL__EVENTS,SINGLE__EVENT } from '../actions/types';

const initialState = {
    events: [],
    event: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case ALL__EVENTS:
            return {
                ...state,
                events: action.payload
            }
        case SINGLE__EVENT:
            return{
                ...state,
                event:action.payload
            }    
        default:
            return state
    }
}