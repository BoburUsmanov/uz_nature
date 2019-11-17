import { TENDERS } from "../actions/types";
import { TENDERSPHOTO } from "../actions/types";

const initialState = {
    tenders: [],
    tendersphoto: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case TENDERS:
            return {
                ...state,
                tenders: action.payload
            };
        case TENDERSPHOTO:
            return {
                ...state,
                tendersphoto: action.payload
            };
        default:
            return state;
    }
}
