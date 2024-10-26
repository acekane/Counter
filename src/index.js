import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  function handlePrevious() {
    if(count>0)setCount(count - 1);
  }
  function handleNext() {
    setCount(count + 1);
  }
   function handleReset() {
     setCount(0);
   }
  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={handlePrevious}>Prev</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
