import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const WrapperLinks = styled.ul`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  li {
    padding: 10px 0;
    transition: ease-in-out 200ms;

      &:hover {
        transform: scale(1.05);
      }
  }

  .link {
    background-color: ${({ theme }) => theme.primary.main.color};
    border-radius: 10px;
  }

  .arrow {
    display: none;

    ${breakpointsMedia({
  md: css`
      display: initial;
      border-radius: 50%;
      transform: rotate(45deg);
      transition: ease-in-out 0.3s;
    `,
})}
  }

  li:hover .arrow {
    transform: rotate(0);
  }


`;

export default WrapperLinks;
