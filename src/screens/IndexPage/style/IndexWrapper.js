import styled, { css } from 'styled-components';
import breakpointMedia from '../../../theme/utils/breakpointMedia';

const IndexWrapper = styled.main`
width:100%;
margin:0;

${breakpointMedia({
    sm: css`
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: ${({ theme }) => theme.borderRadius};
    margin:1rem;
    `,
    md: css`
    `,
  })};
`;

export { IndexWrapper as default };
