import React, { useContext } from "react";
import "../CSS/Sorting.css";
import { Context } from "../../App";

function SortingDiv() {
  const filter = useContext(Context);
  const setFilter = filter.setFilter;

  return (
    <div id="sorting">
      <h3>Sizes:</h3>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("xs")}>XS</button>
        <button onClick={() => setFilter("s")}>S</button>
        <button onClick={() => setFilter("m")}>M</button>
        <button onClick={() => setFilter("ml")}>ML</button>
        <button onClick={() => setFilter("l")}>L</button>
        <button onClick={() => setFilter("xl")}>XL</button>
        <button onClick={() => setFilter("xxl")}>XXL</button>
      </div>
      <h4>Leave a star on Github if this repository was useful</h4>
    </div>
  );
}
export default SortingDiv;
