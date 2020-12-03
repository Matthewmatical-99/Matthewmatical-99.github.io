import React, { useState, useEffect } from 'react';
import * as R from 'ramda';

import useBooleanState from '../../../../hooks/useBooleanState';
import * as Styled from '../../styles';

const AreYouOk = ({ children }) => {
  const visible = useBooleanState();
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (visible.state) {
      setMessageList(R.range(1, 69).map(val => ({
        delay: val * 50,
        x: (Math.random() - 0.5) * 100 + 30,
        y: (Math.random() - 0.5) * 90,
        angle: (Math.random() - 0.5) * 69,
        key: `areYouOk${val}`,
      })));
    } else {
      setMessageList([]);
    }
  }, [visible.state]);

  return (
    <React.Fragment>
      <Styled.TextButton onClick={visible.toggle} style={{ zIndex: 42069 }}>
        {children}
      </Styled.TextButton>
      <Styled.MessagesMount>
        {messageList.map(messageProps => <Styled.AreYouOk {...messageProps}>Are you ok?</Styled.AreYouOk>)}
      </Styled.MessagesMount>
    </React.Fragment>
  );
};

export default AreYouOk;
