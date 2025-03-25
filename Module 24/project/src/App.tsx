import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelectior } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelectior((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Counter with Redux</h1>
      <button onClick={handleIncrement}>increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
