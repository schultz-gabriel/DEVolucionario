/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const Anchor = styled.a`
color: ${({ theme }) => theme.colors.primary.main.contrastText};
text-decoration: none;
`;

// eslint-disable-next-line react/prop-types
export default function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <Anchor
        {...props}
      >
        {children}
      </Anchor>
    </NextLink>
  );
}
