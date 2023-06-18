import React from "react";

function Child1({ name }) {
  console.log("child-1 rend er");
  return <h3>Child - 1 {name.fname}</h3>;
}

function Child2() {
  console.log("Child 2 render");
  return <h3>Child-2</h3>;
}

const Child12 = React.memo(Child1);
const Child22 = React.memo(Child2);

export { Child12, Child22 };
