import React, { useEffect, useState } from 'react';
import { useKey } from 'react-use';
import './matrix';
import './App.css';
import Header from './components/Header';
import { createMatrix, DIRECTIONS, DOWN, getNextMatrix, LEFT, RIGHT, UP } from './matrix';
import { Field } from './stories/Field';

function App() {
  const [matrix, setMatrix] = useState(createMatrix());
  const [direct, setDirect] = useState();

  useKey('ArrowUp' ,() => setDirect(UP));
  useKey('ArrowDown' ,() => setDirect(DOWN));
  useKey('ArrowLeft' ,() => setDirect(LEFT));
  useKey('ArrowRight' ,() => setDirect(RIGHT));

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      setMatrix(getNextMatrix(matrix, direct));
    }, 1000);

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
