import React from 'react';
import { Flex } from 'rebass';

import MlgFrog from '../../components/MlgFrog';
import useCounter from '../../hooks/useCounter';
import MemesFolder from './MemesFolder';

import * as Styled from './styles';

const rosiePostId = "CgXyZoaujMV";
const myPostId = "CgZSrvxOaC0";
const tgmPostId = 'CiG2aaoMYwx';

function MemesPage() {
  const counter = useCounter();

  return (
    <div>
      <div className="content-body">
        <p>You can drag these memes (and their folders) around!</p>
        <p>To click on a post instead of dragging it, please double-click instead.</p>
        <p>Click on the left bar of a folder to put all of the memes back inside it.</p>
        <p>More memes coming soon! Also some UI improvements, eventually...</p>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Even more memes
        </a>
        <MlgFrog />
      </div>
      <Flex flex={1} flexDirection="row" flexWrap="wrap">
        <Styled.FolderWrapper>
          <MemesFolder
            memeIds={[rosiePostId, myPostId, tgmPostId]}
            counter={counter}
          />
        </Styled.FolderWrapper>
        <Styled.FolderWrapper>
          <MemesFolder
            memeIds={['CgV9BN4sZ8I', 'CQqI6M4lLG5', 'CBqDGHqlg8c', 'CiHctVvOKB8']}
            counter={counter}
          />
        </Styled.FolderWrapper>
      </Flex>
      <Styled.Spacer height="69px" />
    </div>
  );
}

export default MemesPage;
