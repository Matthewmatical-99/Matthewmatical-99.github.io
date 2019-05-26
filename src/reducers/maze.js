import Types from '../actions/action-types';

const initialState = {
  width: 58,
  height: 37,
};

function parseDims(action) {
  const dimensions = {};
  if (action.height) dimensions.height = Math.max(action.height, 5);
  if (action.width) dimensions.width = Math.max(action.width, 5);
  return dimensions;
}

export default function mazeReducer(state = initialState, action) {
  switch (action.type) {
    case Types.MAZE_CONFIG:
      console.log(action.width, action.height);
      return {
        ...state,
        ...parseDims(action),
      };
    default:
      return state;
  }
};
