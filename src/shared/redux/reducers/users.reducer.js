import { GET_USERS_SUCCESS } from "../types/users.types";

const INITIAL_STATE = {
  items: []
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return {
        items: action.payload.items
      };
    }
    default:
      return state;
  }
}
