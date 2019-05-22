import { GET_USERS_SUCCESS, USERS_ERROR } from "../types/users.types";

const INITIAL_STATE = {
  items: [],
  error: ""
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        items: action.payload.items
      };
    }
    case USERS_ERROR: {
      return {
        ...state,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
}
