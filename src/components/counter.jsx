import React, { useState } from "react";

const Counter = (props) => {
  console.log(props);
  const [value, setValue] = useState(props.value);

  const formValue = () => {
    return value === 0 ? "Ноль" : value;
  };
  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <h4>{props.name}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={() => handleIncrement()}
        className="btn btn-secondary btn-sm m-1"
      >
        Increment
      </button>
      <button
        onClick={() => handleDecrement()}
        className="btn btn-secondary btn-sm m-1"
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
