# Bejeweled

### Updates

1. Reorganize the file structure to have a more friendly review experience;
2. Use const instead of React hook state to represent the board dimension and number of color;
3. Improve the color generator function to eliminate the worse infinite loop case;
4. Improve the validMoveGen function to provide more varieties of the initial valid moves;

### How to use:

```
> git clone https://github.com/zachzwy/bejeweled.git
> cd bejeweled
> npm install
> npm run start
```

### Minimum features:

1. Render an 8 by 8 grid, with a total 64 cells;
2. Each cell is in one of the 7 different colors;
3. There is no line-up in the initial grid (Line-up is short for linear groups of 3 or more cells of the same color horizontally or vertically);
4. There is at least one valid move in the initial grid (Valid move means there is at least one line-up after swapping adjacent cells once. Note: adjacency only applies to horizontal or vertical cells, not diagonal);
5. User can regenerate a new board, by clicking a button or refreshing;

### File Structure

```
...
src
├── components
│   ├── Board.js              # Game board component
│   └── Cell.js               # Cell component
│
├── calculations
│   └── index.js
│       ├ ─ init.js               # Initialize a 2D array representing the game board
│       ├ ─ isLineUp.js           # Check if a cell lines-up with its adjacent cells
│       ├ ─ isValidCell.js        # Check if a cell is in boundary
│       ├ ─ randomGen.js          # Generate a random integer
│       └ ─ validMoveGen.js       # Generate three cells that provide a valid move
│
├── index.js
└── style.css

...
```
