import styled, { css } from 'styled-components';

import breakpointMedia from '../../theme/utils/breakpointMedia';

const MobileWrapper = styled.div`
width: fit-content;
${breakpointMedia({
    md: css`
    display: none;
    `,
  })}
`;

const DesktopWrapper = styled.div`
width: fit-content;
display: none;

${breakpointMedia({
    md: css`
    display: flex;
    `,
  })}
`;

export { MobileWrapper, DesktopWrapper };
