import { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCountHandler = () => {
    setCount(count + 1);
  };

  const resetCountHandler = () => {
    setCount(0);
  };

  return (
    <>
      <header>
        <h1>Tap Counter</h1>
        <main>
          <Counter count={count} />
          <button onClick={increaseCountHandler}>Tap</button>
          <button onClick={resetCountHandler} disabled={count == 0}>
            Reset
          </button>
        </main>
      </header>
    </>
  );
};

export default App;
