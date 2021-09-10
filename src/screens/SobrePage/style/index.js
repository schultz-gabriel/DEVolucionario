import styled, { css } from 'styled-components';
import breakpointMedia from '../../../theme/utils/breakpointMedia';

const WrapperContributorsData = styled.div`
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;

  ${breakpointMedia({
    xs: css`
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      
      span { 
        display: inline;
        margin-left: 8px;
      }
    `,
    md: css`
      flex-direction: row;
      justify-content: space-around;
      
      span { 
        display: none; 
      }
    `,
  })};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 6px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    transition: all ${({ theme }) => theme.transition};

    &:hover {
      box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
      transform: scale(1.2);
    }

    ${breakpointMedia({
    md: css`
      width: 90px;
      height: 90px;
    `,
  })};
  }
`;

export default WrapperContributorsData;
