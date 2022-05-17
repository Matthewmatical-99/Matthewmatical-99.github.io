import { combineReducers } from 'redux';

import connectFour from './connect-four';

const reducer = combineReducers({
  connectFour,
});

export default reducer;
