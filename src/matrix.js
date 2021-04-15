export const FIELD_SIZE = 21;
export const EMPTY_FIELD = 0;
export const FOOD_FIELD = -1;

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
        field[i][j] = 1;
      }
    }
  }
  return field;
}

// функция поиска головы
export function searchHead(matrix) {
  // Координаты головы
  let xHead;
  let yHead;
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
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

// Функция создания еды
export function createFood(matrix) {
  console.log('Количество жертв: ');
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
export function searchFood(matrix) {
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
export function switchDirection(xHead, yHead, direct) {
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

export function minusOne(matrix) {
  for (let row = 0; row < FIELD_SIZE; row++) {
    for (let column = 0; column < FIELD_SIZE; column++) {
      if (matrix[row][column] > EMPTY_FIELD) {
        matrix[row][column] = matrix[row][column] - 1;
      }
    }
  }
}

// функция, предоставляющая следующее состояние матрицы
export function getNextMatrix(matrix, direct) {
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
    return 0;
  }

  if (!searchFood(matrix)) {
    matrix = createFood(matrix);
  }

  return [...matrix];
}
