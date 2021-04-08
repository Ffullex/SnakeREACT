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

// функция поиска головы
export function searchHead(matrix) {
  for (let row = 0; row < FIELD_SIZE; row++) {
    for (let column = 0; column < FIELD_SIZE; column++) {
      if (matrix[row][column] === HEAD_FIELD) {
        xHead = row;
        yHead = column;
      }
    }
  }
  return matrix;
}

let xHead;
let yHead;

// функция, предоставляющая следующее состояние матрицы
export function getNextMatrix(matrix, direct) {
  searchHead(matrix);
  // Сделать всю матрицу просто полем. Считать направление
  matrix[xHead][yHead] = EMPTY_FIELD;
  switch (direct) {
    case UP:
      xHead--;
      if (xHead < 0) xHead = FIELD_SIZE - 1;
      break;
    case DOWN:
      xHead++;
      if (xHead > FIELD_SIZE - 1) xHead = 0;
      break;
    case LEFT:
      yHead--;
      if (yHead < 0) yHead = FIELD_SIZE - 1;
      break;
    case RIGHT:
      yHead++;
      if (yHead > FIELD_SIZE - 1) yHead = 0;
      break;
  }
  // Сделать поле головой в соответствии с направлением
  matrix[xHead][yHead] = HEAD_FIELD;

  return [...matrix];
}
