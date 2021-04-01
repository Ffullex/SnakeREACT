import Matrix from './Matrix';
import createMatrix, { FIELDSIZE } from '../matrix';
test('Тесте на правильность рендера матрицы ', () => {
  const matrix = createMatrix();
  render(<Matrix matrix={matrix} />);
  expect();
});
