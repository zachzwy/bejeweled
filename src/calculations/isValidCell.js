/**
 * Check if a cell is out of boundary
 * @param {number[][]} arr
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
const isValidCell = (arr, i, j) =>
  i >= 0 && i < arr.length && j >= 0 && j < arr[0].length;

export default isValidCell;
