import {PHOTOS,PHOTOSS} from '../actions/types';

const initialState = {
    photos: [],
    photoss: []
}


export default function (state = initialState, action) {
    switch (action.type) {
        case PHOTOS:
            return {
                ...state,
                photos: action.payload
            }  
        case PHOTOSS:
            return {
                ...state,
                photoss: action.payload
            }  
        default:
            return state
    }
}