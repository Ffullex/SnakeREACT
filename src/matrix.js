export const FIELDSIZE = 20;
export const EMPTYFIELD = 0;
export const HEADFIELD = 1;
export const BODYFIELD = 2;
export const FOODFIELD = 3;
export default function createMatrix() {
  const field = [];
  for (let i = 0; i < FIELDSIZE; i++) {
    if (field[i] === undefined) {
      field[i] = [];
    }
    for (let j = 0; j < FIELDSIZE; j++) {
      field[i][j] = EMPTYFIELD;
    }
  }
  return field;
}
