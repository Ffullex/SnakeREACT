import { DOWN, FIELD_SIZE, getNextMatrix, HEAD_FIELD, LEFT, RIGHT, searchHead, UP } from './matrix';
import { createMatrix } from './matrix';

test('Проверка на то, что существует массив с нулями на сто ячеек', () => {
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
  expect([Math.floor(FIELD_SIZE / 2)][Math.floor(FIELD_SIZE / 2)]).toBe(searchHead(initialMatrix));
});

test('Тест на выход за рамки массива UP',  () => {
  const initialMatrix = createMatrix();
  const presentMatrix = createMatrix();
  for (let i = 0; i < FIELD_SIZE; i++){
    getNextMatrix(initialMatrix, UP);
  }
  expect(initialMatrix).toEqual(presentMatrix);
});

test('Тест на выход за рамки массива DOWN',  () => {
  const initialMatrix = createMatrix();
  const presentMatrix = createMatrix();
  for (let i = 0; i < FIELD_SIZE; i++){
    getNextMatrix(initialMatrix, DOWN);
  }
  expect(initialMatrix).toEqual(presentMatrix);
});

test('Тест на выход за рамки массива LEFT',  () => {
  const initialMatrix = createMatrix();
  const presentMatrix = createMatrix();
  for (let i = 0; i < FIELD_SIZE; i++){
    getNextMatrix(initialMatrix, LEFT);
  }
  expect(initialMatrix).toEqual(presentMatrix);
});

test('Тест на выход за рамки массива RIGHT',  () => {
  const initialMatrix = createMatrix();
  const presentMatrix = createMatrix();
  for (let i = 0; i < FIELD_SIZE; i++){
    getNextMatrix(initialMatrix, RIGHT);
  }
  expect(initialMatrix).toEqual(presentMatrix);
});