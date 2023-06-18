import { useEffect, useRef, useState } from "react";

export function Reference() {
  const intervalRef = useRef(null);
  const countRef = useRef(5);
  const [ref, setRef] = useState(10);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      countRef.current -= 1;
      if (countRef.current === 0) {
        clearInterval(intervalRef.current);
      }
      console.log(countRef.current);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  console.log("compoenent render", ref);

  return (
    <div>
      <h4>Count value - {countRef.current}</h4>
    </div>
  );
}
