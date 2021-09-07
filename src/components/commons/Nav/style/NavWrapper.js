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
transition: ${({ theme }) => theme.transition};
transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-150%)'};
margin:0;

ul{
  display:flex;
  flex-direction:column;
  height:70%;
  /* align-items:center; */
  justify-content:space-around;
  padding:0;
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
  justify-content:left;
  width:300px;
  font-size:25px;
}


img{
  width:60px;
  filter:invert();
  background-color: #af7e04;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-right:30px;
}

${breakpointMedia({
    sm: css`
        `,
    md: css`
    width:auto;
    flex-shrink:0;
    transform: none;
    position:relative;
    margin:1rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: ${({ theme }) => theme.borderRadius};
    height:300px;


    li{
      justify-content:left;
    }

    .link{
      width:100%;
      justify-content:left;
    }
    `,
  })};
`;

export { NavWrapper as default };
