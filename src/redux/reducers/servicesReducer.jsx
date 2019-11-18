import { SERVICES } from "../actions/types";

const initialState = {
    services: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SERVICES:
            return {
                ...state,
                services: action.payload
            };
        default:
            return state;
    }
}
