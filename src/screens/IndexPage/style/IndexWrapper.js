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
margin-top: 20px;
height: 130px;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
}

.links a {
  width: 150px;
  padding: 10px 25px;
  background-color: ${({ theme }) => theme.primary.main.color};
  border-radius: 10px;
}

.links a:hover {
  transform: scale(1.04);
}
`;

export { IndexWrapper as default };
