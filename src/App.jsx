import { useState } from "react";
import "./App.css";

function App() {
  let [selected, setSelected] = useState(null);

  const handleSelected = (color) => {
    setSelected(color);
  };

  return (
    <>
      <div className="traffic-light">
        <div
          className={
            "circle circle-red " + (selected === "red" ? "turn-on" : "")
          }
          onClick={() => handleSelected("red")}
        ></div>
        <div
          className={
            "circle circle-orange " + (selected === "orange" ? "turn-on" : "")
          }
          onClick={() => handleSelected("orange")}
        ></div>
        <div
          className={
            "circle circle-green " + (selected === "green" ? "turn-on" : "")
          }
          onClick={() => handleSelected("green")}
        ></div>
      </div>
    </>
  );
}

export default App;
