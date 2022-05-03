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

  .nav_md{
    display: none;
  }

  .nav_sm{
    display: block;
    width: 100%;
  }

    ${breakpointMedia({
    sm: css`
        `,
    md: css`

      .nav_sm{
        display: none;
    }

      .nav_md{
    display: flex;
    margin: 0 0 0 auto;
    }

    div:nth-child(4){
      display: none;
}
    `,
  })};


`;

export default HeaderWrapper;
