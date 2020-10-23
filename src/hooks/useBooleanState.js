import { useState } from 'react';

const useBooleanState = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const setTrue = () => {
    setState(true);
  };

  const setFalse = () => {
    setState(false);
  };

  const toggle = () => {
    setState(!state);
  };

  return {
    state,
    setState,
    setFalse,
    setTrue,
    toggle,
  };
};

export default useBooleanState;
