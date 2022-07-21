import React from 'react';
import { DateTime } from 'luxon';

import * as Styled from '../styles';

// I *could* just update the text every year, but screw that
const myAge = () => Math.floor(DateTime.now().diff(DateTime.local(1999, 9, 30), 'years').years).toString();

const BasicInfo = () => (
  <Styled.Textbox flex={1} flexDirection="column">
    <p>Hi, I'm Zoey! I'm a {myAge()}-year-old
    software developer from Toronto, Canada.
    My pronouns are she/her; respect them or perish.</p>
    <p>I'm currently looking for work as a software developer. 
    If you want to hire me,
    you can contact me at matthewphillips93669@gmail.com</p>
  </Styled.Textbox>
);

export default BasicInfo;
