import axios from "axios";
import {
  FetchUserFailure,
  FetchUserRequest,
  FetchUserSuccess,
} from "./userAction";

export function fetchUser() {
  return function (dispatch) {
    dispatch(FetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        let userData = response.data;
        dispatch(FetchUserSuccess(userData));
      })
      .catch(error => {
        let errorMessage = error.message;
        dispatch(FetchUserFailure(errorMessage));
      });
  };
}
