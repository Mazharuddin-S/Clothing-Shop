import { BUY_ICECREAM } from "./IceCreamType";

const initialIceCreamState = {
  numOfIceCream: 30,
};

const IceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default IceCreamReducer;
