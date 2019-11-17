import { LEGALS } from "../actions/types";

const initialState = {
  legals: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LEGALS:
      return {
        ...state,
        legals: action.payload
      };
    default:
      return state;
  }
}
