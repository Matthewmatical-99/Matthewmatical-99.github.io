import React from 'react';
import PropTypes from 'prop-types';

import MuteIcon from './icon';
import * as Styled from './styles';

const MuteButton = ({ mutedState, toggleMute }) => (
  <Styled.MuteButtonWrapper onClick={toggleMute}>
    <MuteIcon
      height="4vw"
      width="4vw"
      muted={mutedState}
    />
  </Styled.MuteButtonWrapper>
  
);

MuteButton.propTypes = {
  mutedState: PropTypes.bool.isRequired,
  toggleMute: PropTypes.func.isRequired,
};

export default MuteButton;
