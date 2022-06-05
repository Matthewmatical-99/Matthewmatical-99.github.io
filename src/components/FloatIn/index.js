import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import useBooleanState from '../../hooks/useBooleanState';
import * as Styled from './styles';

const FloatIn = ({ children, ...otherProps }) => {
  const visibleState = useBooleanState();
  const floatRef = useRef(null);

  useEffect(() => {
    const listener = () => {
      // When the element is not below the screen, make it float in.
      if (floatRef.current.getBoundingClientRect().top - window.innerHeight <= 0 && !visibleState.state) {
        visibleState.setTrue();
      }
    };

    if (floatRef) {
      listener(); // In case the element is already on screen
      window.addEventListener('scroll', listener);
      return (() => {
        window.removeEventListener('scroll', listener);
      });
    }
  }, [floatRef]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Styled.FloatInWrapper
      scrolled={visibleState.state}
      ref={floatRef}
      {...otherProps}
    >
      {children}
    </Styled.FloatInWrapper>
  );
};

FloatIn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FloatIn;
