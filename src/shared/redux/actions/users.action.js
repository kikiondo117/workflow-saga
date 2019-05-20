import { GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../types/users.types";

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST
});

export const getUsersSuccess = ({ items }) => ({
  type: GET_USERS_SUCCESS,
  payload: { items }
});
