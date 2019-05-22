import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UsersList = ({ users, onDeleteUser }) => (
  <ListGroup>
    {users
      .sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      })
      .map(user => {
        return (
          <ListGroupItem key={user.id}>
            <section style={{ display: "flex" }}>
              <div style={{ flexGrow: 1, margin: "auto 0" }}>{user.name}</div>
              <div>
                <Button
                  outline
                  color="danger"
                  onClick={() => onDeleteUser(user.id)}
                >
                  Delete
                </Button>
              </div>
            </section>
          </ListGroupItem>
        );
      })}
  </ListGroup>
);

export default UsersList;
