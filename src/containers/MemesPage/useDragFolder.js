import { useState, useRef, useEffect } from 'react';

const NO_OFFSET = { left: 0, top: 0 };

const useDragFolder = counter => {
  const startPosRef = useRef(null);
  const offsetsRef = useRef(NO_OFFSET);

  const [z, setZ] = useState(0);

  useEffect(() => {
    setZ(counter.increment(3));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Where this component has been dragged, relative to initial position
  const [offsets, setOffsets] = useState(NO_OFFSET);

  const pickUp = event => {
    event.stopPropagation();
    startPosRef.current = { startX: event.clientX, startY: event.clientY };
    if (!!counter) {
      setZ(counter.increment(3));
    }
  };

  const putDown = event => {
    event.stopPropagation();
    const left = event.clientX - startPosRef.current.startX + offsetsRef.current.left;
    const top = event.clientY - startPosRef.current.startY + offsetsRef.current.top;
    offsetsRef.current = { left, top };
    setOffsets({ left, top });
  };

  const drag = event => {
    event.stopPropagation();
    putDown(event);
    startPosRef.current = { startX: event.clientX, startY: event.clientY };
  }

  const jumpTo = (newPos) => {
    offsetsRef.current = newPos;
    setOffsets(newPos);
  };

  const reset = () => {
    jumpTo(NO_OFFSET);
  };
  
  return {
    offsets,
    z,
    jumpTo,
    dragHandlers: {
      onDragStart: pickUp,
      onDrag: drag,
      onDragEnd: putDown,
    },
    reset,
  };
};

export default useDragFolder;
