import React, { useState } from 'react';
import * as R from 'ramda';

import useCounter from '../../hooks/useCounter';
// import useDrag from './useDrag';
import InstaPost from './InstaPost';
import DraggyBoi from './DraggyBoi';

import * as Styled from './styles';

const MemesFolder = ({ memeIds, counter }) => {
  const [memeResetters, setMemeResetters] = useState([]);
  const appendMeme = R.pipe(R.append, setMemeResetters);
  const resetMemes = () => { memeResetters.forEach(R.call); };

  const loadedMemesCounter = useCounter();
  const [folderHeight, setFolderHeight] = useState(420);
  const updateFolderHeight = R.pipe(R.max, setFolderHeight, loadedMemesCounter.increment);
  const allMemesLoaded = (loadedMemesCounter.count >= memeIds.length);

  return (
    <Styled.FolderContainer style={{ opacity: 0 + allMemesLoaded }}>
      <Styled.FolderCover onClick={resetMemes} style={{ height: folderHeight + 40 }} />
      <Styled.FolderMain style={{ height: folderHeight }} />
      <Styled.MemesContainer>
        {memeIds.map(memeId => (
          <DraggyBoi
            subscribeToResets={appendMeme}
            updateFolderHeight={updateFolderHeight}
            counter={counter}
            absolute
          >
            <InstaPost postId={memeId} />
          </DraggyBoi>
        ))}
      </Styled.MemesContainer>
    </Styled.FolderContainer>
  );
};

export default MemesFolder;
