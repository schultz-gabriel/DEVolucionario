import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const CardWrapper = styled.ul`
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 10%;

  li {
    padding: 10px 0;
  }

  .link {
    background-color: ${({ theme }) => theme.primary.main.color};
    border-radius: 10px;
    transition: ease-in-out 200ms;

    &:hover {
        transform: scale(1.05);
      }
  }

  .arrow {
    display: none;

    ${breakpointsMedia({
    md: css`
      display: initial;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      transform: rotate(45deg);
      transition: ease-in-out 0.3s;
    `,
  })}
  }

  .link:hover .arrow {
    transform: rotate(0);
    background-color: white;
  }


`;

export default CardWrapper;
