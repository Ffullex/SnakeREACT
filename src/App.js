import React, { useEffect, useState } from "react";
import './matrix';
import './App.css';
import Header from './components/Header';
import { createMatrix, getNextMatrix, UP } from './matrix';
import { Field } from './stories/Field';

function App() {
  const [matrix, setMatrix] = useState(createMatrix());

  // useEffect(() => {
  //   let intervalId;
  //
  //   intervalId = setInterval(() => {
  //     setMatrix(getNextMatrix(matrix, UP));
  //   }, 1000);
  //
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <>
      <Header />
      <Field matrix={matrix} />
    </>
  );
}

export default App;
