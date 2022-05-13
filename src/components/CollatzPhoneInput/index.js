import React, { useState } from 'react';
import { Flex } from 'rebass';

const formatNum = num => (num + '').padStart(10, '0');

const CollatzPhoneInput = () => {
  const [num, setNum] = useState(1);

  return (
    <Flex flex={1} flexDirection="column">
      <p>Very user-friendly phone number input:</p>
      <p>Your phone number:&nbsp;{formatNum(num)}</p>
      <Flex flex={1} justifyContent="center">
        <button onClick={() => setNum(num * 2)}>2n</button>
        {((num % 3) === 1)
          ? <button onClick={() => setNum((num - 1) / 3)}>(n-1)/3</button>
          : <button disabled>(n-1)/3</button>}
        <button onClick={() => setNum(1)}>Reset</button>
        <button onClick={() => {
          alert('Congrats! You just submitted the phone number ' + formatNum(num)
          + "! Don't worry; I don't record these numbers anywhere; this is just for fun");
        }}>Submit</button>
      </Flex>
    </Flex>
  )
};

export default CollatzPhoneInput;
