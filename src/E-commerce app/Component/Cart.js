import React, { useContext, useEffect, useState } from "react";
import "../CSS/Cart.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../App";
import Item from "./item";

const cartClose = event => {
  event.target.parentElement.style.right = "-30%";
  event.target.style.display = "none";
  event.target.nextElementSibling.style.display = "block";
};
const cartOpen = event => {
  event.target.parentElement.style.right = "0px";
  event.target.style.display = "none";
  event.target.previousElementSibling.style.display = "block";
};

function Cart() {
  const products = useContext(Context);
  const selected = products.selected;
  const setSelected = products.setSelected;
  const quant = products.quant;
  const setQuant = products.setQuant;
  const [grandTotal, setGrandTotal] = useState(0);
  const [totalQuant, setTotalQuant] = useState(0);

  useEffect(() => {
    function totalSum() {
      var total = 0;
      var totalQuant = 0;
      for (var i in quant) {
        var total = quant[i].quantity * quant[i].price + total;
        var totalQuant = quant[i].quantity + totalQuant;
        total = Math.floor(total);
      }
      setGrandTotal(total);
      setTotalQuant(totalQuant);
    }
    totalSum();
  }, [quant]);

  return (
    <div id="cart">
      <button onClick={cartClose} id="closeBtn">
        X
      </button>
      <button onClick={cartOpen} id="openBtn">
        <span>{totalQuant}</span>
        <FontAwesomeIcon icon={faCartShopping} size="lg" />
      </button>

      <div id="selected">
        <h4>
          Cart Logo
          <FontAwesomeIcon icon={faCartShopping} size="xl" /> {totalQuant}
        </h4>
        <div id="itemsSelected">
          <Item />
        </div>
      </div>

      <div id="subtotal">
        <div>
          <h3>Subtotal</h3>
          <h3>{grandTotal} Rs.</h3>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}

export default Cart;
