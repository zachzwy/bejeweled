import randomGen from "./randomGen";

/**
 * Given the cordinate of the valid move control center,
 * generate three cells that provide a valid move.
 *
 * To make sure valid move exists, consider it in a reverse engineering manner.
 * Start from two basic versions of "line-up": three adjacent cells with
 * the same color vertically / horizontally.
 *
 * And then swap one of the cell with its neighbour. Each version
 * has 8 ways of swapping, subtracting two of them that require
 * 4 cells in a row/col. So it ends up with 12 different ways as follows.
 *
 * //  O * *   * * *   * O *   * * *   * * O   * * *
 * //  * O O   * O O   O * O   O * O   O O *   O O *
 * //  * * *   O * *   * * *   * O *   * * *   * * O
 *
 * //  O * *   * * O   * O *   * O *   * O *   * O *
 * //  * O *   * O *   O * *   * * O   * O *   * O *
 * //  * O *   * O *   * O *   * O *   O * *   * * O
 *
 * The reason of subtracting those that require 4 cells in a row/col
 * is that we want it to work for the minimal size board of 3 by 3.
 *
 * @param {number} row
 * @param {number} col
 * @return {number[][]}
 */
const validMoveGen = ([row, col]) => {
  const swappingFunc = [
    ([row, col]) => [[row - 1, col - 1], [row, col], [row, col + 1]],
    ([row, col]) => [[row + 1, col - 1], [row, col], [row, col + 1]],
    ([row, col]) => [[row, col - 1], [row - 1, col], [row, col + 1]],
    ([row, col]) => [[row, col - 1], [row + 1, col], [row, col + 1]],
    ([row, col]) => [[row, col - 1], [row, col], [row - 1, col + 1]],
    ([row, col]) => [[row, col - 1], [row, col], [row + 1, col + 1]],
    ([row, col]) => [[row - 1, col - 1], [row, col], [row + 1, col]],
    ([row, col]) => [[row - 1, col + 1], [row, col], [row + 1, col]],
    ([row, col]) => [[row - 1, col], [row, col - 1], [row + 1, col]],
    ([row, col]) => [[row - 1, col], [row, col + 1], [row + 1, col]],
    ([row, col]) => [[row - 1, col], [row, col], [row + 1, col - 1]],
    ([row, col]) => [[row - 1, col], [row, col], [row + 1, col + 1]]
  ];
  const seed = randomGen(0, 12);
  return swappingFunc[seed]([row, col]);
};

export default validMoveGen;
