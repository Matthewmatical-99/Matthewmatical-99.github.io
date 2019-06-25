import Types from '../actions/action-types';
import { checkWin } from '../containers/ConnectFour/helpers';

const makeEmptyGrid = () => Array(7).fill('column').map(() => Array(6).fill(0));

const initialState = () => ({
  grid: makeEmptyGrid(),
  open: false,
  luigi: false,
  useAI: true,
  gameOver: false,
});

export default function CFReducer(state = initialState(), action) {
  switch (action.type) {
    case Types.CF_TAKE_TURN:
      const y = state.grid[action.col].lastIndexOf(0);
      if (state.gameOver || y < 0) return state;
      const grid = state.grid.map((col, i) => i === action.col ? col.map((slot, j) => j === y ? 1 + state.luigi : slot) : col);
      return {
        ...state,
        luigi: !state.luigi,
        grid,
        gameOver: state.gameOver || checkWin(grid, action.col, y),
      };
    case Types.CF_YEET:
      return {
        ...state,
        open: true,
      };
    case Types.CF_YOTE:
      return initialState();
    default:
      return state;
  }
}
