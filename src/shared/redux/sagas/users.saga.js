import { takeEvery, call, fork, put } from "redux-saga/effects";
// Types
import { GET_USERS_REQUEST } from "../types/users.types";
import * as actions from "../actions/users.action";
import * as api from "../../../api/users.api";

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    // Tenemos que hacer un dispatch del succes del redux action
    yield put(actions.getUsersSuccess({ items: result.data }));
  } catch (e) {}
}

// Watcher recordando que son los que manejan los effects
function* watchGetUsersRequest() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}

const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
