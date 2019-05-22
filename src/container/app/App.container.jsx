import React, { useEffect } from "react";
import "./App.css";
// ! Redux
import { connect } from "react-redux";
import { getUsersRequest } from "../../shared/redux/actions/users.action";
// ? Components
import UsersList from "../../components/users/usersList/UsersList.component";
import NewUserForm from "../../components/users/userForm/NewUserForm";

function App({ getUsersRequest, users }) {
  useEffect(() => {
    getUsersRequest();
  }, []);

  const handleSubmit = ({ firstName, lastName }) => {
    console.log(firstName, lastName);
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <NewUserForm onSubmit={handleSubmit} />
      <UsersList users={users.items} />
    </div>
  );
}

export default connect(
  ({ users }) => ({ users }),
  { getUsersRequest }
)(App);
