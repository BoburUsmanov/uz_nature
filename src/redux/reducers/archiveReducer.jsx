import { ARCHIVES } from "../actions/types";

const initialState = {
    archives: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ARCHIVES:
            return {
                ...state,
                archives: action.payload
            };
        default:
            return state;
    }
}
