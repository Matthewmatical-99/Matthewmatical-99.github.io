import React, { useEffect } from 'react';

import useBooleanState from '../../hooks/useBooleanState';
import useDrag from './useDrag';
import useFinalHeight from './useFinalHeight';

import * as Styled from './styles';

const DraggyBoi = ({ children, subscribeToResets, updateFolderHeight, absolute, counter }) => {
  const dragHook = useDrag(counter);

  // When the content within has loaded, notify parent so it can resize itself.
  const { nodeRef } = useFinalHeight(updateFolderHeight);

  // This component often contains a third-party iframe,
  // so we place an invisible div over it so the entire area remains draggable.
  const doCover = useBooleanState(true);

  // User might want to access inner iframe.
  // This allows that, although it requires an extra click.
  const tempRemoveCover = () => {
    doCover.setFalse();
    setTimeout(() => {
      doCover.setTrue();
    }, 420);
  };

  // Pass a position-reset fn to parent "folder"
  useEffect(() => {
    if (!!subscribeToResets) {
      subscribeToResets(() => { dragHook.jumpTo({ top: 0, left: 0 }); });
    }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Styled.Draggable
      // This needs to be an inline style for performance reasons.
      ref={nodeRef}
      style={dragHook.offsets || {}}
      absolute={absolute}
      z={dragHook.z}
    >
      {children}
      <Styled.DragCover
        draggable
        onDragStart={dragHook.pickUp}
        onDragEnd={dragHook.putDown}
        onDrag={dragHook.drag}
        onClick={tempRemoveCover}
        style={{ display: doCover.value ? 'block' : 'none' }}
      />
    </Styled.Draggable>
  );
};

export default DraggyBoi;
