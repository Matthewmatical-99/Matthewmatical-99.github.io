import React from 'react';

import FloatIn from '../../components/FloatIn';
import { BasicInfo, Degree, WorkExperience } from './content';

import * as Styled from './styles';

const AboutMePage = () => (
  <React.Fragment>
    <Styled.ContentList>
      <Styled.ImageWrapper>
        <FloatIn delay="500ms">
          <BasicInfo />
        </FloatIn>
      </Styled.ImageWrapper>
      <Styled.ImageWrapper>
        <FloatIn delay="1000ms">
          {/* Selfie, pink+blue hair, suit jacket */}
          <Styled.AMPImage src="https://i.imgur.com/qPmFV1Q.jpg" />
        </FloatIn>
      </Styled.ImageWrapper>
      <Styled.ImageWrapper>
        <FloatIn delay="1500ms">
          <WorkExperience />
        </FloatIn>
      </Styled.ImageWrapper>
      <Styled.ImageWrapper>
        <FloatIn delay="750ms">
          <Degree />
        </FloatIn>
      </Styled.ImageWrapper>
      <Styled.ImageWrapper>
        <FloatIn delay="1250ms">
          {/* Selfie, light pink hair, with mask */}
          <Styled.AMPImage src="https://i.imgur.com/rfSAZnb.jpg" />
        </FloatIn>
      </Styled.ImageWrapper>
    </Styled.ContentList>
  </React.Fragment>
);

export default AboutMePage;
