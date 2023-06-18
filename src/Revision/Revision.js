import React, { useState } from "react";
import { buyCake, buyTophy, fetchUser } from "./Context";
import { connect, useDispatch, useSelector } from "react-redux";

export function Ordinary() {
  return (
    <div id="ordinary">
      <h3>
        THis is background testsing
        <button className="btn btn-danger">this is React button</button>
      </h3>
    </div>
  );
}
export function FetchData() {
  const user = useSelector(state => state.userDetails);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>
        {user.id}-- {user.error}
      </h3>
      <button onClick={() => dispatch(fetchUser())}>Fetch user details</button>
    </div>
  );
}
export function HookContainer() {
  const [number, setNumber] = useState(1);
  const state = useSelector(state => state);
  let numOfCakes = state.cake.numOfCakes;
  let numOfTophy = state.tophy.numOfTophy;
  const dispatch = useDispatch();

  return (
    <div>
      Num Of Hook Cakes - {numOfCakes} - {numOfTophy} <br />
      <input
        type="text"
        onChange={e => setNumber(e.target.value)}
        value={number}
      />
      <button
        onClick={() => {
          dispatch(buyCake(number));
          console.log(state);
        }}
      >
        Buy Hook Cakes
      </button>
    </div>
  );
}

function CakeContainer(props) {
  const { numOfCakes, buyCake, buyTophy, numOfTophy, state, name1 } = props;
  return (
    <div>
      Number of Cakes - {numOfCakes} <br />
      Number of Tophy - {numOfTophy}
      <br />
      <button onClick={buyCake}>Buy Cake {name1}</button>
      <button onClick={buyTophy}>Buy Tophy</button>
      <button onClick={() => console.log(state)}>state </button>
    </div>
  );
}

const connectDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyTophy: () => dispatch(buyTophy()),
  };
};

const connectStateToProps = (state, ownprops) => {
  let name1 = ownprops.name;
  return {
    name1: name1,
    numOfCakes: state.cake.numOfCakes,
    numOfTophy: state.tophy.numOfTophy,
    state: state,
  };
};

export default connect(
  connectStateToProps,
  connectDispatchToProps
)(CakeContainer);
