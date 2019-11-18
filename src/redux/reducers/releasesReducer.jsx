import { RELEASES } from "../actions/types";

const initialState = {
    releases: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case RELEASES:
            return {
                ...state,
                releases: action.payload
            };
        default:
            return state;
    }
}
