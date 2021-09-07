import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

import breakpointMedia from '../../../theme/utils/breakpointMedia';

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

IndexWrapper.ContentRow = styled.div`
width:100%;
margin:0;
display:flex;
justify-content: space-around;
align-items:center;
flex-wrap:wrap;

${breakpointMedia({
    sm: css`
    
    `,
    md: css`
    width:100%;
    `,
  })};
`;

IndexWrapper.ContentCol = styled.div`
width:100%;
margin:0;
display:flex;

${breakpointMedia({
    sm: css`
    
    `,
    md: css`
    /* width:50%; */
    
    ${({ fullWidth }) => (fullWidth
    ? css`width: 100%;`
    : css`width: 50%;`)
}


    `,
  })};
`;

IndexWrapper.DecorativeCol = styled.div`
width:100%;
margin:0;
display:none;

${breakpointMedia({
    sm: css`
    
    `,
    md: css`
        ${propToStyle('width')}
        display:flex;
    `,
  })};
`;

export { IndexWrapper as default };
