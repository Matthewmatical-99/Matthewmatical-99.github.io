import React from 'react';

import FloatIn from '../../components/FloatIn';
import { BasicInfo, Degree, WorkExperience } from './content';

import * as Styled from './styles';

const AboutMePage = () => (
  <React.Fragment>
    <p style={{ color: 'white' }}>More content coming soon!</p>
    <Styled.ContentList>
      <Styled.ImageWrapper>
        <FloatIn delay="500ms">
          <BasicInfo />
        </FloatIn>
      </Styled.ImageWrapper>
      <Styled.ImageWrapper>
        <FloatIn delay="1000ms">
          {/* Selfie, pink hair, with mask */}
          <Styled.AMPImage src="https://lh3.googleusercontent.com/pw/AM-JKLXi4BcfhP03jeAVEPfKyp4dx8Gmu_fi_NEl0Xo88BtY2YehVPE5T4QXa1WKRx6MfnsBOUdbNpPOlfaShafreVY4XYUeUTNt0WSSM8aYXS_CHgC5OnfuC9BqEAyQIANSeIdF_4QlhhT1kFf5s-avIj6zdg=w727-h969-no?authuser=0" />
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
    </Styled.ContentList>
  </React.Fragment>
);

export default AboutMePage;
