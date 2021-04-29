export const FIELD_SIZE = 21;
export const EMPTY_FIELD = 0;
export const FOOD_FIELD = -1;

export const UP = 0;
export const DOWN = 1;
export const LEFT = 2;
export const RIGHT = 3;

const final = [
  [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
  [0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0],
  [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0],
  [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0],
  [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0],
  [0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0],
  [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0],
  [0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0],
  [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1]
];

export type Field = number[][];
export type PrevHeadCoordinates = {
  maxHead: number;
  xHead: number;
  yHead: number;
};
export type HeadCoordinates = {
  xNextHead: number;
  yNextHead: number;
};

// Функция создаёт матрицу
export function createMatrix(): Field {
  const field: Field = [];
  for (let i = 0; i < FIELD_SIZE; i++) {
    if (field[i] === undefined) {
      field[i] = [];
    }
    for (let j = 0; j < FIELD_SIZE; j++) {
      field[i][j] = EMPTY_FIELD;
      if (i === Math.floor(FIELD_SIZE / 2) && j === Math.floor(FIELD_SIZE / 2)) {
        field[i][j] = 1;
      }
    }
  }
  return field;
}

// Функция поиска головы
export function searchHead(matrix: Field): PrevHeadCoordinates {
  // Координаты головы
  let xHead = 0;
  let yHead = 0;
  let maxHead = -1;
  for (let row = 0; row < FIELD_SIZE; row++) {
    for (let column = 0; column < FIELD_SIZE; column++) {
      if (matrix[row][column] > maxHead) {
        xHead = row;
        yHead = column;
        maxHead = matrix[row][column];
      }
    }
  }
  return { maxHead, xHead, yHead };
}

// Функция предоставляет случайные целые числа не менее min и менее max
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

// Функция создаёт еду
export function createFood(matrix: Field): Field {
  console.log('Количество жертв: ' + 1);
  const newMatrix = copyArray(matrix);
  const xFood = getRandomInt(0, FIELD_SIZE);
  const yFood = getRandomInt(0, FIELD_SIZE);

  for (let row = 0; row < FIELD_SIZE; row++) {
    for (let column = 0; column < FIELD_SIZE; column++) {
      if (row === xFood && column === yFood) {
        newMatrix[row][column] = FOOD_FIELD;
      }
    }
  }
  return newMatrix;
}

// Функция-флаг наличия еды
export function searchFood(matrix: Field): boolean {
  for (let row = 0; row < FIELD_SIZE; row++) {
    for (let column = 0; column < FIELD_SIZE; column++) {
      if (matrix[row][column] === FOOD_FIELD) {
        return true;
      }
    }
  }
  return false;
}

// Функция обрабатывает стрелочки
export function switchDirection(xHead: number, yHead: number, direct: number): HeadCoordinates {
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
  const xNextHead = xHead;
  const yNextHead = yHead;
  return { xNextHead, yNextHead };
}

// Функция убавляет по единичке с каждого элемента Змейки
export function minusOne(matrix: Field) {
  const newMatrix = copyArray(matrix);
  for (let row = 0; row < FIELD_SIZE; row++) {
    for (let column = 0; column < FIELD_SIZE; column++) {
      if (newMatrix[row][column] > EMPTY_FIELD) {
        newMatrix[row][column] = matrix[row][column] - 1;
      }
    }
  }
  return newMatrix;
}

// Функция находит длину Змейки
export function getWormLength(matrix: Field): number {
  let bodyCount = 0;
  for (let i = 0; i < FIELD_SIZE; i++) {
    for (let j = 0; j < FIELD_SIZE; j++) {
      if (matrix[i][j] > 0) bodyCount++;
    }
  }
  return bodyCount - 1;
}

// функция предоставляет следующее состояние матрицы
export function getNextMatrix(matrix: Field, direct: number): Field {
  let newMatrix = copyArray(matrix);

  if (!searchFood(newMatrix)) {
    newMatrix = createFood(newMatrix);
  }

  const { xHead, yHead } = searchHead(newMatrix);

  const { xNextHead, yNextHead } = switchDirection(xHead, yHead, direct);

  if (newMatrix[xNextHead][yNextHead] === FOOD_FIELD) {
    newMatrix[xNextHead][yNextHead] = newMatrix[xHead][yHead] + 1;
    return newMatrix;
  }

  if (newMatrix[xNextHead][yNextHead] === EMPTY_FIELD) {
    const head = newMatrix[xHead][yHead];
    newMatrix = minusOne(newMatrix);
    newMatrix[xNextHead][yNextHead] = head;
    return newMatrix;
  }

  if (newMatrix[xNextHead][yNextHead] > 0) {
    return final;
  }

  return newMatrix;
}

export function copyArray(array: Field): Field {
  let newArray = [...array];
  for (let i = 0; i < newArray.length; i++) {
    newArray[i] = [...newArray[i]];
  }
  return newArray;
}
