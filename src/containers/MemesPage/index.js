import React from 'react';

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
        <p>More memes coming soon!</p>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Even more memes
        </a>
        <MlgFrog />
      </div>
      <MemesFolder
        memeIds={[rosiePostId, myPostId, tgmPostId]}
        counter={counter}
      />
      <Styled.Spacer height="69px" />
    </div>
  );
}

export default MemesPage;
