import { ACTIVITIES,ACTIVITIES__PHOTO } from "./../actions/types";
const initialState = {
  activities: [],
  photo: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      };
    case ACTIVITIES__PHOTO:
      return {
        ...state,
        photo: action.payload
      };
    default:
      return state;
  }
}
