/**
 * Check if two cells are adjacent cells
 * @param {number} rowA
 * @param {number} colA
 * @param {number} rowB
 * @param {number} colB
 * @return {boolean}
 */
const isAdjacent = ([rowA, colA], [rowB, colB]) =>
  (rowA === rowB && Math.abs(colA - colB) === 1) ||
  (colA === colB && Math.abs(rowA - rowB) === 1);

export default isAdjacent;
