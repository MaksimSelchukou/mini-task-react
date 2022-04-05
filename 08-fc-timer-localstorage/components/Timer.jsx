import React, { useEffect, useRef, useState } from 'react';


function setDefaultValue() {
    const userCount = localStorage.getItem('count');
    return userCount ? +userCount : 0;
}
function Timer() {


    const [count, setCount] = useState(setDefaultValue());
    const [isCounting, setCounting] = useState(false);
    const timerIdRef = useRef(null);
    console.log('render (отрендерился)');

    const handleReset = () => {
        setCount(0);
        setCounting(false)
    }

    const startCount = () => {
        setCounting(true);
    }

    const stopCount = () => {
        setCounting(false);
    }

    useEffect(() => {
        console.log('update (обновилась)');
        localStorage.setItem('count', count);
    }, [count]);

    useEffect(() => {
        if (isCounting) {
            timerIdRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1)
            }, 1000);
        }
        return () => {
            console.log('unmount(размонтировалась)');
            timerIdRef.current && clearInterval(timerIdRef.current)
            timerIdRef.current = null;
        };
    }, [isCounting]);

    return (
        <div className="App">
            <h1>React Timer</h1>
            <h3>{count}</h3>
            {!isCounting ? (
                <button onClick={startCount}>Start</button>
            ) : (
                <button onClick={stopCount}>Stop</button>
            )}
            <button onClick={handleReset}>Reset</button>
        </div>
    );

}

export default Timer;