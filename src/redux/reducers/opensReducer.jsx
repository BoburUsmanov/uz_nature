import { OPENS } from "../actions/types";

const initialState = {
    opens: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case OPENS:
            return {
                ...state,
                opens: action.payload
            };
        default:
            return state;
    }
}
