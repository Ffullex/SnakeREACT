import './Counter.css';
export type BodyProps = {
  bodyCount: number;
};

export const Counter = ({ bodyCount = 0 }: BodyProps) => {
  return <div className="counter"> Количество скушцанного: {bodyCount} </div>;
};
