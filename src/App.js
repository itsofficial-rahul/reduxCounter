import React from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Decriment, Inciment } from "./redux/action/Incriment";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.Reducer.count);

  return (
    <div className="App">
      <h2>count : - {count}</h2>
      <button onClick={() => dispatch(Inciment())}>Inciment</button>
      <button onClick={() => dispatch(Decriment())}>Decriment</button>
    </div>
  );
}

export default App;
