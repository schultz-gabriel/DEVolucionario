import styled, { css } from 'styled-components';
import breakpointMedia from '../../../theme/utils/breakpointMedia';

const PageWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
padding: 0 30px;

${breakpointMedia({
    md: css`
    `,
  })};
`;

export default PageWrapper;