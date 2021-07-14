import styled from 'styled-components';
import { Flex } from 'rebass';

const delay = props => (props.delay || '500ms');

export const FloatInWrapper = styled(Flex)`
  position: relative;
  opacity: 0;
  top: 0px;
  left: 0px;
  flex: 1;
  animation: floatin 1s ease-out ${delay} 1 normal forwards ${props => props.scrolled ? 'running' : 'paused'};

  @keyframes floatin {
    from {
      opacity: 0;
      top: 100px;
    } to {
      opacity: 1;
      top: 0px;
    }
  }
`;
