import { SECTIONS} from "./../actions/types";
const initialState = {
  sections:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SECTIONS:
      return {
        ...state,
        sections: action.payload
      };
    default:
      return state;
  }
}
