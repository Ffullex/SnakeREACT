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

// Координаты головы
let xHead;
let yHead;

// координаты еды
let xFood;
let yFood;
let countFood = 0;

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

// Функция предоставления случайных целых чисел не менее min и менее max
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

// Функция создания еды
export function createFood(matrix) {
  console.log('Количество съеденного: ' + countFood);
  countFood = countFood + 1;
  xFood = getRandomInt(0, FIELD_SIZE);
  yFood = getRandomInt(0, FIELD_SIZE);

  for (let row = 0; row < FIELD_SIZE; row++) {
    for (let column = 0; column < FIELD_SIZE; column++) {
      // if (xFood === xHead && yFood === yHead) {
      //   countFood = countFood + 1;
      //   console.log(countFood + 'aasdasdsad');
      //   xFood = getRandomInt(0, FIELD_SIZE);
      //   yFood = getRandomInt(0, FIELD_SIZE);
      // }
      if (row === xFood && column === yFood) {
        matrix[row][column] = FOOD_FIELD;
      }
    }
  }
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
// функция, предоставляющая следующее состояние матрицы
export function getNextMatrix(matrix, direct) {
  console.log(countFood + 'cc');
  searchHead(matrix);

  // занулить предыдущее расположение головы
  matrix[xHead][yHead] = EMPTY_FIELD;

  // обработка стрелочек
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

  if (!searchFood(matrix)) {
    createFood(matrix);
  }

  // Сделать поле головой в соответствии с направлением
  matrix[xHead][yHead] = HEAD_FIELD;

  return [...matrix];
}
