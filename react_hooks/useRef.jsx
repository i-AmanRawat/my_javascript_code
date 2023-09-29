import "./App.css";
import { useRef } from "react"; //useRef is a React Hook that lets you reference a value that’s not needed for rendering.

export default function App() {
  const inputRef = useRef(null); //
  function handleButtonClick() {
    inputRef.current.focus(); // By accessing the current property of the inputRef, we can access the actual DOM node
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button className="focus-on-input" onClick={handleButtonClick}>
        FocusOnInput
      </button>
    </>
  );
}
