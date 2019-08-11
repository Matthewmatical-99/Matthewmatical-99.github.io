import React from 'react';

import Sanik from '../../components/Sanik';
import MlgFrog from '../../components/MlgFrog';

function MemesPage() {
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
      <Sanik />
    </div>
  );
}

export default MemesPage;
