import React, { useState } from 'react';
import './matrix';
import './App.css';
import Header from './components/Header';
import createMatrix from './matrix';

// Массив 10х10
function App() {
  const [matrix, setMatrix] = useState(createMatrix());

  return <Header />;
}

export default App;
