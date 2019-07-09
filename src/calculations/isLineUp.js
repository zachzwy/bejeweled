import { isValidCell } from "../calculationHelpers";

/**
 * Check if a cell lines-up with the two adjacent cells
 * on its left side
 * @param {number[][]} arr
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
const isLineUpLeft = (arr, i, j) =>
  isValidCell(arr, i, j) &&
  isValidCell(arr, i, j - 2) &&
  arr[i][j] === arr[i][j - 1] &&
  arr[i][j] === arr[i][j - 2];

const isLineUpRight = (arr, i, j) =>
  isValidCell(arr, i, j) &&
  isValidCell(arr, i, j + 2) &&
  arr[i][j] === arr[i][j + 1] &&
  arr[i][j] === arr[i][j + 2];

const isLineUpAbove = (arr, i, j) =>
  isValidCell(arr, i, j) &&
  isValidCell(arr, i - 2, j) &&
  arr[i][j] === arr[i - 1][j] &&
  arr[i][j] === arr[i - 2][j];

const isLineUpBelow = (arr, i, j) =>
  isValidCell(arr, i, j) &&
  isValidCell(arr, i + 2, j) &&
  arr[i][j] === arr[i + 1][j] &&
  arr[i][j] === arr[i + 2][j];

/**
 * Check if a cell lines-up with the adjacent cells
 * on both its left and right side
 * @param {number[][]} arr
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
const isLineUpLatitude = (arr, i, j) =>
  isValidCell(arr, i, j) &&
  isValidCell(arr, i, j - 1) &&
  isValidCell(arr, i, j + 1) &&
  arr[i][j] === arr[i][j + 1] &&
  arr[i][j] === arr[i][j - 1];

const isLineUpLongitude = (arr, i, j) =>
  isValidCell(arr, i, j) &&
  isValidCell(arr, i - 1, j) &&
  isValidCell(arr, i + 1, j) &&
  arr[i][j] === arr[i + 1][j] &&
  arr[i][j] === arr[i - 1][j];

/**
 * Check if a cell lines-up with its two adjacent cells
 * on any direction
 * @param {number[][]} arr
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
export const isLineUpAny = (arr, i, j) =>
  isLineUpLeft(arr, i, j) ||
  isLineUpAbove(arr, i, j) ||
  isLineUpRight(arr, i, j) ||
  isLineUpBelow(arr, i, j) ||
  isLineUpLatitude(arr, i, j) ||
  isLineUpLongitude(arr, i, j);
