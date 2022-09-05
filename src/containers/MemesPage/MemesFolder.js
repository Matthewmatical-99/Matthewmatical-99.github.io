import React, { useState } from 'react';
import * as R from 'ramda';

import useCounter from '../../hooks/useCounter';
import useDrag from './useDrag';
import InstaPost from './InstaPost';
import DraggyBoi from './DraggyBoi';

import * as Styled from './styles';
import useListState from '../../hooks/useListState';

const MemesFolder = ({ memeIds, counter }) => {
  const [memeResetters, setMemeResetters] = useState([]);
  const appendMeme = R.pipe(R.append, setMemeResetters);
  const resetMemes = () => { memeResetters.forEach(R.call); };

  const loadedMemesCounter = useCounter();
  const [folderHeight, setFolderHeight] = useState(420);
  const updateFolderHeight = R.pipe(R.max, setFolderHeight, loadedMemesCounter.increment);
  const allMemesLoaded = (loadedMemesCounter.count >= memeIds.length);

  const folderDragHook = useDrag(counter);

  const memesAttachmentStatus = useListState(R.repeat(true, memeIds.length));

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
      >
        {memeIds.map((memeId, index) => (
          memesAttachmentStatus.value[index] ? (
            <DraggyBoi
              subscribeToResets={appendMeme}
              updateFolderHeight={updateFolderHeight}
              counter={counter}
              absolute
              setAttachment={memesAttachmentStatus.updateOne(index)}
              folderOffsets={folderDragHook.offsets}
            >
              <InstaPost postId={memeId} />
            </DraggyBoi>
          ) : null
        ))}
      </Styled.FolderMain>
      <Styled.FolderCover
        onClick={resetMemes}
        draggable
        {...folderDragHook.dragHandlers}
        style={{
          height: folderHeight + 40,
          zIndex: folderDragHook.z,
        }}
      />
      {memeIds.map((memeId, index) => (
        memesAttachmentStatus.value[index] ? null : (
          <DraggyBoi
            subscribeToResets={appendMeme}
            updateFolderHeight={updateFolderHeight}
            counter={counter}
            absolute
            setAttachment={memesAttachmentStatus.updateOne(index)}
            folderOffsets={folderDragHook.offsets}
          >
            <InstaPost postId={memeId} />
          </DraggyBoi>
        )
      ))}
    </Styled.FolderContainer>
  );
};

export default MemesFolder;
