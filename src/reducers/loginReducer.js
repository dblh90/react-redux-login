import { LOGIN_ACTION } from "../actions/types";

const initalState = {
  user: {},
  isLoading: false
};

export default function(state = initalState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      console.log("Login Action called");
      return {
        ...state,
        loginDetails: action.payload
      };
    default:
      return state;
  }
}
