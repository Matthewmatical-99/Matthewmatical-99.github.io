import { useState } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(oldCount => oldCount + 1);
    return count;
  };

  return {
    count,
    increment,
  };
};

export default useCounter;
