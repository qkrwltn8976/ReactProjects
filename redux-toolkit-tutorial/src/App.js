import "./App.css";
import { Provider, useSelector, useDispatch } from "react-redux";
import { up } from "./counterSlice";
import store from "./store";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <button
        onClick={() => {
          dispatch(up(2));
        }}
      >
        +
      </button>{" "}
      {count}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
