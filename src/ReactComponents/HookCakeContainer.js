import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../Redux/Cake/Cake/CakeAction";
function HookCakeContainer() {
  let numOfCakes = useSelector(state => state.cake.numOfCakes);
  let dispatch = useDispatch();
  return (
    <div>
      <h3>HookContainer--numOfCakes - {numOfCakes}</h3>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HookCakeContainer;
