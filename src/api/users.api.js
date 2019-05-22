import axios from "axios";

export const getUsers = () => {
  return axios.get("/users", {
    params: {
      limit: 1000
    }
  });
};

// No funciona por la api que estoy utilizando
export const createUser = ({ fisrtName, lastName }) => {
  return axios.post("/users", {
    fisrtName,
    lastName
  });
};

export const deleteUser = userId => {
  return axios.delete(`/users/${userId}`);
};
