import React, { useContext, useEffect, useState, useCallback } from "react";
import "../CSS/Product.css";

import { Context } from "../../App";
import Item from "./item";

function ProductParent() {
  const filter = useContext(Context);
  const product = filter.product;
  const filterValue = filter.filter;
  const [found, setFound] = useState(0);

  useEffect(() => {
    setFound(0);
    product.map(item => {
      if (item.size === filterValue) {
        setFound(prev => prev + 1);
      } else if (filterValue === "all") {
        setFound(product.length);
      }
    });
  }, [filterValue]);
  return (
    <div id="productParent">
      <h4>{found} Product(s) found</h4>
      <Product filter={filterValue} setFound={setFound} />
    </div>
  );
}

function Product({ filter, setFound }) {
  const products = useContext(Context);
  const product = products.product;
  const setProduct = products.setProduct;
  const selected = products.selected;
  const setSelected = products.setSelected;
  const quant = products.quant;
  const setQuant = products.setQuant;

  const addToCart = event => {
    const parent = event.target.parentElement.getAttribute("data-listid");
    product.map(item => {
      var a = selected.some(choose => {
        return choose.id == parent;
      });

      if (a) {
        console.log("already selected");
      } else if (parent == item.id) {
        setQuant(prev => {
          return {
            [parent]: { quantity: item.quantity, price: item.price },
            ...prev,
          };
        });
        setSelected(prev => {
          return [item, ...prev];
        });
      }
    });
    document.getElementById("cart").style.right = "0%";
  };

  console.log("selected", selected);
  return (
    <div id="productGrid">
      {product.map((item, index) => {
        if (item.size === filter) {
          return (
            <div
              id="product"
              className="flex-col"
              key={index}
              data-listid={item.id}
            >
              <img src={item.image} alt="image not found" />
              <h4>
                {item.title} -- {item.size}
              </h4>
              <h4>{item.price} - Rs.</h4>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          );
        } else if (filter === "all") {
          return (
            <div
              id="product"
              className="flex-col"
              key={index}
              data-listid={item.id}
            >
              <img src={item.image} alt="image not found" />
              <h4>
                {item.title}--{item.size}
              </h4>
              <h4>{item.price} - Rs.</h4>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          );
        }
      })}
    </div>
  );
}

export default ProductParent;
