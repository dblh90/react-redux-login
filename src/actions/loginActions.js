import { LOGIN_ACTION } from "./types";

export const login = user => dispatch => {
  console.log(JSON.stringify(user));
  dispatch({
    type: LOGIN_ACTION,
    payload: {
      user: user,
      isLoading: true
    }
  });
};
