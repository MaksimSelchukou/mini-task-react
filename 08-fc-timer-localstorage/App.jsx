import React, { useEffect, useRef, useState } from 'react';
import Timer from './components/Timer';


// function setDefaultValue() {
//   const userCount = localStorage.getItem('count');
//   return userCount ? +userCount : 0;
// }
function App() {

  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <h1>React APP</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle Timer</button>
      {toggle ? <Timer /> : ""}
      {/* <Timer /> */}
    </div>
  )
  //   const [count, setCount] = useState(setDefaultValue());
  //   const [isCounting, setCounting] = useState(false);
  //   const timerIdRef = useRef(null);
  //   console.log('render (отрендерился)');

  //   const handleReset = () => {
  //     setCount(0);
  //     setCounting(false)
  //   }

  //   const startCount = () => {
  //     setCounting(true);
  //   }

  //   const stopCount = () => {
  //     setCounting(false);
  //   }

  //   useEffect(() => {
  //     console.log('update (обновилась)');
  //     localStorage.setItem('count', count);
  //   }, [count]);

  //   useEffect(() => {
  //     if (isCounting) {
  //       timerIdRef.current = setInterval(() => {
  //         setCount((prevCount) => prevCount + 1)
  //       }, 1000);
  //     }
  //     return () => {
  //       console.log('unmount(размонтировалась)');
  //       timerIdRef.current && clearInterval(timerIdRef.current)
  //       timerIdRef.current = null;
  //     };
  //   }, [isCounting]);

  //   return (
  //     <div className="App">
  //       <h1>React Timer</h1>
  //       <h3>{count}</h3>
  //       {!isCounting ? (
  //         <button onClick={startCount}>Start</button>
  //       ) : (
  //         <button onClick={stopCount}>Stop</button>
  //       )}
  //       <button onClick={handleReset}>Reset</button>
  //     </div>
  //   );

  // }
}
export default App;