import React from "react";
import { useState, useCallback, useMemo } from "react";
import List from "./components/List";

// When a component's state or props change, React triggers a re-render of that component and its children.
// This cascades through the component hierarchy until the entire UI is updated.
// By default, when a component re-renders, React re-renders all of its children recursively

// In this example everytime we are updating states in App() component is re-rendering thus recreating getitems() function on each render
// this thing also happens when we are bring data from an API (similar kind of issue can be seen their as well api will bring data
// agian and agian bcz component is re-rendering)]]]

// In JavaScript, a function () {} or () => {} always creates a different function, similar to how the {} object literal always creates a new object.

//but here we want to call getItems() only when number state is updating. so, this was our problem statement
// SOLUTION: we can use useCallback( fn, dependencies ) hook

// useMemo: Returns and stores the calculated value of a function in a variable
// useCallBack: Returns and stores the actual function itself in a variable

export default function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // function getItems() {
  //   return [number, number + 1, number + 2];
  // }

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div className="container">
      <div className="sub-container-01 ">
        <input
          type="number"
          className="input-number"
          value={number}
          onChange={(e) => {
            setNumber(parseInt(e.target.value));
          }}
        />
      </div>
      <div className="sub-container-02">
        <button className="toggle-btn" onClick={() => setDark((prev) => !prev)}>
          Toggle Theme
        </button>
      </div>
      <div className="sub-container-03" style={theme}>
        <List getItems={getItems} />
      </div>
    </div>
  );
}
