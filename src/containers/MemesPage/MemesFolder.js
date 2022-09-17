import React, { useState } from 'react';
import * as R from 'ramda';

import useCounter from '../../hooks/useCounter';
import useDragFolder from './useDragFolder';
import InstaPost from './InstaPost';
import DraggyBoi from './DraggyBoi';

import * as Styled from './styles';

const MemesFolder = ({ memeIds, counter }) => {
 const folderDragHook = useDragFolder(counter, -1);

   const [memeResetters, setMemeResetters] = useState([]);
  const appendMeme = R.pipe(R.append, setMemeResetters);
  const resetMemes = () => { memeResetters.forEach(reset => { reset(folderDragHook.z); }); };

  const loadedMemesCounter = useCounter();
  const [folderHeight, setFolderHeight] = useState(420);
  const updateFolderHeight = R.pipe(R.max, setFolderHeight, loadedMemesCounter.increment);
  const allMemesLoaded = (loadedMemesCounter.count >= memeIds.length);

  return (
    <Styled.FolderContainer
      style={{
        ...folderDragHook.offsets,
        opacity: 0 + allMemesLoaded
      }}
    >
      <Styled.FolderCoverSpacer />
      <Styled.FolderMain
        style={{
          height: folderHeight,
          zIndex: folderDragHook.z,
        }}
        draggable
        {...folderDragHook.dragHandlers}
      />
      {memeIds.map(memeId => (
        <DraggyBoi
          subscribeToResets={appendMeme}
          updateFolderHeight={updateFolderHeight}
          counter={counter}
          absolute
          folderOffsets={folderDragHook.offsets}
          key={memeId}
          parentZ={folderDragHook.z}
        >
          <InstaPost postId={memeId} />
        </DraggyBoi>
      ))}
      <Styled.FolderCover
        onClick={resetMemes}
        draggable
        {...folderDragHook.dragHandlers}
        style={{
          height: folderHeight + 40,
          zIndex: folderDragHook.z + 2,
        }}
      />
    </Styled.FolderContainer>
  );
};

export default MemesFolder;
