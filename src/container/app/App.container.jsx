import React, { useEffect } from "react";
import "./App.css";
// ! Redux
import { connect } from "react-redux";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError
} from "../../shared/redux/actions/users.action";
// ? Components
import UsersList from "../../components/users/usersList/UsersList.component";
import NewUserForm from "../../components/users/userForm/NewUserForm";
// * Styles
import { Alert } from "reactstrap";

function App({
  getUsersRequest,
  users,
  createUserRequest,
  deleteUserRequest,
  usersError
}) {
  useEffect(() => {
    getUsersRequest();
  }, []);

  const handleSubmit = ({ firstName, lastName }) => {
    createUserRequest({ firstName, lastName });
  };

  const handleDeleteUserClick = userId => {
    deleteUserRequest(userId);
  };

  const handleCloaseAlert = () => {
    usersError({
      error: ""
    });
  };

  console.log(users);
  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <Alert color="danger" isOpen={!!users.error} toggle={handleCloaseAlert}>
        {users.error}
      </Alert>
      <NewUserForm onSubmit={handleSubmit} />
      <UsersList users={users.items} onDeleteUser={handleDeleteUserClick} />
    </div>
  );
}

export default connect(
  ({ users, error }) => ({ users }),
  { getUsersRequest, createUserRequest, deleteUserRequest, usersError }
)(App);
