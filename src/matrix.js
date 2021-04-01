export const FIELDSIZE = 20;
export default function createMatrix() {
  const field = [];
  for (let i = 0; i < FIELDSIZE; i++) {
    if (field[i] === undefined) {
      field[i] = [];
    }
    for (let j = 0; j < FIELDSIZE; j++) {
      field[i][j] = 0;
    }
  }
  return field;
}
