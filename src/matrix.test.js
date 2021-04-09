import {
  createFood,
  DOWN,
  FIELD_SIZE,
  FOOD_FIELD,
  getNextMatrix,
  HEAD_FIELD,
  LEFT,
  RIGHT,
  searchFood,
  searchHead,
  UP
} from './matrix';
import { createMatrix } from './matrix';

test('Тест функции создания матрицы', () => {
  const array = [];
  for (let i = 0; i < FIELD_SIZE; i++) {
    if (array[i] === undefined) {
      array[i] = [];
    }
    for (let j = 0; j < FIELD_SIZE; j++) {
      array[i][j] = 0;
      if (i === Math.floor(FIELD_SIZE / 2) && j === Math.floor(FIELD_SIZE / 2)) {
        array[i][j] = HEAD_FIELD;
      }
    }
  }
  expect(createMatrix()).toEqual(array);
});

test('Идёт вверх', () => {
  const initialMatrix = createMatrix();
  const nextMatrix = getNextMatrix(initialMatrix, UP);
  console.log(nextMatrix);
  expect(nextMatrix.length).toBe(FIELD_SIZE);
  expect(nextMatrix[0].length).toBe(FIELD_SIZE);
  expect(nextMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2)]).not.toBe(HEAD_FIELD);
  expect(nextMatrix[Math.floor(FIELD_SIZE / 2) - 1][Math.floor(FIELD_SIZE / 2)]).toBe(HEAD_FIELD);
});

test('Идёт вниз', () => {
  const initialMatrix = createMatrix();
  const nextMatrix = getNextMatrix(initialMatrix, DOWN);
  expect(nextMatrix.length).toBe(FIELD_SIZE);
  expect(nextMatrix[0].length).toBe(FIELD_SIZE);
  expect(nextMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2)]).not.toBe(HEAD_FIELD);
  expect(nextMatrix[Math.floor(FIELD_SIZE / 2) + 1][Math.floor(FIELD_SIZE / 2)]).toBe(HEAD_FIELD);
});

test('Идёт влево', () => {
  const initialMatrix = createMatrix();
  const nextMatrix = getNextMatrix(initialMatrix, LEFT);
  expect(nextMatrix.length).toBe(FIELD_SIZE);
  expect(nextMatrix[0].length).toBe(FIELD_SIZE);
  expect(nextMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2)]).not.toBe(HEAD_FIELD);
  expect(nextMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2) - 1]).toBe(HEAD_FIELD);
});

test('Идёт вправо', () => {
  const initialMatrix = createMatrix();
  const nextMatrix = getNextMatrix(initialMatrix, RIGHT);
  expect(nextMatrix.length).toBe(FIELD_SIZE);
  expect(nextMatrix[0].length).toBe(FIELD_SIZE);
  expect(nextMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2)]).not.toBe(HEAD_FIELD);
  expect(nextMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2) + 1]).toBe(HEAD_FIELD);
});

test('Тест функции поиска Head', () => {
  const initialMatrix = createMatrix();
  const xHead = Math.floor(FIELD_SIZE / 2);
  const yHead = Math.floor(FIELD_SIZE / 2);
  const object = { xHead, yHead };
  expect(object).toEqual(searchHead(initialMatrix));
});

test('Тест на выход за рамки массива UP', () => {
  let initialMatrix = createMatrix();
  initialMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2)] = FOOD_FIELD;
  initialMatrix[0][0] = HEAD_FIELD;

  let presentMatrix = createMatrix();
  presentMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2)] = FOOD_FIELD;
  presentMatrix[FIELD_SIZE - 1][0] = HEAD_FIELD;

  initialMatrix = getNextMatrix(initialMatrix, UP);
  expect(initialMatrix).toEqual(presentMatrix);
});

test('Тест на выход за рамки массива DOWN', () => {
  let initialMatrix = createMatrix();
  initialMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2)] = FOOD_FIELD;
  initialMatrix[FIELD_SIZE - 1][0] = HEAD_FIELD;

  let presentMatrix = createMatrix();
  presentMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2)] = FOOD_FIELD;
  presentMatrix[0][0] = HEAD_FIELD;

  initialMatrix = getNextMatrix(initialMatrix, DOWN);
  expect(initialMatrix).toEqual(presentMatrix);
});

test('Тест на выход за рамки массива LEFT', () => {
  let initialMatrix = createMatrix();
  initialMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2)] = FOOD_FIELD;
  initialMatrix[0][0] = HEAD_FIELD;

  let presentMatrix = createMatrix();
  presentMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2)] = FOOD_FIELD;
  presentMatrix[0][FIELD_SIZE - 1] = HEAD_FIELD;

  initialMatrix = getNextMatrix(initialMatrix, LEFT);
  expect(initialMatrix).toEqual(presentMatrix);
});

test('Тест на выход за рамки массива RIGHT', () => {
  let initialMatrix = createMatrix();
  initialMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2)] = FOOD_FIELD;
  initialMatrix[0][FIELD_SIZE - 1] = HEAD_FIELD;

  let presentMatrix = createMatrix();
  presentMatrix[Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2)] = FOOD_FIELD;
  presentMatrix[0][0] = HEAD_FIELD;

  initialMatrix = getNextMatrix(initialMatrix, RIGHT);
  expect(initialMatrix).toEqual(presentMatrix);
});

test('Тест функции создания Food', () => {
  let initialMatrix = createMatrix();
  expect(searchFood(initialMatrix)).toEqual(false);
  createFood(initialMatrix);
  expect(searchFood(initialMatrix)).toEqual(true);
});
