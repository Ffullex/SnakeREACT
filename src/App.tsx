import { useKey } from 'react-use';
import './matrix';
import './App.css';
import Header from './components/Header';
import { createMatrix, DOWN, getNextMatrix, getWormLength, LEFT, RIGHT, UP } from './matrix';
// @ts-ignore
import { Field } from './stories/Field.tsx';
import { Counter } from './stories/Counter';
import { useEffect, useState, useRef } from 'react';

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
    let intervalId: any;
    intervalId = setInterval(() => {
      setMatrix(getNextMatrix(matrix, direct.current));
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="workspace">
        <Header />
        <button
          className="exit"
          onClick={() => {
            getNextMatrix(createMatrix(), UP);
          }}
        >
          {' '}
          Restart Page{' '}
        </button>
        <Counter bodyCount={getWormLength(matrix)} />
        <Field matrix={matrix} />
      </div>
    </>
  );
}

export default App;
