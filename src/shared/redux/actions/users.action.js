import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  CREATE_USER_REQUEST,
  DELETE_USER_REQUEST,
  USERS_ERROR
} from "../types/users.types";

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST
});

export const getUsersSuccess = ({ items }) => ({
  type: GET_USERS_SUCCESS,
  payload: { items }
});

export const createUserRequest = ({ firstName, lastName }) => ({
  type: CREATE_USER_REQUEST,
  payload: {
    firstName,
    lastName
  }
});

export const deleteUserRequest = userId => ({
  type: DELETE_USER_REQUEST,
  payload: {
    userId
  }
});

export const usersError = ({ error }) => ({
  type: USERS_ERROR,
  payload: { error }
});
