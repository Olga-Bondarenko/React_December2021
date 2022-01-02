import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Кружка" },
    { value: 0, id: 5, name: "Что-то еще" },
  ]);

  const handleDelete = (counterId) => {
    console.log("handleDelete", counterId);
    const newCounter = counters.filter((c) => c.id !== counterId);
    setCounters(newCounter);
  };
  return (
    <div>
      {counters.map((counter) => (
        <Counter key={counter.id} onDelete={handleDelete} {...counter} />
      ))}
    </div>
  );
};

export default Counters;
