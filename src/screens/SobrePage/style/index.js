import styled from 'styled-components';

const WrapperContributorsData = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  img {
    /* width: 70px;
    height: 70px; */
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 6px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow ${({ theme }) => theme.transition};

    &:hover {
      box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default WrapperContributorsData;
