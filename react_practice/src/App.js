import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Actions/Action';

function App() {
  const counter = useSelector(state => state.counter.count)
  const isLogged = useSelector(state => state.logged.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      {isLogged && <h3>Valuable Information I shouldn't see.</h3>}

      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
    </div>
  );
}

export default App;
