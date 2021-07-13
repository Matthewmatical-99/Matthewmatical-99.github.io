import React from 'react';
import PropTypes from 'prop-types';
import { VolumeOff, VolumeUp } from '@material-ui/icons';
import { styled } from '@material-ui/core/styles';

const iconStyle = {
  background: '#FFFFFF00',
  color: '#00FF00',
  border: 0,
  height: 69,
  width: 69,
  position: 'fixed',
  top: 0,
  right: 0,
  zIndex: 69,
};

const MutedButton = styled(VolumeOff)(iconStyle);

const UnmutedButton = styled(VolumeUp)(iconStyle);

const MuteButton = ({ mutedState, toggleMute }) => (
  mutedState
    ? <MutedButton onClick={toggleMute} />
    : <UnmutedButton onClick={toggleMute} />
);

MuteButton.propTypes = {
  mutedState: PropTypes.bool.isRequired,
  toggleMute: PropTypes.func.isRequired,
};

export default MuteButton;
