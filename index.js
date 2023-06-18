const axios = require("axios");
const { applyMiddleware, legacy_createStore } = require("redux");
const thunkMiddleware = require("redux-thunk").default;

const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

const initialState = {
  loading: true,
  error: "",
  post: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { loading: true, error: "", post: [] };
    case FETCH_SUCCESS:
      return { loading: false, error: "", post: action.payload };
    case FETCH_FAILURE:
      return { loading: false, error: action.payload, post: [] };
    default:
      return state;
  }
};

function fetchRequest() {
  return { type: FETCH_REQUEST };
}
function fetchSuccess(response) {
  return { type: FETCH_SUCCESS, payload: response };
}
function fetchFailure(error) {
  return { type: FETCH_FAILURE, payload: error };
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        const users = res.data.map(user => user.id);
        dispatch(fetchSuccess(users));
      })
      .catch(err => dispatch(fetchFailure("Error Fetching DAta")));
  };
};
const store = legacy_createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
