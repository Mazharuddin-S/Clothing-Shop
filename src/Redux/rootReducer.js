import { combineReducers } from "redux";
import cakeReducer from "./Cake/Cake/CakeReducer";
import IceCreamReducer from "./Cake/IceCream/IceCreamReducer";
import { userReducer } from "./User/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
  user: userReducer,
});

export default rootReducer;
