import { ECONOMICS } from "../actions/types";

const initialState = {
    economics: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ECONOMICS:
            return {
                ...state,
                economics: action.payload
            };
        default:
            return state;
    }
}
