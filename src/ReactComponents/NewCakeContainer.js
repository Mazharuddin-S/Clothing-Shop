import { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../Redux/Cake/Cake/CakeAction";

function NewCakeContainer({ numOfCakes, buyCake }) {
  let [number, setNumber] = useState(null);
  return (
    <div>
      <h3>New Cake Container - total {numOfCakes}</h3>
      <label>Type Quantity</label>
      <input
        type="text"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={() => buyCake(number)}>Buy {number} Cakes</button>
      <h4>You Bought - {number} - cakes</h4>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  const returnedState = ownProps.newCake
    ? state.cake.numOfCakes
    : alert("Dont have any Props");
  return { numOfCakes: returnedState };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyCake: number => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
