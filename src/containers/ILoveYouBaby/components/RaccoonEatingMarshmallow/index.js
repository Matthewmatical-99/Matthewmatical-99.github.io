import React from 'react';

import useBooleanState from '../../../../hooks/useBooleanState';

import * as Styled from '../../styles';

const RaccoonEatingMarshmallow = ({ children }) => {
  const visible = useBooleanState();
  
  return (
    <React.Fragment>
      <Styled.TextButton onClick={visible.setTrue}>
        {children}
      </Styled.TextButton>
      <Styled.CentredModal
        open={visible.state}
        onClose={visible.setFalse}
        style={{ zIndex: 133769 }}
      >
        <iframe
          title="raccoonEatingMarshmallowPlayer"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HEEgOXaHZRc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Styled.CentredModal>
    </React.Fragment>
  );
};

export default RaccoonEatingMarshmallow;
