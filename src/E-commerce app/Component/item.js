import { useState, useContext, useRef } from "react";
import "../CSS/Item.css";
import { Context } from "../../App";

function Item() {
  const products = useContext(Context);
  const selected = products.selected;
  const setSelected = products.setSelected;
  const quant = products.quant;
  const setQuant = products.setQuant;

  const removeHandler = event => {
    var a =
      event.target.parentElement.parentElement.getAttribute("data-listid");

    setQuant(prev => {
      const newQuant = { ...prev };
      delete newQuant[a];
      return newQuant;
    });
    function don(item) {
      return item.id == a;
    }
    var choosed = selected.findIndex(don);
    console.log(choosed);
    setSelected(prev => prev.filter((item, i) => i !== choosed));
  };
  console.log("quant", quant);
  return (
    <>
      {selected.map((item, index) => {
        var i = item.id;
        var quantity = quant[i].quantity;
        var price = quant[i].price;
        var total = quantity * price;

        return (
          <div id="item" key={index} data-listid={item.id}>
            <div>
              <img src={item.image} />
            </div>
            <div>
              <h5>{item.title}</h5>
              <h5>{item.size} | White T-shirt</h5>
              <h5>Quantity - {quantity}</h5>
            </div>
            <div>
              <button onClick={removeHandler}>X</button>
              <h4>{total} Rs.</h4>
              <button
                onClick={() => {
                  if (quantity > 1) {
                    setQuant(prev => {
                      return {
                        ...prev,
                        [i]: {
                          quantity: quantity - 1,
                          price: price,
                        },
                      };
                    });
                  }
                }}
              >
                -
              </button>
              <button
                onClick={() => {
                  setQuant(prev => {
                    return {
                      ...prev,
                      [i]: {
                        quantity: quantity + 1,
                        price: total,
                      },
                    };
                  });
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Item;
