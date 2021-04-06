export const FIELD_SIZE = 21;
export const EMPTY_FIELD = 0;
export const HEAD_FIELD = 1;
export const BODY_FIELD = 2;
export const FOOD_FIELD = 3;

export const UP = 0;

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

// export function getNextMatrix(matrix, direction) {
//   if(direction === UP){
//
//   }
// }
