import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch, getState) => {

      let user = await axios.get("https://jsonplaceholder.typicode.com/users");

      dispatch({
          type: "SET_USERS",
          users: user.data
      });
    };
};