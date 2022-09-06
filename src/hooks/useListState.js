import { useState } from 'react';
import * as R from 'ramda';

const useListState = (initialState = []) => {
  const [list, setList] = useState(initialState);

  const updateOne = index => R.pipe(R.update(index), setList);
  const adjustOne = index => R.pipe(R.adjust(index), setList);

  return {
    value: list,
    state: list,
    setList,
    updateOne,
    adjustOne,
  };
};

export default useListState;
