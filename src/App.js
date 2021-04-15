import React, { useEffect, useRef, useState } from 'react';
import { useKey } from 'react-use';
import './matrix';
import './App.css';
import Header from './components/Header';
import { createMatrix, DOWN, getNextMatrix, getWormLength, LEFT, RIGHT, UP } from './matrix';
import { Field } from './stories/Field';
import { Counter } from './stories/Counter';

function App() {
  const [matrix, setMatrix] = useState(createMatrix());
  const direct = useRef(UP);
  const upArrow = ['w', 'W', 'ArrowUp'];
  const downArrow = ['s', 'S', 'ArrowDown'];
  const leftArrow = ['a', 'A', 'ArrowLeft'];
  const rightArrow = ['d', 'D', 'ArrowRight'];

  useKey(
    event => upArrow.includes(event.key),
    () => (direct.current = UP)
  );
  useKey(
    event => downArrow.includes(event.key),
    () => (direct.current = DOWN)
  );
  useKey(
    event => leftArrow.includes(event.key),
    () => (direct.current = LEFT)
  );
  useKey(
    event => rightArrow.includes(event.key),
    () => (direct.current = RIGHT)
  );

  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      setMatrix(getNextMatrix(matrix, direct.current));
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Header />
      <Counter bodyCount={getWormLength(matrix)} />
      <Field matrix={matrix} />
    </>
  );
}

export default App;
