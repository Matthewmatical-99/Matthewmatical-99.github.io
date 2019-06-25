import { combineReducers } from 'redux';

import maze from './maze';
import connectFour from './connect-four';

const reducer = combineReducers({
  maze,
  connectFour,
});

export default reducer;
