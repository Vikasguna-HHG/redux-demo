import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{myState}</h1>
      <button onClick={() => dispatch(decNumber())}>-</button>{" "}
      <button onClick={() => dispatch(incNumber())}>+</button>
    </div>
  );
}

export default App;
