import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  return (
    <>
      <span
        style={{ fontSize: 10, fontWeight: "bold" }}
        className="badge bg-primary m-2"
      >
        {formCount()}
      </span>
      <button className="btn btn-secondary btn-sm">Increment </button>
    </>
  );
};

export default Counter;
