import React, { useState } from "react";

import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 0, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Кружка" },
    { value: 0, id: 5, name: "Что-то еще" },
  ];
  const [counters, setCounters] = useState(initialState);
  console.log("counters", counters);

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
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
