import { REGIONS,REGION } from "../actions/types";

const initialState = {
  regions: [],
  region: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGIONS:
      return {
        ...state,
        regions: action.payload
      };
    case REGION:
      return {
        ...state,
        region: action.payload
      };
    default:
      return state;
  }
}
