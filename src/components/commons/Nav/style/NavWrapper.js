/* eslint-disable no-confusing-arrow */
import styled, { css } from 'styled-components';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const NavWrapper = styled.aside`
width:fit-content;
transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-150%)'};
transition: ${({ theme }) => theme.transition};
background-color: ${({ theme }) => theme.background.main.color};
position:absolute;
margin:0;
height:fit-content;


nav{
display:flex;
flex-direction: column;
justify-content:space-around;
width:100%;
transition: ${({ theme }) => theme.transition};
}

ul{
  display:flex;
  flex-direction:column;
  height:70%;
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
  text-transform:uppercase;
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
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: rgba(0,0,0, 0.1);
    border: 10px solid #5081FB;
    margin:1rem;

    nav{
    width:280px;
    height:360px;
  }

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
