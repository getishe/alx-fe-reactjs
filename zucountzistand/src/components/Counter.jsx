import useCounterStore from "../store/useCounterStore";

function Counter() {
  const { count, incrementAsync, decrement, reset } = useCounterStore();

  return (
    //   <div className="flex items-center justify-center"\>
    <div>
      <span>{count}</span>

      <button onClick={incrementAsync}>IncrementAsync</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
