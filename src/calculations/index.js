/**
 * Check if a cell is out of boundary
 * @param {number[][]} arr
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
const isValidCell = (arr, i, j) =>
  i >= 0 && i < arr.length && j >= 0 && j < arr[0].length;

/**
 * Generate random integer from min to max
 * including min, excluding max.
 * Both min and max should be integer
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
const randomGen = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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
const isLineUpAny = (arr, i, j) =>
  isLineUpLeft(arr, i, j) ||
  isLineUpAbove(arr, i, j) ||
  isLineUpRight(arr, i, j) ||
  isLineUpBelow(arr, i, j) ||
  isLineUpLatitude(arr, i, j) ||
  isLineUpLongitude(arr, i, j);

/**
 * Given the valid move control area: 2 by 3, 1 by 4, 3 by 2, 4 by 1,
 * generate three cells that provide a valid move.
 *
 * To make sure valid move exists, consider it in a reverse engineering manner.
 * Start from two basic versions of "line-up": three adjacent cells with
 * the same color vertically/horizontally.
 *
 * And then swap one of the cell with its neighbour. Each version
 * has 8 ways of swapping.
 *
 * //  2 by 3
 * //  O * *   * O O   * O *   O * O   * * O   O O *
 * //  * O O   O * *   O * O   * O *   O O *   * * O
 *
 * //  1 by 4
 * //  O O * O   O * O O
 *
 * //  3 by 2
 * //  O *     * O     * O     O *     * O     O *
 * //  * O     O *     O *     * O     * O     O *
 * //  * O     O *     * O     O *     O *     * O
 *
 * //  4 by 1
 * //  O       O
 * //  O       *
 * //  *       O
 * //  O       O
 *
 * Control point ==> check valid control area ==> generate valid move
 *
 * @param {number} row
 * @param {number} col
 * @return {number[][]}
 */
const validMoveGen = ([maxRow, maxCol]) => {
  const twoByThree = [
    ([row, col]) => [[row, col], [row + 1, col + 1], [row + 1, col + 2]], // #1
    ([row, col]) => [[row + 1, col], [row, col + 1], [row, col + 2]], // #2
    ([row, col]) => [[row + 1, col], [row, col + 1], [row + 1, col + 2]], // #3
    ([row, col]) => [[row, col], [row + 1, col + 1], [row, col + 2]], // #4
    ([row, col]) => [[row + 1, col], [row + 1, col + 1], [row, col + 2]], // #5
    ([row, col]) => [[row, col], [row, col + 1], [row + 1, col + 2]] // #6
  ];

  const oneByFour = [
    ([row, col]) => [[row, col], [row, col + 1], [row, col + 3]], // #1
    ([row, col]) => [[row, col], [row, col + 2], [row, col + 3]] // #2
  ];

  const threeByTwo = [
    ([row, col]) => [[row, col], [row + 1, col + 1], [row + 2, col + 1]], // #1
    ([row, col]) => [[row, col + 1], [row + 1, col], [row + 2, col]], // #2
    ([row, col]) => [[row, col + 1], [row + 1, col], [row + 2, col + 1]], // #3
    ([row, col]) => [[row, col], [row + 1, col + 1], [row + 2, col]], // #4
    ([row, col]) => [[row, col + 1], [row + 1, col + 1], [row + 2, col]], // #5
    ([row, col]) => [[row, col], [row + 1, col], [row + 2, col + 1]] // #6
  ];

  const fourByOne = [
    ([row, col]) => [[row, col], [row + 1, col], [row + 3, col]], // #1
    ([row, col]) => [[row, col], [row + 2, col], [row + 3, col]] // #2
  ];

  const swappingFunc = [];
  // Generate control point
  const row = randomGen(0, maxCol > 3 ? maxRow : maxRow - 1);
  let col;
  if (row === maxRow - 1) {
    col = randomGen(0, maxCol - 3);
  } else if (row === maxRow - 2) {
    col = randomGen(0, maxCol - 2);
  } else if (row === maxRow - 3) {
    col = randomGen(0, maxCol - 1);
  } else {
    col = randomGen(0, maxCol);
  }

  // Check if each control area works, and add the valid move to swapping function array
  if (row + 1 < maxRow && col + 2 < maxCol) {
    swappingFunc.push(...twoByThree);
  }
  if (col + 3 < maxCol) {
    swappingFunc.push(...oneByFour);
  }
  if (row + 2 < maxRow && col + 1 < maxCol) {
    swappingFunc.push(...threeByTwo);
  }
  if (row + 3 < maxRow) {
    swappingFunc.push(...fourByOne);
  }

  const seed = randomGen(0, swappingFunc.length);
  return swappingFunc[seed]([row, col]);
};

/**
 * Generate initialState without line-up, with valid move
 * @param {number} row
 * @param {number} col
 * @return {number[][]}
 * @time O(row * col)
 * @space O(row * col)
 */
const init = ({ row, col }, numOfColor) => {
  const initState = Array.from(Array(row), () => Array(col));

  // Part I: Introduce valid move first

  // Step 1: Generate three cells that provide a valid move
  // See validMoveGen.js for more details
  const validMoveCells = validMoveGen([row, col]);
  // Step 2: Randomly generate a color
  const colorValue = randomGen(0, numOfColor);
  // Step 3: In the initState array, set the color value on those three cells accordingly
  validMoveCells.forEach(([row, col]) => (initState[row][col] = colorValue));

  // Part II: Then generate other random cells without line-up

  for (let i = 0; i < initState.length; i++) {
    for (let j = 0; j < initState[0].length; j++) {
      if (initState[i][j] === undefined) {
        // Make sure no line-up happens
        // The number of color needs to be at least 3 to avoid error here
        const colors = [...Array(numOfColor + 1).keys()];
        let seed = colors.length - 1;
        // This while loop will run at most colors.length times
        // since each loop will remove the color that has been tried
        do {
          colors.splice(seed, 1);
          initState[i][j] = colors[randomGen(0, colors.length)];
        } while (isLineUpAny(initState, i, j));
        // Note: The condition of this while loop could be improved by only checking
        // cells with isLineUpLeft and isLineUpAbove, when the cells are not
        // affected by those valid move cells created on part I.
      }
    }
  }
  return initState;
};

export default init;

// Even though there is a while loop, the time complexity
// for the this init function is still O(row * col), which is
// a single pass of the 2D grid.
