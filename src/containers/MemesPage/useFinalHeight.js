import { useRef, useEffect } from 'react';

const useFinalHeight = callback => {
  const nodeRef = useRef({});
  const prevHeightRef = useRef(0);
  const changesCounterRef = useRef(0);
  const constantCounterRef = useRef(0);

  // The height of the node we are observing will change once initially,
  // then a few more times, close together, when its content(instagram post) loads.
  // (determined by manual observation; change this code as needed if that changes)
  // Thus we check the height for changes every 10ms,
  // and assume the height is final if both of the following are satisfied:
  //   - The height has already changed at least twice
  //   - The height has not changed in the last 690ms
  useEffect(() => {
    const heightChecker = setInterval(() => {
      if (prevHeightRef.current === nodeRef.current.offsetHeight) {
        constantCounterRef.current += 1;
      } else {
        prevHeightRef.current = nodeRef.current.offsetHeight;
        changesCounterRef.current += 1;
        constantCounterRef.current = 0;
      }
      if (changesCounterRef.current >= 2 && constantCounterRef.current >= 69) {
        callback(nodeRef.current.offsetHeight); // Do whatever with the final height
        clearInterval(heightChecker);
      }
    }, 10);
    return () => { clearInterval(heightChecker); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    nodeRef,
  };
};

export default useFinalHeight;
