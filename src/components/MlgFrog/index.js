import React from 'react';
import Switch from '@material-ui/core/Switch';

import froggo from '../../assets/mlgFrog.gif'
import * as Styled from './styles';

const MlgFrog = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Styled.FrogControl>
      <p>Toggle froggo</p>
      <Switch
        checked={visible}
        onChange={event => setVisible(event.target.checked)}
      />
      <Styled.FrogWrapper>
        <Styled.Froggo src={froggo} visible={visible} />
      </Styled.FrogWrapper>
    </Styled.FrogControl>
  );
};

export default MlgFrog;
