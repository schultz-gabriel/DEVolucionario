import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const IndexWrapper = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width:100%;
  margin:0;
  background-color: rgba(0,0,0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 12px solid #5081FB;
  margin:1rem;
  display:flex;
  flex-direction:column;

img {
  width: 100%;
}

.links {
margin: 20px 0;
height: 130px;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
}

.links a {
  width:100%;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.primary.main.color};
  border-radius: 10px;
  transition: ${({ theme }) => theme.transition};
}

.links a:hover {
  transform: scale(1.04);
}

${breakpointsMedia({
    md: css`
    .links{
      flex-direction: row;
    }
     .links a {
      width: 30%;

     }
    `,
  })}
`;

export { IndexWrapper as default };
