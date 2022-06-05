/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled, { css } from 'styled-components';
import Text from '../../components/foundations/Text';

import PageWrapper from '../../components/layout/PageWrapper';

import breakpointMedia from '../../theme/utils/breakpointMedia';

const HtmlComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  /* ${breakpointMedia({
    md: css`
    `,
  })} */
`;

const Home = () => (
  <PageWrapper>
    <HtmlComponent>
      <Text variant="title">
        Boiler Plate
      </Text>
    </HtmlComponent>
  </PageWrapper>
);

export default Home;
