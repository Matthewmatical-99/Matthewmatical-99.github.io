import Types from './action-types';

export const mazeConfig = dimensions => ({
  ...dimensions,
  type: Types.MAZE_CONFIG,
});
