import './Box.css';
import { searchHead } from '../matrix';
// @ts-ignore
import { Box } from './Box.tsx';
import './Field.css';

export type MatrixProps = {
  matrix: number[][];
};

// компонент отрисовки поля
export const Field = ({ matrix }: MatrixProps) => {
  const { maxHead } = searchHead(matrix);
  return (
    <div className="matrix">
      {matrix.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((item, itemIndex) => (
            <Box status={item} maxHead={maxHead} key={itemIndex} />
          ))}
        </div>
      ))}
    </div>
  );
};
