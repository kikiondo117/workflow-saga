import React, { useEffect } from "react";
import "./App.css";
// ! Redux
import { connect } from "react-redux";
import { getUsersRequest } from "../../shared/redux/actions/users.action";

function App({ getUsersRequest, users }) {
  useEffect(() => {
    getUsersRequest();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hola mundo desde sagas</p>
        {users.items.map((user, index) => (
          <p key={index}>{user.name}</p>
        ))}
      </header>
    </div>
  );
}

export default connect(
  ({ users }) => ({ users }),
  { getUsersRequest }
)(App);
