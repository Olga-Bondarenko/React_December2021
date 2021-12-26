import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };
  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const handleIncrement = (productId) => {
    console.log("productId", productId);
    setCount(count + 1);
  };

  return (
    <>
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement(1)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
    </>
  );
};

export default Counter;
