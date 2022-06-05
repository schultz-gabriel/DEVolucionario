import styled, { css } from 'styled-components';
import breakpointMedia from '../../../theme/utils/breakpointMedia';

const NavWrapper = styled.nav`
display: flex;
margin-left: auto;
width: fit-content;
`;

const LinkList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
width:200px;
margin: 30px 0;

${breakpointMedia({
    md: css`
    flex-direction: row;
    gap: 30px;
    width:auto;
    margin: 0 30px 0 0
    `,
  })}
`;

const LinkItem = styled.li`
display: flex;
`;

export { NavWrapper, LinkList, LinkItem };
