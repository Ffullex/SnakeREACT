import { useKey } from 'react-use';
export const FIELD_SIZE = 21;
export const EMPTY_FIELD = 0;
export const HEAD_FIELD = 1;
export const BODY_FIELD = 2;
export const FOOD_FIELD = 3;

export const UP = 0;
export const DOWN = 1;
export const LEFT = 2;
export const RIGHT = 3;
export const DIRECTIONS = { UP, DOWN, LEFT, RIGHT };
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

function chooseDirections() {
  switch (useKey) {
    case 'W' || 'ArrowUp' || 'w':
      return UP;
    case 'S' || 'ArrowDown' || 's':
      return DOWN;
    case 'A' || 'ArrowLeft' || 'a':
      return LEFT;
    case 'D' || 'ArrowRight' || 'd':
      return RIGHT;
  }
}

let row = Math.floor(FIELD_SIZE / 2);
let item = Math.floor(FIELD_SIZE / 2);

export function getNextMatrix(matrix, DIRECTIONS) {
  matrix = createMatrix();
  DIRECTIONS = chooseDirections();
  matrix[row][item] = HEAD_FIELD;
  switch (DIRECTIONS) {
    case UP:
      return matrix.item++;
    case DOWN:
      return matrix.item--;
    case LEFT:
      return matrix.row++;
    case RIGHT:
      return matrix.row--;
  }
}
