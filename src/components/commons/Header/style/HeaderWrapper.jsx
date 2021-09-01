import styled, { css } from 'styled-components';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.primary.main.color};
  display:flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  padding:1rem;

  div:nth-child(3){
    ${breakpointMedia({
    sm: css`
      display:none;
        `,
    md: css`
    `,
  })};
}
`;

export { HeaderWrapper as default };
