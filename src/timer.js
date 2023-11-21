import React, { useState, useEffect } from 'react';
import './App.css'
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    
    <div>
      <p>{seconds} seconds</p>
      <button className='s' onClick={handleStart} disabled={isActive}>
        Start
      </button>
      <button className='r' onClick={handleStop} disabled={!isActive}>
        Stop
      </button>
      <button className='m' onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;