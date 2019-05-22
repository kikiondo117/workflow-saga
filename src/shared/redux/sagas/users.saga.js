import {
  takeEvery,
  takeLatest,
  call,
  fork,
  put,
  take
} from "redux-saga/effects";
// ? Types
import {
  GET_USERS_REQUEST,
  CREATE_USER_REQUEST,
  DELETE_USER_REQUEST
} from "../types/users.types";
import * as actions from "../actions/users.action";
import * as api from "../../../api/users.api";

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    // Tenemos que hacer un dispatch del succes del redux action
    yield put(actions.getUsersSuccess({ items: result.data }));
  } catch (e) {
    yield put(
      actions.usersError({
        error: "An error occurred when trying to get the users"
      })
    );
  }
}

function* createUser(action) {
  try {
    yield call(api.createUser, {
      fisrtName: action.payload.fisrtName,
      lastName: action.payload.lastName
    });
    yield call(getUsers);
  } catch (e) {
    yield put(
      actions.usersError({
        error: "An error occurred when trying to create the user"
      })
    );
  }
}

function* deleteUser(userId) {
  try {
    yield call(api.deleteUser, userId);
    yield call(getUsers);
  } catch (e) {
    yield put(
      actions.usersError({
        error: "An error occurred when trying to delete the user"
      })
    );
  }
}

// ! Watcher recordando que son los que manejan los effects
function* watchGetUsersRequest() {
  yield takeEvery(GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest() {
  yield takeLatest(CREATE_USER_REQUEST, createUser);
}

function* watchDeleteUserRequest() {
  while (true) {
    // Con la informacion del dispatch action podemos usar el yield call
    // para llamar el worker saga
    const action = yield take(DELETE_USER_REQUEST);
    yield call(deleteUser, { userId: action.payload.userId });
  }
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest)
];

export default usersSagas;
