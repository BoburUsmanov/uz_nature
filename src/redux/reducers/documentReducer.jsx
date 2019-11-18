import { DOCUMENTS} from "../actions/types";

const initialState = {
    documents: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case DOCUMENTS:
            return {
                ...state,
                documents: action.payload
            };
        default:
            return state;
    }
}
