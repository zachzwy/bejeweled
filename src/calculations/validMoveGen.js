import { randomGen } from "../calculationHelpers";

/**
 * Given the cordinate of the valid move control center,
 * generate three cells that provide a valid move
 *
 * To make sure valid move exists, consider in a reverse engineering manner.
 * Starting from two basic versions of "line-up": three cells have
 * the same color vertically / horizontally.
 *
 * And then swap one of the cell with its neighbour. Each version
 * has 8 ways to swapping, subtracting two of them that requires
 * 4 cells in a row. So it ends up with 12 different ways.
 *
 * @param {number[]} cell
 * @return {number[][]}
 */
const validMoveGen = cell => {
  //  Pick one of 12 possible valid move within 3 by 3 grid
  const seed = randomGen(0, 12);
  const [row, col] = cell;
  if (seed === 0) {
    // O * *
    // * O O
    // * * *
    return [[row - 1, col - 1], cell, [row, col + 1]];
  } else if (seed === 1) {
    // * * *
    // * O O
    // O * *
    return [[row + 1, col - 1], cell, [row, col + 1]];
  } else if (seed === 2) {
    // * O *
    // O * O
    // * * *
    return [[row, col - 1], [row - 1, col], [row, col + 1]];
  } else if (seed === 3) {
    // * * *
    // O * O
    // * O *
    return [[row, col - 1], [row + 1, col], [row, col + 1]];
  } else if (seed === 4) {
    // * * O
    // O O *
    // * * *
    return [[row, col - 1], cell, [row - 1, col + 1]];
  } else if (seed === 5) {
    // * * *
    // O O *
    // * * O
    return [[row, col - 1], cell, [row + 1, col + 1]];
  } else if (seed === 6) {
    // O * *
    // * O *
    // * O *
    return [[row - 1, col - 1], cell, [row + 1, col]];
  } else if (seed === 7) {
    // * * O
    // * O *
    // * O *
    return [[row - 1, col + 1], cell, [row + 1, col]];
  } else if (seed === 8) {
    // * O *
    // O * *
    // * O *
    return [[row - 1, col], [row, col - 1], [row + 1, col]];
  } else if (seed === 9) {
    // * O *
    // * * O
    // * O *
    return [[row - 1, col], [row, col + 1], [row + 1, col]];
  } else if (seed === 10) {
    // * O *
    // * O *
    // O * *
    return [[row - 1, col], cell, [row + 1, col - 1]];
  } else if (seed === 11) {
    // * O *
    // * O *
    // * * O
    return [[row - 1, col], cell, [row + 1, col + 1]];
  }
};

export default validMoveGen;
