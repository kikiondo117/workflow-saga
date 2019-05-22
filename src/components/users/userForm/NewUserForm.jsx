import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function NewUserForm({ onSubmit }) {
  const firstName = useInput("");
  const lastName = useInput("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      firstName: firstName.props.value,
      lastName: lastName.props.value
    });
    firstName.clear();
    lastName.clear();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>First Name</Label>
        <Input placeholder="FisrtName" name="fisrtName" {...firstName.props} />
        <Label>Last Name</Label>
        <Input placeholder="Lastname" name="lastName" {...lastName.props} />
        <Button block outline type="submit" color="primary">
          Create
        </Button>
      </FormGroup>
    </Form>
  );
}

function useInput(initialState) {
  const [value, setValue] = useState(initialState);

  function onChangeHandler(e) {
    setValue(e.target.value);
  }

  function clear() {
    setValue("");
  }

  return {
    props: {
      value,
      onChange: onChangeHandler
    },
    clear
  };
}

export default NewUserForm;
