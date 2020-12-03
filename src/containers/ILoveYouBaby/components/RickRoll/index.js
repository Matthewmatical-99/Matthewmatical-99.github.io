import React from 'react';

import useBooleanState from '../../../../hooks/useBooleanState';

import * as Styled from '../../styles';

const RickRoll = ({ children }) => {
  const playing = useBooleanState();

  return (
    <React.Fragment>
      <Styled.TextButton onClick={playing.toggle}>{children}</Styled.TextButton>
      {playing.state ? (
        <iframe
          title="rickrollPlayer"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&start=43"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: 'none' }}
        />
      ) : null}
    </React.Fragment>
  )
};

export default RickRoll;
