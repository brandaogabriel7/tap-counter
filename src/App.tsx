import { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCountHandler = () => {
    setCount(count + 1);
  };

  return (
    <>
      <header>
        <h1>Tap Counter</h1>
        <main>
          <Counter count={count} />
          <button onClick={increaseCountHandler}>Tap</button>
        </main>
      </header>
    </>
  );
};

export default App;
