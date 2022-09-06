import { useState, useRef } from 'react';

import useBooleanState from '../../hooks/useBooleanState';

const NO_OFFSET = { left: 0, top: 0 };
const NOOP = () => {};

const useDrag = (
  counter,
  parentOffsets = NO_OFFSET,
  setAttachment = NOOP,
  attach = NOOP,
  detach = NOOP,
) => {
  const attachedToParent = useBooleanState(true);
  const startPosRef = useRef(null);
  const [detachmentOffsets, setDetachmentOffsets] = useState(NO_OFFSET);
  const offsetsRef = useRef(NO_OFFSET);

  const [z, setZ] = useState(0);

  // Where this component has been dragged, relative to initial position
  const [offsets, setOffsets] = useState(NO_OFFSET);

  const pickUp = event => {
    event.stopPropagation();
    startPosRef.current = { startX: event.clientX, startY: event.clientY };
    if (!!counter) {
      setZ(counter.increment());
    }
    if (attachedToParent.state && setAttachment !== NOOP){
      attachedToParent.setFalse();
      setDetachmentOffsets(parentOffsets);
      setAttachment(false);
      detach();
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
    attachedToParent.setTrue();
    setDetachmentOffsets(NO_OFFSET);
    setAttachment(true);
    attach();
  };
  
  return {
    offsets: attachedToParent.state ? offsets : {
      left: offsets.left - parentOffsets.left + detachmentOffsets.left + 100,
      top: offsets.top - parentOffsets.top + detachmentOffsets.top,
    },
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

export default useDrag;
