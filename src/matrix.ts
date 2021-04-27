export const FIELD_SIZE = 21;
export const EMPTY_FIELD = 0;
export const FOOD_FIELD = -1;

// константы направления змейки
export const UP = 0;
export const DOWN = 1;
export const LEFT = 2;
export const RIGHT = 3;

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

// функция, которая создаёт матрицу/поле
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

// функция поиска головы
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

// Функция предоставления случайных целых чисел не менее min и менее max
function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

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

// Функция создания еды
export function createFood(matrix: Field): Field {
  console.log('Количество жертв: ' + 1);
  const xFood = getRandomInt(0, FIELD_SIZE);
  const yFood = getRandomInt(0, FIELD_SIZE);

  for (let row = 0; row < FIELD_SIZE; row++) {
    for (let column = 0; column < FIELD_SIZE; column++) {
      if (row === xFood && column === yFood) {
        matrix[row][column] = FOOD_FIELD;
      }
    }
  }
  return matrix;
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

// обработка стрелочек
export function switchDirection(xHead: number, yHead: number, direct: number): HeadCoordinates {
  switch (direct) {
    case UP:
      xHead--;
      if (xHead < 0) xHead = FIELD_SIZE - 1;
      // if (prevDirect === DOWN) xHead++;
      break;
    case DOWN:
      xHead++;
      if (xHead > FIELD_SIZE - 1) xHead = 0;
      // if (prevDirect === UP) xHead--;
      break;
    case LEFT:
      yHead--;
      if (yHead < 0) yHead = FIELD_SIZE - 1;
      // if (prevDirect === RIGHT) yHead++;
      break;
    case RIGHT:
      yHead++;
      if (yHead > FIELD_SIZE - 1) yHead = 0;
      // if (prevDirect === LEFT) yHead--;
      break;
  }
  const xNextHead = xHead;
  const yNextHead = yHead;
  return { xNextHead, yNextHead };
}

export function minusOne(matrix: Field) {
  for (let row = 0; row < FIELD_SIZE; row++) {
    for (let column = 0; column < FIELD_SIZE; column++) {
      if (matrix[row][column] > EMPTY_FIELD) {
        matrix[row][column] = matrix[row][column] - 1;
      }
    }
  }
}

// функция, предоставляющая следующее состояние матрицы
export function getNextMatrix(matrix: Field, direct: number): Field {
  // Координаты головы
  const { xHead, yHead } = searchHead(matrix);

  // Изменяет координаты головы
  const { xNextHead, yNextHead } = switchDirection(xHead, yHead, direct);

  // проверить поле после головы
  if (matrix[xNextHead][yNextHead] === FOOD_FIELD) {
    matrix[xNextHead][yNextHead] = matrix[xHead][yHead] + 1;
  } else if (matrix[xNextHead][yNextHead] === 0) {
    const head = matrix[xHead][yHead];
    minusOne(matrix);
    matrix[xNextHead][yNextHead] = head;
  } else {
    // game over
    return final;
  }

  if (!searchFood(matrix)) {
    matrix = createFood(matrix);
  }

  return [...matrix];
}

export function getWormLength(matrix: Field): number {
  let bodyCount = 0;
  for (let i = 0; i < FIELD_SIZE; i++) {
    for (let j = 0; j < FIELD_SIZE; j++) {
      if (matrix[i][j] > 0) bodyCount++;
    }
  }
  return bodyCount - 1;
}
