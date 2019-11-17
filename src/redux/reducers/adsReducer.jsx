import { ADS } from "../actions/types";
import { ADSPHOTO } from "../actions/types";

const initialState = {
  ads: [],
  adsphoto: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADS:
      return {
        ...state,
        ads: action.payload
      };
    case ADSPHOTO:
    return {
        ...state,
        adsphoto: action.payload
    };
    default:
      return state;
  }
}
