import styled, { css } from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';
import breakpointMedia from '../../../../theme/utils/breakpointMedia';

const TextArea = styled.div`
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

TextArea.ContentCol = styled.div`
width:100%;
margin:0;
display:flex;

${breakpointMedia({
    lg: css`    
    ${({ fullWidth }) => (fullWidth
    ? css`width: 100%;`
    : css`width: 50%;`)
}
    `,
  })};
`;

TextArea.DecorativeCol = styled.div`
width:100%;
margin:0;
display:none;

${breakpointMedia({
    lg: css`
        ${propToStyle('width')}
        display:flex;
    `,
  })};
`;

export { TextArea as default };
