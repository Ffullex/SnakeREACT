import { FIELDSIZE } from './matrix';
import createMatrix from './matrix';

test('Проверка на то, что существует массив с нулями на сто ячеек', () => {
  const array = [];
  for (let i = 0; i < FIELDSIZE; i++) {
    if (array[i] === undefined) {
      array[i] = [];
    }
    for (let j = 0; j < FIELDSIZE; j++) {
      array[i][j] = 0;
    }
  }
  expect(createMatrix()).toEqual(array);
});
