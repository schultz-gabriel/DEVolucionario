import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding-right: 28px;
  padding-left: 28px;
`;

export default (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <FooterWrapper {...props}>
    <p>
      Gabriel © 2022
    </p>
  </FooterWrapper>
);
