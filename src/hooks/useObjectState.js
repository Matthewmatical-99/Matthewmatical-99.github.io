import { useState } from 'react';
import * as R from 'ramda';

const useObjectState = (initialState = {}) => {
  const [state, setState] = useState(initialState);

  const update = R.pipe(R.mergeLeft, setState);

  const deepMerge = R.pipe(R.mergeDeepLeft, setState);

  const updateOne = R.pipe(R.objOf, update);

  return {
    value: state,
    update,
    updateOne,
    deepMerge,
  };
};

export default useObjectState;
