import Types from './action-types';

export const mazeConfig = dimensions => ({
  ...dimensions,
  type: Types.MAZE_CONFIG,
});

export const CFActions = {
  takeTurn: columnIndex => ({
    type: Types.CF_TAKE_TURN,
    col: columnIndex,
  }),
  dropChips: () => ({
    type: Types.CF_YEET,
  }),
  resetGrid: () => ({
    type: Types.CF_YOTE,
  }),
};
