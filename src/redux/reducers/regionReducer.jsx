import {FIND__REGION,CHANGE__REGION__ID } from '../actions/types';

const initialState = {
    region: [],
    id:6
}


export default function (state = initialState, action) {
    switch (action.type) {
        case FIND__REGION:
            return {
                ...state,
                region: action.payload
            }
        case  CHANGE__REGION__ID:
            return{
                ...state,
                id:action.payload
            }   
        default:
            return state
    }
}