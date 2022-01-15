import './App.css';
import Counter from './components/Counter/Counter';

const App = () => (
  <>
    <header>
      <h1>Tap Counter</h1>
      <Counter count={0} />
    </header>
  </>
);

export default App;
