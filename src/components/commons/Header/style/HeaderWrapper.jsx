import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.primary.main.color};
  display:flex;
  align-items: center;
  justify-content: space-between;
  /* position: fixed; */
  z-index: 2;
  padding:1rem;
`;

export { HeaderWrapper as default };
