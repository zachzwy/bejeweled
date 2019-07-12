import { isLineUpAny } from "./isLineUp";
import randomGen from "./randomGen";
import validMoveGen from "./validMoveGen";

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

  // Step 1: Randomly generate a valid move control center
  // The valid move control center can be any cells except those on the board perimeter
  const validMoveCenter = [randomGen(1, row - 1), randomGen(1, col - 1)];
  // Step 2: Generate three cells that provide a valid move
  // See validMoveGen.js for more details
  const validMoveCells = validMoveGen(validMoveCenter);
  // Step 3: Randomly generate a color
  const colorValue = randomGen(0, numOfColor);
  // Step 4: In the initState array, set the color value on those three cells accordingly
  validMoveCells.forEach(([row, col]) => (initState[row][col] = colorValue));

  // Part II: Then generate other random cells without line-up

  for (let i = 0; i < initState.length; i++) {
    for (let j = 0; j < initState[0].length; j++) {
      if (initState[i][j] === undefined) {
        // Make sure no line-up happens
        // The number of color needs to be at least 3 to avoid infinite loop here
        do {
          initState[i][j] = randomGen(0, numOfColor);
        } while (isLineUpAny(initState, i, j));
        // Note 1: The condition of this while loop could be improved by only checking
        // cells with isLineUpLeft and isLineUpAbove, when the cells are not
        // affected by those valid move cells created on part I.
        // Note 2: The approach of using while loop could potentially be improved
      }
    }
  }
  return initState;
};

export default init;

// Even though there is a while loop, the time complexity
// for the this init function is still O(row * col), which is
// a single pass of the 2D grid.
