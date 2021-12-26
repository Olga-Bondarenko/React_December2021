import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const tags = ["tag1", "tag2", "tag3"];

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };
  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button className="btn btn-secondary btn-sm">Increment </button>
    </>
  );
};

export default Counter;
