import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  function increase() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrease() {
    setCount((prevCount) => prevCount - 1);
  }

  function toggleTheme() {
    console.log("han bhai fire ho gya hu mein!");
    if (dark) {
      setDark((theme) => !theme);
      return;
    }
    setDark((theme) => !theme);
  }

  //every time we are increasing and decreasing the val. it is creating new themeStyle obj and pointing to new reference
  //resulting into firing of useEffect bcz we are using themeStyle as a dependencie.
  // to resoleve this issue we will have to use useMemo function and now themeStyle obj will be changing when dark is changing.
  // hence not resulting firing of useEffect()

  // const themeStyle = {
  //   color: dark ? "white" : "black",
  //   background: dark ? "black" : "white",
  // };

  const themeStyle = useMemo(() => {
    return {
      color: dark ? "white" : "black",
      background: dark ? "black" : "white",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyle]);

  return (
    <>
      <div className="theme-toggler">
        <label>
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider">Dark</span>
        </label>
      </div>

      <div className="container">
        <button className="decreament btn" onClick={decrease}>
          -
        </button>
        <div className="display-box" style={themeStyle}>
          {count}
        </div>
        <button className="increament btn" onClick={increase}>
          +
        </button>
      </div>
    </>
  );
}
