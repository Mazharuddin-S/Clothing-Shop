import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../Redux/Cake/IceCream/IceCreamAction";
function IceCreamContainer(props) {
  return (
    <div>
      <h3>numOfIceCream - {props.numOfIceCream}</h3>
      <button onClick={() => props.buyIceCream()}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
