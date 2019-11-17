import { LEGALSPHOTO } from "../actions/types";

const initialState = {
  legalsphoto: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LEGALSPHOTO:
      return {
        ...state,
        legalsphoto: action.payload
      };
    default:
      return state;
  }
}
