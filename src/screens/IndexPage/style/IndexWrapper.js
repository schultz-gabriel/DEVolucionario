import styled from 'styled-components';

const IndexWrapper = styled.main`
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
height: 200px;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
}
`;

export { IndexWrapper as default };
