import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userActionType";

export const FetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const FetchUserSuccess = userData => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: userData,
  };
};

export const FetchUserFailure = errorMessage => {
  return {
    type: FETCH_USER_FAILURE,
    payload: errorMessage,
  };
};
