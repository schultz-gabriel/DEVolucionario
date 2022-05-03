import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/text';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../../foundation/link';

const ButtonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background-color: transparent;
`;

const ButtonDefault = css`
  color: ${({ theme, variant }) => get(theme, `${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `${variant}.color`)};
`;

const ButtonWrapper = styled.button`
  display:flex;
  justify-content: center;
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};
  
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      padding: 12px 43px;
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}
  
  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};
  
  ${propToStyle('margin')}
  ${propToStyle('display')}
  ${propToStyle('position')}
  ${propToStyle('top')}
  ${propToStyle('right')}
  ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

function Button({
  href, children, ...props
}) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ButtonWrapper as={tag} href={href} {...props}>
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
  blank: false,
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  blank: PropTypes.bool,
};

export default Button;
