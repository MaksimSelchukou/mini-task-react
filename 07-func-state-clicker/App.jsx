import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  const incCounter = () => {
    setCounter(counter + 1);
  }

  const decrCounter = () => {
    setCounter(counter - 1);
  }


  return (
    <div className="App">
      <div>Counter:{counter}</div>
      <button onClick={incCounter}>Inc</button>
      <button onClick={decrCounter}>Decr</button>
    </div>
  );
}

export default App;
