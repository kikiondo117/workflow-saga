import { combineReducers } from "redux";
import usersReducers from "../reducers/users.action";

export default combineReducers({
  users: usersReducers
});
