// import { legacy_createStore } from "redux";
import { applyMiddleware } from "redux";
import axios from "axios";
import logger from "redux-logger";
const { legacy_createStore, combineReducers } = require("redux");

const thunkMiddleware = require("redux-thunk").default;

const BUY_CAKE = "BUY_CAKE";
const BUY_TOPHY = "BUY_TOPHY";
const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";

function buyCake(number = 1) {
  return { type: BUY_CAKE, payload: number };
}
function buyTophy(number = 1) {
  return { type: BUY_TOPHY, payload: number };
}
const user = { loading: true, error: "", post: [] };

function fetchRequest() {
  return { type: FETCH_REQUEST };
}
function fetchSuccess(data) {
  return { type: FETCH_SUCCESS, payload: data };
}
function fetchFailure(message) {
  return { type: FETCH_FAILURE, payload: message };
}
export function fetchUser() {
  return function (dispatch) {
    dispatch(fetchRequest());
    axios
      .get("https://jsonplaceholder.typicode1.com/posts/1")
      .then(res => {
        let data = res.data.id;
        dispatch(fetchSuccess(data));
      })
      .catch(err => dispatch(fetchFailure("Error Fetching Data ")));
  };
}
const userReducer = (state = user, action) => {
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

const initialCake = { numOfCakes: 10 };

const initialTophy = { numOfTophy: 100 };

const cakeReducer = (state = initialCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { numOfCakes: state.numOfCakes - action.payload };
    default:
      return state;
  }
};
const tophyReducer = (state = initialTophy, action) => {
  switch (action.type) {
    case BUY_TOPHY:
      return { numOfTophy: state.numOfTophy - action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  tophy: tophyReducer,
  userDetails: userReducer,
});
const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

export { buyCake, store, buyTophy };
