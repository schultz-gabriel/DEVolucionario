/* eslint-disable no-confusing-arrow */
import styled, { css } from 'styled-components';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const NavWrapper = styled.nav`
display:flex;
flex-direction: column;
justify-content:space-around;
background-color: rgba(0, 0, 0, 0.8);
width:100%;
height:100%;
position:absolute;
bottom:0;
transition: ${({ theme }) => theme.transition};
transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-150%)'};


${breakpointMedia({
    sm: css`
    width:25%;
    transform: none;
    position:relative;
        `,
    md: css`
    width:20%;
    `,
  })};
`;

export { NavWrapper as default };
