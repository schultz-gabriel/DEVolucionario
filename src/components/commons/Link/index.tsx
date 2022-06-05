/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

import Text from '../../foundations/Text';

import { IComponent } from '../../types';

interface ILink extends IComponent {
    href: string,
    // eslint-disable-next-line react/require-default-props
    tag?: 'title' | 'subTitle' | 'paragraph1' | 'paragraph2' | 'smallestException'
}

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default function Link({
  href, children, tag, ...props
}:ILink) {
  const textTag = tag || 'subTitle';
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>
        <Text variant={textTag} as="span">
          {children}
        </Text>
      </StyledLink>
    </NextLink>
  );
}
