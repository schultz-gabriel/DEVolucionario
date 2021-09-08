import styled from 'styled-components';

const IndexWrapper = styled.main`
width:100%;
margin:0;
background-color: ${({ theme }) => theme.background.light.color};
border-radius: ${({ theme }) => theme.borderRadius};
border: 20px solid #5081FB;
margin:1rem;
display:flex;
flex-direction:column;
`;

export { IndexWrapper as default };
