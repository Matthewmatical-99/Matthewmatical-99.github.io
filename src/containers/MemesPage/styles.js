import styled from 'styled-components';
import * as R from 'ramda';
import { Flex } from 'rebass';

const getZ = R.prop('z');

export const Draggable = styled.div`
  position: ${props => props.absolute ? 'absolute' : 'relative'};
  padding: 20px;
  background-color: pink;
  min-width: 69px;
  min-height: 69px;
  max-width: 540px;
  z-index: ${getZ};
  margin: ${props => props.absolute ? 20 : 0}px;
`;

export const DragCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-width: 69px;
  min-height: 69px;
  background-color: lightblue;
  opacity: 0;
  top: 0;
  left: 0;
`;

export const FolderMain = styled.div`
  display: flex;
  position: absolute;
  padding: 20px;
  background-color: palegreen;
  top: 0px;
  left: 100px;
  height: 100%;
  width: 100%;
  max-width: 366px;
  // z-index: ${getZ};
  border: 1px solid green;
`;

export const FolderCover = styled.div`
  width: 100px;
  max-width: 100px;
  min-width: 100px;
  background-color: lightgreen;
  height: 420px;
  // z-index: ${getZ};
  display: flex;
  flex: 1;
  position: absolute;
  left: 0px;
  top: 0px;
  border: 1px solid green;
`;

export const FolderCoverSpacer = styled.div`
  width: 100px;
  max-width: 100px;
  min-width: 100px;
  background-color: transparent;
  height: 420px;
  // z-index: ${getZ};
  display: flex;
  flex: 1;
  position: relative;
`;

export const FolderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  position: relative;
  max-width: 466px;
  margin: 69px 69px 420px;
`;

export const MemesContainer = styled.div`
  display: flex;
  position: relative;
  padding: 20px;
  background-color: transparent;
`;

export const Spacer = styled.div`
  width: 100vw;
  height: ${R.prop('height')};
  opacity: 0;
`;

export const FolderWrapper = styled(Flex)`
  flex: 1;
  flex-direction: row;
  min-width: 569px;
`;
