/* eslint-disable no-confusing-arrow */
import styled, { css } from 'styled-components';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const NavWrapper = styled.nav`
width:100%;
position: relative;
transition: ${({ theme }) => theme.transition};
margin:0;
height:fit-content;
display:${({ open }) => open ? 'flex' : 'none'};
flex-direction: column;
justify-content:space-around;


ul{
  position:relative;
  top: 0;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  padding:0;
  width:100%;
}

li{
  width:100%;
  list-style:none;
  display:flex;
  justify-content:center;
}

.link{
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  font-size:25px;
  text-transform:uppercase;
}

${breakpointMedia({
    sm: css`
        `,
    md: css`
    width:auto;
    flex-shrink:0;
    transform: none;
    position:relative;
    display:flex;
    border-radius: ${({ theme }) => theme.borderRadius};

    ul{
      flex-direction: row;
    }

    li{
      /* justify-content:left; */
    }

    .link{
      justify-content: center;
      width:100%;
    }
    `,
  })};
`;

export default NavWrapper;
