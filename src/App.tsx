import { Button, ButtonGroup, Typography, Box } from '@mui/material';
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
        <Typography textAlign="center" variant="h1">
          Tap Counter
        </Typography>
      </header>
      <Box
        component="main"
        sx={{
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Counter count={count} />
        <ButtonGroup>
          <Button variant="contained" onClick={increaseCountHandler}>
            Tap
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={resetCountHandler}
            disabled={count == 0}
          >
            Reset
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default App;
