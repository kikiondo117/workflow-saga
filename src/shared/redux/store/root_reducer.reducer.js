import { combineReducers } from "redux";
import usersReducers from "../reducers/users.reducer";

export default combineReducers({
  users: usersReducers
});
