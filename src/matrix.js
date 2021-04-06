// константы поля, змейки и еды.
export const FIELD_SIZE = 21;
export const EMPTY_FIELD = 0;
export const HEAD_FIELD = 1;
export const BODY_FIELD = 2;
export const FOOD_FIELD = 3;

// константы направления змейки
export const UP = 0;
export const DOWN = 1;
export const LEFT = 2;
export const RIGHT = 3;
export const DIRECTIONS = { UP, DOWN, LEFT, RIGHT };

// функция, которая создаёт матрицу/поле
export function createMatrix() {
  const field = [];
  for (let i = 0; i < FIELD_SIZE; i++) {
    if (field[i] === undefined) {
      field[i] = [];
    }
    for (let j = 0; j < FIELD_SIZE; j++) {
      field[i][j] = EMPTY_FIELD;
      if (i === Math.floor(FIELD_SIZE / 2) && j === Math.floor(FIELD_SIZE / 2)) {
        field[i][j] = HEAD_FIELD;
      }
    }
  }
  return field;
}

// функция, предоставляющая следующее состояние матрицы
export function getNextMatrix(matrix, direct) {
  matrix = createMatrix();
  console.log(matrix.indexOf(HEAD_FIELD));
  switch (direct) {
    case UP:
      return matrix.column++;
    case DOWN:
      return matrix.column--;
    case LEFT:
      return matrix.row++;
    case RIGHT:
      return matrix.row--;
  }
}
