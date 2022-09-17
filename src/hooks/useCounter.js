import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = (step = 1) => {
    setCount(oldCount => oldCount + step);
    return count;
  };

  return {
    count,
    increment,
  };
};

export default useCounter;
