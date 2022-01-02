import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Кружка" },
    { value: 0, id: 5, name: "Что-то еще" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };

  const handleIncrement = (counterId, value) => {
    const newCounters = [...counters];
    const elementIndex = newCounters.findIndex((c) => c.id === counterId);
    newCounters[elementIndex].value = value + 1;
    setCounters(newCounters);
  };

  const handleDecrement = (counterId, value) => {
    const newCounters = [...counters];
    const elementIndex = newCounters.findIndex((c) => c.id === counterId);
    newCounters[elementIndex].value = value - 1;
    if (value > 0) setCounters(newCounters);
  };

  const handleReset = () => setCounters(initialState);

  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
