/* eslint-disable no-confusing-arrow */
import styled, { css } from 'styled-components';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const NavWrapper = styled.nav`
display:flex;
flex-direction: column;
justify-content:space-around;
flex-shrink:0;
background-color: rgba(0, 0, 0, 0.8);
width:100%;
height:100%;
position:absolute;
transition: ${({ theme }) => theme.transition};
transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-150%)'};
margin:0;


${breakpointMedia({
    sm: css`
        `,
    md: css`
    width:25%;
    transform: none;
    position:relative;
    margin:1rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: ${({ theme }) => theme.borderRadius};
    height:300px;
    /* width:15%; */
    `,
  })};
`;

export { NavWrapper as default };
