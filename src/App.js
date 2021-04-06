import React, { useEffect, useState } from 'react';
import { useKey } from 'react-use';
import './matrix';
import './App.css';
import Header from './components/Header';
import { createMatrix, DIRECTIONS, getNextMatrix, UP } from "./matrix";
import { Field } from './stories/Field';

function App() {
  const [matrix, setMatrix] = useState(createMatrix());

  useEffect(() => {
    let intervalId;

    intervalId = setInterval(() => {
      setMatrix(getNextMatrix(matrix, DIRECTIONS));
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
