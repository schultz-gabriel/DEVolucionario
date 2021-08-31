import styled, { css } from 'styled-components';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const NavWrapper = styled.nav`

${breakpointMedia({
    sm: css`
        `,
    md: css`
    `,
  })};
`;

export { NavWrapper as default };
