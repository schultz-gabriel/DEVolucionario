import styled, { css } from 'styled-components';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const FooterWrapper = styled.nav`
text-align:center;

${breakpointMedia({
    sm: css`
        `,
    md: css`
    `,
  })};
`;

export default FooterWrapper;
