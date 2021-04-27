import './Box.css';
import { EMPTY_FIELD, FOOD_FIELD } from '../matrix';

export type ItemProps = {
  status: number;
  maxHead: number;
};

// компонент отрисовки возможных вариантов поля (еда, змейка etc)
export const Box = ({ status = EMPTY_FIELD, maxHead }: ItemProps) => {
  function getClassName() {
    if (status === FOOD_FIELD) {
      return 'food';
    }
    if (status === EMPTY_FIELD) {
      return 'empty';
    }
    if (status === maxHead) {
      return 'head';
    }
    if (status > EMPTY_FIELD && status < maxHead) {
      return 'body';
    }
  }
  return <div className={'box ' + getClassName()}> </div>;
};
