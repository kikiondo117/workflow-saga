import { takeEvery } from "redux-saga/effects";
import * as actions from "../actions/users.action";
// Types
import { GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../types/users.types";

function* getUsers() {
  try {
  } catch (e) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}
