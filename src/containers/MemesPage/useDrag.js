import { useState, useRef } from 'react';

const useDrag = (counter) => {
  const startPosRef = useRef(null);
  const offsetsRef = useRef({ left: 0, top: 0 });

  const [z, setZ] = useState(0);

  // Where this component has been dragged, relative to initial position
  const [offsets, setOffsets] = useState({ left: 0, top: 0 });

  const pickUp = event => {
    startPosRef.current = { startX: event.clientX, startY: event.clientY };
    if (!!counter) {
      setZ(counter.increment());
    }
  };

  const putDown = event => {
    const left = event.clientX - startPosRef.current.startX + offsetsRef.current.left;
    const top = event.clientY - startPosRef.current.startY + offsetsRef.current.top;
    offsetsRef.current = { left, top };
    setOffsets({ left, top });
  };

  const drag = event => {
    putDown(event);
    startPosRef.current = { startX: event.clientX, startY: event.clientY };
  }

  const jumpTo = (newPos) => {
    offsetsRef.current = newPos;
    setOffsets(newPos);
  };
  
  return {
    offsets,
    z,
    pickUp,
    putDown,
    drag,
    jumpTo,
  };
};

export default useDrag;
