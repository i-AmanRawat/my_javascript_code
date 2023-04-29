import "./App.css";
import { useState } from "react";

export default function App() {
  // let x = 3;
  const [count, setCount] = useState(0);
  const [prevNo, setPrevNo] = useState(0);

  function increase() {
    setCount((prevCount) => prevCount + 1);
    // x = 4;
    setPrevNo(() => count);
  }
  function decrease() {
    setCount((prevCount) => prevCount - 1);
    // x = 5;
    setPrevNo(() => count);
  }
  // console.log(x);
  return (
    <div className="container">
      <button className="decreament btn" onClick={decrease}>
        -
      </button>
      <div className="display">{count}</div>
      <button className="increament btn" onClick={increase}>
        +
      </button>
      <div className="display2">{prevNo}</div>
    </div>
  );
}
