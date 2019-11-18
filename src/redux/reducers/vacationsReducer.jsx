import { VACATIONS } from "../actions/types";

const initialState = {
    vacations: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case VACATIONS:
            return {
                ...state,
                vacations: action.payload
            };
        default:
            return state;
    }
}
