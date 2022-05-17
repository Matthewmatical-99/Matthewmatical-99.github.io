import React from 'react';
import Slider from '@material-ui/core/Slider';

const mazeConfigInput = ({ value, height, handler, name }) => {
  return (
    <div>
      <label>{name}</label>
      <Slider
        max={201}
        min={5}
        onChange={(event, newVal) => handler(newVal)}
        step={height ? 2 : 1} // Note that height is a bool; only odd values shall be accepted as maze heights.
        value={value}
      />
    </div>
  );
};

export default mazeConfigInput;
