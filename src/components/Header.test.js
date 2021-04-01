import { render, screen } from '@testing-library/react';
import Header from './Header';

test('', () => {
  render(<Header />);
  expect(screen.getByText('Змейка'));
  expect(screen.getByText('И тебя тоже съест (:'));
});
