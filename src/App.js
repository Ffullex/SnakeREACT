import React, { useEffect, useRef, useState } from 'react';
import { useKey } from 'react-use';
import './matrix';
import './App.css';
import Header from './components/Header';
import { createMatrix, DOWN, getNextMatrix, LEFT, RIGHT, UP } from './matrix';
import { Field } from './stories/Field';

function App() {
  const [matrix, setMatrix] = useState(createMatrix());
  const direct = useRef(UP);

  useKey('w', () => (direct.current = UP));
  useKey('s', () => (direct.current = DOWN));
  useKey('a', () => (direct.current = LEFT));
  useKey('d', () => (direct.current = RIGHT));

  useEffect(() => {
    let intervalId;
    intervalId = setInterval(() => {
      setMatrix(getNextMatrix(matrix, direct.current));
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <Header />
      <Field matrix={matrix} />
    </>
  );
}

export default App;
