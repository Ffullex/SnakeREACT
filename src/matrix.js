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
  let xHead;
  let yHead;
  for (let row = 0; row < FIELD_SIZE; row++) {
    for (let column = 0; column < FIELD_SIZE; column++) {
      if (matrix[row][column] === HEAD_FIELD) {
        xHead = row;
        yHead = column;
      }
    }
  }
  matrix[xHead][yHead] = EMPTY_FIELD;
  switch (direct) {
    case UP:
      return xHead--;
    case DOWN:
      return xHead++;
    case LEFT:
      return yHead--;
    case RIGHT:
      return yHead++;
  }
  matrix[xHead][yHead] = HEAD_FIELD;
}
