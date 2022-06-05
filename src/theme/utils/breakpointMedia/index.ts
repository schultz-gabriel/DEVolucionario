import { css } from 'styled-components';
import { breakpoints } from '../../themes';

export default (cssByBreakpoints:any) => {
  const breakpointsNames = Object.keys(cssByBreakpoints);
  return breakpointsNames.map((breakpointName:string) => css`
          @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoints[breakpointName]}
      }
    `);
};
